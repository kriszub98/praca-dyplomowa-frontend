import React from 'react';
import { ScrollView } from 'react-native';

import RECIPES from '../data/DUMMY';
import RecipeCard from '../components/RecipeCard/RecipeCard';

const RecipeListScreen = () => {
	return <ScrollView>{RECIPES.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}</ScrollView>;
};

export default RecipeListScreen;
