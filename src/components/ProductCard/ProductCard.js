import React from 'react';
import { Image, StyleSheet, View, TouchableNativeFeedback, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomColors from '../../constans/Colors';
import DefaultText from '../../components/DefaultText';
import TitleText from '../../components/TitleText';

const RecipeCard = ({ product, onPress }) => {
	const { height } = useWindowDimensions();

	const navigation = useNavigation();

	return (
		<TouchableNativeFeedback useForeground={true} onPress={() => navigation.navigate('ProductDetail')}>
			<View style={styles.container}>
				<View style={styles.dateValidationRow}>
					<View>
						<DefaultText style={styles.secondaryText}>Dodał: {product.owner.login}</DefaultText>
						{/* TODO: <DefaultText style={styles.secondaryText}>Data dodania: {product.createdAt}</DefaultText> */}
					</View>
				</View>

				<View style={styles.infoContainer}>
					<TitleText style={styles.title}>{product.name}</TitleText>
					<DefaultText style={styles.description}>{product.description}</DefaultText>
				</View>

				<View style={styles.allergyContainer}>
					{product.allergies.map((a) => <TitleText key={a._id}>{a.shortName}</TitleText>)}
				</View>
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
	},
	allergyContainer: {
		flexDirection: 'row',
		marginLeft: 12,
		marginBottom: 6
	}
});
