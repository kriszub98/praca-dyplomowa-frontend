import React from 'react';
import { ScrollView } from 'react-native';

import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const ProductListScreen = ({ navigation }) => {
	const { products, getProducts, errroMessage } = useProducts();

	const goToDetails = (product) => {
		navigation.navigate('ProductDetail', { product });
	};

	return (
		<ScrollView>
			{products.map((product) => (
				<ProductCard product={product} key={product._id} onPress={() => goToDetails(product)} />
			))}
		</ScrollView>
	);
};

export default ProductListScreen;
