import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

import DefaultText from '../components/DefaultText';
import RecipeAuthor from '../components/RecipeAuthor';
import RecipePreparation from '../components/RecipePreparation';
import RecipeProducts from '../components/RecipeProducts';
import TitleText from '../components/TitleText';

const RECIPE = {
	imageurl:
		'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80'
};

const RecipeDetailScreen = ({ route }) => {
	const { recipe } = route.params;
	return (
		<ScrollView>
			<Image
				source={{
					uri: RECIPE.imageurl
				}}
				style={styles.bigImage}
			/>
			<View style={styles.container}>
				<TitleText style={styles.title}>{recipe.name}</TitleText>
				<RecipeAuthor author={recipe.owner} />
				<DefaultText style={styles.description}>{recipe.description}</DefaultText>
				<RecipeProducts products={recipe.products} />
				<RecipePreparation steps={recipe.preparation} />
			</View>
		</ScrollView>
	);
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
	title: {
		paddingVertical: 10,
		fontSize: 32
	},
	description: {
		paddingVertical: 15,
		lineHeight: 20
	},
	container: {
		paddingHorizontal: 10
	},
	bigImage: {
		width: '100%',
		height: 200
	}
});

// TODO: Zmień photo na te z bd
// TODO: Rating
// TODO: Commenty
// TODO: Verified
// TODO: Favourite
