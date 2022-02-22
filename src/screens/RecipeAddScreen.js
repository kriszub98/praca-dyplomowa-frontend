import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import useProducts from '../hooks/useProducts';
import useInput from '../hooks/useInput';
import CustomColors from '../constans/Colors';
import CustomDimensions from '../constans/Dimensions';
import TitleText from '../components/TitleText';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import PreparationCard from '../components/PreparationCard';

const ProductAddScreen = () => {
	const auth = useSelector((state) => state.auth);
	const { products, errorMessage: productsErrorMessage } = useProducts();

	// Form Data
	const [ name, bindName, resetName ] = useInput('');
	const [ description, bindDescription, resetDescription ] = useInput('');
	const [ preparation, bindPreparation, resetPreparation ] = useInput('');
	const [ preparationSteps, setPreparationSteps ] = useState([]);
	const [ chosenAllergies, setChosenAllergies ] = useState([]);

	const navigation = useNavigation();

	// Preparation functions
	const resetPreparationSteps = () => {
		setPreparationSteps([]);
	};

	const onAddPreparationPressed = () => {
		setPreparationSteps((prevSteps) => [ ...prevSteps, preparation ]);
		resetPreparation();
	};

	const resetForm = () => {
		resetName();
		resetDescription();
		resetPreparation();
		resetPreparationSteps();
	};

	const onSubmitPressed = () => {
		resetForm();
		// TODO: Dodawanie Recipe
		// TODO: Zmień redirecta
		// return navigation.navigate('ProductList');
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<TitleText style={styles.title}>Dodawanie przepisu</TitleText>

				{/* INFO SECTION */}
				<CustomInput placeholder="Nazwa przepisu" {...bindName} />
				<CustomInput placeholder="Opis przepisu" {...bindDescription} multiline />

				{/* PREPARATION SECTION */}
				<TitleText style={styles.sectionText}>Przygotowanie:</TitleText>
				{preparationSteps.map((step, idx) => <PreparationCard key={idx} step={step} />)}
				<View style={styles.preparationWrapper}>
					<View style={styles.preparationInputContainer}>
						<CustomInput placeholder="Podaj kolejny krok" {...bindPreparation} multiline />
					</View>
					<View style={styles.preparationButtonContainer}>
						<CustomButton onPress={onAddPreparationPressed} text="+" type="SECONDARY" />
					</View>
				</View>

				{/* PRODUCTS SECTION */}
				<TitleText style={styles.sectionText}>Produkty:</TitleText>
				<CustomButton onPress={onSubmitPressed} text="Dodaj przepis" />
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
	preparationWrapper: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	preparationInputContainer: {
		width: '80%'
	},
	preparationButtonContainer: {
		width: '15%'
	},
	sectionText: {
		paddingTop: 18,
		width: '100%',
		fontSize: 18
	}
});

// TODO: Edycja preparation steps
