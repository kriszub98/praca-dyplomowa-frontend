import React from 'react';
import { Image, ScrollView, StyleSheet, View, TouchableNativeFeedback, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DefaultText from '../components/DefaultText';
import TitleText from '../components/TitleText';
import RECIPES from '../data/DUMMY';

const Recipe = ({ recipe }) => {
	const { height } = useWindowDimensions();

	const navigation = useNavigation();

	return (
		<View style={recipeStyles.container}>
			<TouchableNativeFeedback useForeground={true} onPress={() => navigation.navigate('RecipeDetail')}>
				<View>
					<Image
						source={{
							uri: recipe.imageurl
						}}
						style={[ recipeStyles.image, { height: height * 0.2 } ]}
					/>
					<View style={{ marginTop: 5, marginLeft: 12, color: 'gray' }}>
						<DefaultText style={recipeStyles.description}>Data dodania: 01.03.2021</DefaultText>
					</View>
					<View style={recipeStyles.infoContainer}>
						<TitleText style={recipeStyles.title}>{recipe.title}</TitleText>
						<DefaultText style={recipeStyles.description}>
							Lorem Ipsum Description Here And Other Text Lorem Ipsum Description Here And Other Text
						</DefaultText>
					</View>
					<View style={{ flexDirection: 'row', marginLeft: 12 }}>
						<TitleText>GLU </TitleText>
						<TitleText>LAC</TitleText>
					</View>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};

const RecipeListScreen = () => {
	return <ScrollView>{RECIPES.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}</ScrollView>;
};

export default RecipeListScreen;

const recipeStyles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',

		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		borderRadius: 6,
		elevation: 3,

		marginHorizontal: 6,
		marginVertical: 6,
		paddingBottom: 6,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		maxHeight: 300,
		resizeMode: 'cover'
	},
	infoContainer: {
		marginHorizontal: 14,
		marginVertical: 12
	},
	title: {
		fontSize: 18,
		marginBottom: 4
	},
	description: {
		fontSize: 14,
		color: 'gray'
	}
});
