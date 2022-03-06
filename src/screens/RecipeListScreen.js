import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import RecipeCard from '../components/RecipeCard';
import useRecipes from '../hooks/useRecipes';
import TitleText from '../components/TitleText';
import Colors from '../constans/Colors';

const RecipeListScreen = () => {
	const { recipes, errorMessage, getRecipes } = useRecipes();

	if (errorMessage) {
		return (
			<View style={styles.messageContainer}>
				<TitleText style={styles.titleText}>
					{errorMessage || 'Błąd podczas odczytywania danych z serwera. Spróbuj ponownie później'}
				</TitleText>
			</View>
		);
	}

	if (recipes.length === 0) {
		return (
			<View style={styles.messageContainer}>
				<TitleText style={styles.titleText}>Brak przepisów spełniających dane kryteria</TitleText>
			</View>
		);
	}

	return <ScrollView>{recipes.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe} />)}</ScrollView>;
};

const styles = StyleSheet.create({
	messageContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	titleText: {
		color: Colors.primaryTitle,
		textAlign: 'center',
		fontSize: 18
	}
});

export default RecipeListScreen;
