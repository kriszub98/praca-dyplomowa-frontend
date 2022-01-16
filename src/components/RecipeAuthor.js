import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import DefaultText from './DefaultText';
import TitleText from './TitleText';

const RecipeAuthor = ({ author }) => {
	return (
		<View style={styles.container}>
			<View>
				<DefaultText style={{ fontSize: 18 }}>Posted by:</DefaultText>
				<TitleText style={{ fontSize: 18 }}>{author.name}</TitleText>
			</View>
			<View style={styles.followButtonContainer}>
				<DefaultText>Follow</DefaultText>
			</View>
		</View>
	);
};

export default RecipeAuthor;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row'
	},
	followButtonContainer: {
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 30
	}
});
