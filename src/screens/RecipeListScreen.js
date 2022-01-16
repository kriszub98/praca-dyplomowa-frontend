import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import DefaultText from '../components/DefaultText';
import TitleText from '../components/TitleText';

const RECIPES = [
	{
		id: 1,
		author: {
			name: 'Jan Kowalski'
		},
		imageurl:
			'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
		title: 'Toast with blueberry',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		products: [
			{
				id: 1,
				title: 'Toast',
				quantity: '1 sztuk'
			},
			{
				id: 2,
				title: 'Raspberry',
				quantity: '1 sztuk'
			}
		],
		steps: [
			{ id: 1, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
			{ id: 2, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
			{ id: 3, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' }
		]
	},
	{
		id: 2,
		author: {
			name: 'Jan Kowalski'
		},
		imageurl:
			'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
		title: 'Toast with blueberry',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		products: [
			{
				id: 1,
				title: 'Toast',
				quantity: '1 sztuk'
			},
			{
				id: 2,
				title: 'Raspberry',
				quantity: '1 sztuk'
			}
		],
		steps: [
			{ id: 1, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
			{ id: 2, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
			{ id: 3, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' }
		]
	}
];

const ListItem = (recipe) => (
	<View style={styles.recipeContainer}>
		<Image source={recipe.imageurl} style={styles.recipeImage} />
		<TitleText>{recipe.title}</TitleText>
		<DefaultText>{recipe.author.name}</DefaultText>
	</View>
);

const RecipeListScreen = () => {
	return <ScrollView>{RECIPES.map((recipe) => <ListItem recipe={recipe} />)}</ScrollView>;
};

export default RecipeListScreen;

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
	recipeContainer: {
		paddingVertical: 10
	},
	recipeImage: {
		width: '100%',
		height: 200
	}
});
