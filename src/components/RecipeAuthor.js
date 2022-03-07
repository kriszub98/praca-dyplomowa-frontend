import React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultText from './DefaultText';
import TitleText from './TitleText';

const RecipeAuthor = ({ author }) => {
	return (
		<View>
			<DefaultText style={styles.secondaryText}>Dodane przez:</DefaultText>
			<TitleText style={styles.primaryText}>{author.login}</TitleText>
		</View>
	);
};

export default RecipeAuthor;

const styles = StyleSheet.create({
	secondaryText: {
		fontSize: 18,
		color: 'gray'
	},
	primaryText: {
		fontSize: 18
	}
});
