import React from 'react';
import { Image, StyleSheet, View, TouchableNativeFeedback, useWindowDimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';

import CustomColors from '../../constans/Colors';
import DefaultText from '../../components/DefaultText';
import TitleText from '../../components/TitleText';
import Colors from '../../constans/Colors';

const RecipeCard = ({ product, onPress }) => {
	const { height } = useWindowDimensions();
	let dateToShow = dayjs(product.createdAt).format('DD.MM.YYYY HH:mm');

	let photoContent = product.hasPhoto ? (
		<Image
			source={{
				uri: `http://192.168.100.36:3000/api/v1/products/${product._id}/photo`
			}}
			style={[ styles.image, { height: height * 0.25 } ]}
		/>
	) : (
		<View style={{ width: 150, alignItems: 'center', justifyContent: 'center', height: 150 }}>
			<MaterialIcons name="no-photography" size={30} color="black" />
			<TitleText style={{ fontSize: 14 }}>Brak zdjęcia</TitleText>
		</View>
	);

	return (
		<TouchableNativeFeedback useForeground={true} onPress={onPress}>
			<View style={styles.container}>
				{/* Split */}
				<View style={{ flexDirection: 'row', flex: 1 }}>
					{/* Image */}
					<View style={styles.imageContainer}>{photoContent}</View>
					<View style={{ flex: 1 }}>
						{/* Name and description */}
						<View style={styles.infoContainer}>
							<TitleText style={styles.title}>{product.name}</TitleText>
							<DefaultText style={styles.description}>{product.description}</DefaultText>
						</View>
						{/* TODO: Description max 50 char */}

						{/* Allergies */}
						{product.allergies &&
						product.allergies.length > 0 && (
							<View style={{ marginLeft: 12 }}>
								<TitleText style={{ color: Colors.secondaryText }}>Allergeny</TitleText>
								<View style={styles.allergyContainer}>
									{product.allergies.map((a) => <DefaultText key={a._id}>{a.shortName}</DefaultText>)}
								</View>
							</View>
						)}

						{/* Author and timestamp */}
						<View style={styles.dateValidationRow}>
							<View>
								{product.validatedBy && (
									<View style={styles.validatedContainer}>
										<MaterialIcons name="verified" size={16} color={Colors.validatedText} />
										<TitleText style={styles.validatedText}>Zweryfikowane</TitleText>
									</View>
								)}
								<DefaultText style={styles.secondaryText}>Data dodania: {dateToShow}</DefaultText>
							</View>
						</View>
					</View>
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
		marginVertical: 6
	},
	imageContainer: {
		justifyContent: 'flex-start',
		paddingTop: 16,
		paddingLeft: 4
	},
	image: {
		width: 150,
		maxHeight: 150,
		resizeMode: 'cover',
		borderRadius: 6
	},
	dateValidationRow: {
		marginTop: 6,
		marginHorizontal: 12,
		paddingVertical: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	secondaryText: {
		color: CustomColors.secondaryText
	},
	validatedContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 4
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
		color: 'black',
		fontSize: 16,
		marginBottom: 4,
		flexShrink: 1
	},
	description: {
		fontSize: 14,
		color: 'gray',
		flexShrink: 1
	},
	allergyContainer: {
		flexDirection: 'row',
		marginBottom: 6
	}
});
