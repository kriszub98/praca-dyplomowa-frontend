import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react';

import useAllergies from '../hooks/useAllergies';
import useProducts from '../hooks/useProducts';
import useInput from '../hooks/useInput';
import CustomColors from '../constans/Colors';
import CustomDimensions from '../constans/Dimensions';
import TitleText from '../components/TitleText';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import AllergyContainer from '../components/AllergyContainer/AllergyContainer';

const ProductAddScreen = () => {
	const { allergies } = useAllergies();
	const { addProduct, errorMessage } = useProducts();
	const [ name, bindName, resetName ] = useInput('');
	const [ description, bindDescription, resetDescription ] = useInput('');
	const [ chosenAllergies, setChosenAllergies ] = useState([]);

	// const navigation = useNavigation();

	const onSubmitPressed = () => {
		// TODO: Logowanie, a potem redirect do home
		// navigation.navigate('RecipeList');
		addProduct(name, description, chosenAllergies);
		resetName();
		resetDescription();
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
				<CustomInput placeholder="Opis produktu" {...bindDescription} />
				{/* TODO: Zmien na CustomTextArea */}

				<TitleText style={styles.allergenText}>Alergeny:</TitleText>
				<AllergyContainer allergies={allergies} onAllergyPressed={onAllergyPressed} />
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
