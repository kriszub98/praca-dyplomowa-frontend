import React from 'react';
import { StyleSheet, View } from 'react-native';
import TitleText from './TitleText';
import DefaultText from './DefaultText';

const ListItem = (props) => {
	return (
		<View style={styles.listItem}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	);
};

const RecipeProducts = ({ products }) => {
	let productList = products.map((product) => (
		<ListItem key={product.id}>
			{product.title}: {product.quantity}
		</ListItem>
	));
	return (
		<View style={styles.container}>
			<TitleText style={styles.title}>Products</TitleText>
			{productList}
		</View>
	);
};

export default RecipeProducts;

const styles = StyleSheet.create({
	container: {
		marginTop: 15
	},
	title: {
		fontSize: 20
	},
	listItem: {
		marginVertical: 10,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10
	}
});
