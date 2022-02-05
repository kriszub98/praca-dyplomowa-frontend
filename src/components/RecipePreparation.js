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

const RecipePreparation = ({ steps }) => {
	let stepList = steps.map((step) => <ListItem key={step.id}>{step.title}</ListItem>);
	return (
		<View style={styles.container}>
			<TitleText style={styles.title}>Preparation steps</TitleText>
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
		marginVertical: 15,
		padding: 10
	}
});
