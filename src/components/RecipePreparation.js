import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TitleText from './TitleText';
import DefaultText from './DefaultText';
import CustomColors from '../constans/Colors';

const ListItem = (props) => {
	const [ isStroke, setIsStroke ] = useState(false);

	const toggleStrike = () => {
		setIsStroke(!isStroke);
	};

	return (
		<TouchableOpacity style={styles.listItem} onPress={toggleStrike}>
			<DefaultText
				style={{ ...styles.listItemText, ...{ textDecorationLine: isStroke ? 'line-through' : 'none' } }}
			>
				{props.children}
			</DefaultText>
		</TouchableOpacity>
	);
};

const RecipePreparation = ({ steps }) => {
	let stepList = steps.map((step) => <ListItem key={step.id}>{step.title}</ListItem>);
	return (
		<View style={styles.container}>
			<TitleText style={styles.title}>Przygotowanie</TitleText>
			{stepList}
		</View>
	);
};

export default RecipePreparation;

const styles = StyleSheet.create({
	container: {
		marginTop: 15
	},
	title: {
		fontSize: 20
	},
	listItem: {
		marginVertical: 10,
		backgroundColor: CustomColors.recipePreparationBackground,
		borderRadius: 8,
		padding: 15
	},
	listItemText: {
		fontSize: 16,
		lineHeight: 20
	}
});
