import React from 'react';
import { Image, StyleSheet, View, TouchableNativeFeedback, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import CustomColors from '../../constans/Colors';
import DefaultText from '../../components/DefaultText';
import TitleText from '../../components/TitleText';
import AllergyContainer from '../../components/AllergyContainer';

const RecipeCard = ({ recipe, onPress }) => {
	const { height } = useWindowDimensions();

	const navigation = useNavigation();

	return (
		<TouchableNativeFeedback useForeground={true} onPress={onPress}>
			<View style={styles.container}>
				{/* Photo Section */}
				{/* TODO: IF NO PHOTO: MAKE IT DEFAULT */}
				<Image
					source={{
						uri: recipe.imageurl
					}}
					style={[ styles.image, { height: height * 0.25 } ]}
				/>

				{/* Author Section */}
				<View style={styles.dateValidationRow}>
					<View>
						<DefaultText style={styles.secondaryText}>Dodał: {recipe.owner.login}</DefaultText>
						<DefaultText style={styles.secondaryText}>Data dodania: {recipe.createdAt}</DefaultText>
					</View>
					{recipe.isValidated && (
						<View style={styles.validatedContainer}>
							<AntDesign name="checkcircleo" size={16} color={CustomColors.validatedText} />
							<TitleText style={styles.validatedText}>Zweryfikowane</TitleText>
						</View>
					)}
				</View>

				{/* Recipe Data */}
				<View style={styles.infoContainer}>
					<TitleText style={styles.title}>{recipe.name}</TitleText>
					<DefaultText style={styles.description}>{recipe.description}</DefaultText>
				</View>

				{/* Allergies Data */}
				<AllergyContainer allergies={recipe.allergies} />

				{/* TODO: Rating */}
			</View>
		</TouchableNativeFeedback>
	);
};

export default RecipeCard;

const styles = StyleSheet.create({
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
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		maxHeight: 300,
		resizeMode: 'cover'
	},
	dateValidationRow: {
		marginTop: 6,
		marginHorizontal: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	secondaryText: {
		color: CustomColors.secondaryText
	},
	validatedContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	validatedText: {
		marginLeft: 4,
		color: CustomColors.validatedText
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
