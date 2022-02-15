import React from 'react';
import { ScrollView } from 'react-native';

import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const ProductListScreen = () => {
	const { products, getProducts, errroMessage } = useProducts();
	return <ScrollView>{products.map((product) => <ProductCard product={product} key={product._id} />)}</ScrollView>;
};

export default ProductListScreen;
