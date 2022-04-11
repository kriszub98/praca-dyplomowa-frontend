import { StyleSheet, View } from 'react-native';
import React from 'react';

import CustomColors from '../constans/Colors';
import useInput from '../hooks/useInput';
import TitleText from './TitleText';
import DefaultText from './DefaultText';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const RecipeProductItem = ({ product, index, amount, removeProduct, editProductAmount }) => {
	const [ amountInput, bindAmountInput, resetAmountInput ] = useInput(amount);

	const handleOnRemovePress = () => {
		removeProduct(index);
		resetAmountInput();
	};

	const handleOnEndEditing = () => {
		editProductAmount(index, amountInput);
	};

	return (
		<View style={styles.wrapper}>
			{/* Product Data */}
			<View style={styles.productContainer}>
				<View style={{ marginBottom: 8 }}>
					<TitleText style={styles.title}>{product.name}</TitleText>
				</View>
				{/* Allergies */}
				{product.allergies &&
				product.allergies.length > 0 && (
					<View>
						<TitleText>Alergeny</TitleText>
						<View style={styles.allergyWrapper}>
							<View style={styles.allergyContainer}>
								<DefaultText>{product.allergies[0].name}</DefaultText>
							</View>
						</View>
					</View>
				)}
			</View>

			{/* Amount Data */}
			<View style={styles.amountContainer}>
				<View style={styles.inputContainer}>
					<CustomInput
						placeholder="Ilość produktu wraz z miarą"
						{...bindAmountInput}
						onEndEditing={handleOnEndEditing}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<CustomButton type="SECONDARY" text="-" onPress={handleOnRemovePress} />
				</View>
			</View>
		</View>
	);
};

// TODO: POKAŻ WSZYSTKIE ALLERGIE!!!!

export default RecipeProductItem;

const styles = StyleSheet.create({
	wrapper: {
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
		padding: 10,
		overflow: 'hidden',
		width: '100%'
	},
	title: {
		fontSize: 18
	},
	secondaryText: {
		color: CustomColors.secondaryText,
		marginTop: 5,
		fontSize: 14
	},
	allergyWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	allergyContainer: {
		marginVertical: 5,
		marginRight: 10
	},
	amountContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	inputContainer: {
		width: '80%'
	},
	buttonContainer: {
		width: '15%'
	}
});
