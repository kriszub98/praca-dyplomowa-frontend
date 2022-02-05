import React from 'react';
import { Image, ScrollView, StyleSheet, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import DefaultText from '../components/DefaultText';
import TitleText from '../components/TitleText';
import RECIPES from '../data/DUMMY';

const Recipe = ({ recipe }) => (
	<View style={recipeStyle.recipe}>
		<TouchableNativeFeedback useForeground={true}>
			<View>
				<Image
					source={{
						uri: recipe.imageurl
					}}
					style={recipeStyle.recipeImage}
				/>
				<View style={recipeStyle.recipeContent}>
					<TitleText>{recipe.title}</TitleText>
					<DefaultText>TEST</DefaultText>
				</View>
			</View>
		</TouchableNativeFeedback>
	</View>
);

const RecipeListScreen = () => {
	return <ScrollView>{RECIPES.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}</ScrollView>;
};

export default RecipeListScreen;

const recipeStyle = StyleSheet.create({
	recipe: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 6,
		marginVertical: 6,
		overflow: 'hidden'
	},
	recipeContent: {
		marginHorizontal: 14,
		marginVertical: 12
	},
	recipeImage: {
		width: '100%',
		height: 200,
		resizeMode: 'cover'
	}
});
