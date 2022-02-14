import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';

import useInput from '../hooks/useInput';
import CustomColors from '../constans/Colors';
import CustomDimensions from '../constans/Dimensions';
import TitleText from '../components/TitleText';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ProductAddScreen = () => {
	const [ name, bindName, resetName ] = useInput('');
	const [ description, bindDescription, resetDescription ] = useInput('');

	// const navigation = useNavigation();

	const onSubmitPressed = () => {
		// TODO: Logowanie, a potem redirect do home
		// navigation.navigate('RecipeList');
		console.log('Button Pressed');
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<TitleText style={styles.title}>Dodawanie produktu</TitleText>

				<CustomInput placeholder="Nazwa produktu" {...bindName} />
				<CustomInput placeholder="Opis produktu" {...bindDescription} />
				{/* TODO: Zmien na CustomTextArea */}

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
	}
});
