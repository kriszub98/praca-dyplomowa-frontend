import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import useProducts from '../hooks/useProducts';
import useInput from '../hooks/useInput';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import TitleText from '../components/TitleText';
import Colors from '../constans/Colors';

const ProductListScreen = ({ navigation, route }) => {
	const { products, getProducts, errroMessage } = useProducts();
	const [ name, bindName, resetName ] = useInput('');

	if (route.params && route.params.action === 'changeData') {
		getProducts(name);
		route.params.action = '';
	}

	const goToDetails = (product) => {
		navigation.navigate('ProductDetail', { product });
	};

	useEffect(
		() => {
			return getProducts(name);
		},
		[ name ]
	);

	if (errroMessage) {
		return (
			<ScrollView>
				<View style={styles.messageContainer}>
					<TitleText style={{ color: 'red' }}>{errroMessage}</TitleText>
				</View>
			</ScrollView>
		);
	}

	if (products.length === 0) {
		return (
			<ScrollView>
				<SearchBar {...bindName} placeholder="Nazwa produktu..." />
				<View style={styles.messageContainer}>
					<TitleText style={styles.titleText}>Brak produktów spełniających dane kryteria</TitleText>
				</View>
			</ScrollView>
		);
	}

	return (
		<ScrollView>
			<SearchBar {...bindName} placeholder="Nazwa produktu..." />
			{products.map((product) => (
				<ProductCard product={product} key={product._id} onPress={() => goToDetails(product)} />
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	messageContainer: {
		justifyContent: 'center',
		paddingVertical: '70%'
	},
	titleText: {
		color: Colors.primaryTitle,
		textAlign: 'center',
		fontSize: 18
	}
});

export default ProductListScreen;
