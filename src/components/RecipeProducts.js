import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TitleText from './TitleText';
import DefaultText from './DefaultText';
import CustomColors from '../constans/Colors';

const ListItem = ({ title, quantity }) => {
	const [ isStroke, setIsStroke ] = useState(false);
	const toggleStrike = () => {
		setIsStroke(!isStroke);
	};

	return (
		<TouchableOpacity activeOpacity={0.5} style={styles.listItem} onPress={toggleStrike}>
			<TitleText
				style={{ ...styles.ingridientTitle, ...{ textDecorationLine: isStroke ? 'line-through' : 'none' } }}
			>
				{title}
			</TitleText>
			<DefaultText
				style={{ ...styles.ingridientQuant, ...{ textDecorationLine: isStroke ? 'line-through' : 'none' } }}
			>
				{quantity}
			</DefaultText>
		</TouchableOpacity>
	);
};

const RecipeProducts = ({ products }) => {
	let productList = products.map((product) => (
		<ListItem key={product.id} title={product.title} quantity={product.quantity} />
	));

	return (
		<View style={styles.container}>
			<TitleText style={styles.title}>Składniki</TitleText>
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
		backgroundColor: CustomColors.recipeIngridientBackground,
		borderRadius: 8,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	ingridientTitle: {
		fontSize: 20
	},
	ingridientQuant: {
		fontSize: 16,
		color: CustomColors.secondaryText
	}
});
