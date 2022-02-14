import React from 'react';
import { ScrollView } from 'react-native';

import RECIPES from '../data/DUMMY';
import RecipeCard from '../components/RecipeCard';
import useRecipes from '../hooks/useRecipes';

const RecipeListScreen = () => {
	const { recipes, errorMessage, getRecipes } = useRecipes();
	return <ScrollView>{RECIPES.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}</ScrollView>;
};

export default RecipeListScreen;
