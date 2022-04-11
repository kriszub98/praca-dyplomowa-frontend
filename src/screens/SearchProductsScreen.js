import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import useInput from '../hooks/useInput';
import useProducts from '../hooks/useProducts';
import SearchBar from '../components/SearchBar';
import TitleText from '../components/TitleText';
import DefaultText from '../components/DefaultText';
import ErrorText from '../components/ErrorText';
import CustomColors from '../constans/Colors';

const Product = ({ product, onPress }) => {
	const allergies = product.allergies.map((allergy) => (
		<View style={productStyles.allergyContainer} key={allergy._id}>
			<DefaultText>{allergy.name}</DefaultText>
		</View>
	));

	return (
		<Pressable style={productStyles.wrapper} onPress={onPress}>
			<View>
				<TitleText style={productStyles.title}>{product.name}</TitleText>
				{allergies &&
				allergies.length > 0 && (
					<View>
						<TitleText style={productStyles.secondaryText}>Alergeny:</TitleText>
						<View style={productStyles.allergyWrapper}>{allergies}</View>
					</View>
				)}
			</View>
		</Pressable>
	);
};

const SearchProductsScreen = ({ route }) => {
	const [ searchTerm, bindSearchTerm, resetSearchTerm ] = useInput('');
	const { products, errorMessage, getProducts } = useProducts();
	const navigation = useNavigation();

	const onSearchTermSubmit = () => {
		getProducts(searchTerm);
	};

	const onProductClick = (product) => {
		resetSearchTerm();
		return navigation.navigate({ name: 'RecipeAdd', params: { product } });
	};

	return (
		<View style={{ flex: 1 }}>
			<SearchBar {...bindSearchTerm} onEndEditing={onSearchTermSubmit} />
			{errorMessage ? <ErrorText style={styles.errorMessage}>{errorMessage}</ErrorText> : null}
			<ScrollView style={styles.wrapper}>
				{products.map((product) => (
					<Product key={product._id} product={product} onPress={() => onProductClick(product)}>
						{product.name}
					</Product>
				))}
			</ScrollView>
		</View>
	);
};

export default SearchProductsScreen;

const productStyles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#fff',

		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		borderRadius: 6,
		elevation: 3,

		marginHorizontal: 6,
		marginVertical: 6,
		padding: 10,
		overflow: 'hidden'
	},
	title: {
		fontSize: 18
	},
	secondaryText: {
		color: CustomColors.secondaryText,
		marginTop: 5,
		fontSize: 14
	},
	allergyWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	allergyContainer: {
		marginVertical: 5,
		marginRight: 10
	}
});
const styles = StyleSheet.create({
	wrapper: {},
	errorMessage: {
		marginHorizontal: 6
	}
});

// TODO: Add photo to product
