import React, { useEffect, useLayoutEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import useRecipes from '../hooks/useRecipes';
import useInput from '../hooks/useInput';
import Colors from '../constans/Colors';
import RecipeCard from '../components/RecipeCard';
import TitleText from '../components/TitleText';
import SearchBar from '../components/SearchBar';
import FiltersButton from '../components/FiltersButton';

const RecipeListScreen = ({ navigation }) => {
	const [ name, bindName, resetName ] = useInput('');
	const { recipes, errorMessage, getRecipes } = useRecipes();
	const activeFilters = useSelector((state) => state.activeFilters);

	useLayoutEffect(
		() => {
			navigation.setOptions({
				headerRight: () => <FiltersButton onPress={() => navigation.navigate('Filters')} />
			});
		},
		[ navigation ]
	);

	useEffect(
		() => {
			return getRecipes(name, activeFilters.allergies);
		},
		[ name, activeFilters.allergies ]
	);

	const goToDetails = (recipe) => {
		navigation.navigate('RecipeDetail', { recipe });
	};

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
			<ScrollView>
				<SearchBar {...bindName} placeholder="Nazwa przepisu..." />
				<View style={styles.messageContainer}>
					<TitleText style={styles.titleText}>Brak przepisów spełniających dane kryteria</TitleText>
				</View>
			</ScrollView>
		);
	}

	return (
		<ScrollView>
			{/* TODO: REDESIGN BUTTON CHANGE FILTERS */}
			<SearchBar {...bindName} placeholder="Nazwa przepisu..." />
			{recipes.map((recipe) => (
				<RecipeCard key={recipe._id} recipe={recipe} onPress={() => goToDetails(recipe)} />
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

export default RecipeListScreen;
