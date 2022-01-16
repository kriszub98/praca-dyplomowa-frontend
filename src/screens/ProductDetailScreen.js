import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import DefaultText from '../components/DefaultText';
import TitleText from '../components/TitleText';

const AUTHOR = {
	name: 'Jan Kowalski',
	imageurl:
		'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80'
};

const PRODUCT = {
	imageurl:
		'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
	title: 'Toast with blueberry'
};

const ProductDetailScreen = () => {
	return (
		<ScrollView>
			<Image
				source={{
					uri: RECIPE.imageurl
				}}
				style={styles.bigImage}
			/>
			<View style={styles.container}>
				<TitleText style={styles.title}>{PRODUCT.title}</TitleText>
				<RecipeAuthor author={AUTHOR} />
				<DefaultText style={styles.description}>{RECIPE.description}</DefaultText>
				<RecipeProducts products={RECIPE.products} />
				<RecipePreparation steps={RECIPE.steps} />
			</View>
		</ScrollView>
	);
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
	title: {
		paddingVertical: 10,
		fontSize: 32
	},
	description: {
		paddingVertical: 15
	},
	container: {
		paddingHorizontal: 10
	},
	bigImage: {
		width: '100%',
		height: 200
	}
});
