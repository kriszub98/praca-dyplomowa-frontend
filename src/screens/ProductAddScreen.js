import { StyleSheet, View, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

import useAllergies from '../hooks/useAllergies';
import useProducts from '../hooks/useProducts';
import useInput from '../hooks/useInput';
import CustomColors from '../constans/Colors';
import CustomDimensions from '../constans/Dimensions';
import TitleText from '../components/TitleText';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import AddAllergyContainer from '../components/AddAllergyContainer';

const ProductAddScreen = () => {
	const auth = useSelector((state) => state.auth);
	const { allergies } = useAllergies();
	const { addProduct, errorMessage } = useProducts();
	const [ name, bindName, resetName ] = useInput('');
	const [ description, bindDescription, resetDescription ] = useInput('');
	const [ chosenAllergies, setChosenAllergies ] = useState([]);
	const [ image, setImage ] = useState(null);

	const navigation = useNavigation();

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (status !== 'granted') {
			return console.log('Brak uprawnień do kamery!');
		}

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [ 4, 3 ],
			quality: 1
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	const onSubmitPressed = () => {
		addProduct(name, description, image, auth.token, chosenAllergies);
		resetName();
		resetDescription();
		setChosenAllergies([]);
		setImage(null);
		return navigation.navigate('ProductList', { action: 'changeData' });
	};

	const onAllergyPressed = (allergy) => {
		// Check if allergy is already in state
		if (chosenAllergies.some((a) => a._id === allergy._id)) {
			return setChosenAllergies((prevState) => prevState.filter((a) => a._id !== allergy._id));
		}

		return setChosenAllergies((prevState) => [ ...prevState, allergy ]);
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<TitleText style={styles.title}>Dodawanie produktu</TitleText>
				<CustomInput placeholder="Nazwa produktu" {...bindName} />
				<CustomInput placeholder="Opis produktu" {...bindDescription} multiline />
				{/* TODO: Zmien na CustomTextArea */}

				<TitleText style={styles.allergenText}>Alergeny:</TitleText>
				<AddAllergyContainer
					allergies={allergies}
					selectedAllergies={chosenAllergies}
					onAllergyPressed={onAllergyPressed}
				/>

				<CustomButton onPress={pickImage} text="Wybierz zdjęcie" />
				{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
				<CustomButton onPress={onSubmitPressed} text="Dodaj produkt" />
			</View>
		</ScrollView>
	);
};

export default ProductAddScreen;

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		padding: 20
	},
	title: {
		fontSize: CustomDimensions.bigTitle,
		color: CustomColors.primaryTitle,
		marginVertical: '15%'
	},
	allergyContainer: {
		padding: '20'
	},
	allergenText: {
		paddingTop: 18,
		width: '100%',
		fontSize: 18
	}
});
