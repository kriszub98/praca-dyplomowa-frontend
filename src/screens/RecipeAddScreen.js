import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import RecipeProduct from '../models/RecipeProduct';
import useInput from '../hooks/useInput';
import CustomColors from '../constans/Colors';
import CustomDimensions from '../constans/Dimensions';
import TitleText from '../components/TitleText';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import PreparationCard from '../components/PreparationCard';
import RecipeProductItem from '../components/RecipeProductItem';

const ProductAddScreen = ({ route }) => {
	const navigation = useNavigation();

	// Check if somebody is adding new product from SearchProductScreen
	useEffect(
		() => {
			// TODO: CHECK IF PROD iS ALREADY IN
			if (route.params && route.params.product) {
				const newProduct = new RecipeProduct(route.params.product);
				return setChosenProducts((prevProducts) => [ ...prevProducts, newProduct ]);
			}
		},
		[ route.params ]
	);

	const auth = useSelector((state) => state.auth);

	// Form Data
	const [ name, bindName, resetName ] = useInput('');
	const [ description, bindDescription, resetDescription ] = useInput('');
	const [ preparation, bindPreparation, resetPreparation ] = useInput('');
	const [ preparationSteps, setPreparationSteps ] = useState([]);
	const [ chosenProducts, setChosenProducts ] = useState([]);

	const resetPreparationSteps = () => {
		setPreparationSteps([]);
	};

	const resetChosenProducts = () => {
		setChosenProducts([]);
	};

	const editPreparationStep = (index, changedValue) => {
		setPreparationSteps((prevSteps) => {
			let newSteps = [ ...prevSteps ];
			newSteps[index] = changedValue;
			return newSteps;
		});
	};

	const removePreparationStep = (index) => {
		setPreparationSteps((prevSteps) => {
			let newSteps = [ ...prevSteps ];
			newSteps.splice(index, 1);
			return newSteps;
		});
	};

	const removeProduct = (index) => {
		setChosenProducts((prevProducts) => {
			let newProducts = [ ...prevProducts ];
			newProducts.splice(index, 1);
			return newProducts;
		});
	};

	const editProductQuantity = (index, newQuantity) => {
		setChosenProducts((prevProducts) => {
			let newProducts = [ ...prevProducts ];
			newProducts[index].quantity = newQuantity;
			return newProducts;
		});
	};

	const onAddPreparationPressed = () => {
		setPreparationSteps((prevSteps) => [ ...prevSteps, preparation ]);
		resetPreparation();
	};

	const onSearchProductPress = () => {
		navigation.navigate('SearchProducts');
	};

	const resetForm = () => {
		resetName();
		resetDescription();
		resetPreparation();
		resetPreparationSteps();
		resetChosenProducts();
	};

	const onSubmitPressed = () => {
		let formData = {
			name,
			description,
			chosenProducts,
			preparationSteps
		};
		console.log(formData);
		// console.log(preparationSteps);
		// TODO: Sprawdz czy wszystko wypełnione, może dodaj errorMessage do produktu, jeżeli ktoś nie podał quant. If wszystkie wypełnione wyślij forma!
		// TODO: usun koment resetForm();
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
				{preparationSteps.map((step, idx) => (
					<PreparationCard
						key={idx}
						index={idx}
						step={step}
						removePreparation={removePreparationStep}
						editPreparation={editPreparationStep}
					/>
				))}
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
				{chosenProducts.map((recipeProduct, index) => (
					<RecipeProductItem
						key={recipeProduct.product._id}
						product={recipeProduct.product}
						index={index}
						removeProduct={removeProduct}
						quantity={recipeProduct.quantity}
						editProductQuantity={editProductQuantity}
					/>
				))}
				<CustomButton onPress={onSearchProductPress} text="Dodaj produkt do przepisu" type="SECONDARY" />

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
		marginTop: 20,
		marginBottom: 10,
		width: '100%',
		fontSize: 18
	}
});

// TODO: W SearchScreenie nie pokaazuj produktów, które są wybrane
