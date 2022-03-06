import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DefaultText from '../DefaultText';
import CustomColors from '../../constans/Colors';

const AllergyItem = ({ name, onPress }) => {
	const [ isPressed, setIsPressed ] = useState(false);

	const onAllergyPressed = () => {
		onPress();
		return setIsPressed(!isPressed);
	};

	return (
		<TouchableOpacity style={[ styles.container, isPressed && styles.itemPressed ]} onPress={onAllergyPressed}>
			<DefaultText style={styles.text}>{name}</DefaultText>
		</TouchableOpacity>
	);
};

export default AllergyItem;

const styles = StyleSheet.create({
	container: {
		width: '49%',
		marginVertical: 8,
		paddingHorizontal: 18,
		paddingVertical: 10,
		minHeight: 100,
		alignItems: 'center',
		justifyContent: 'center',

		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2
	},
	text: {
		fontSize: 16
	},
	itemPressed: {
		backgroundColor: CustomColors.allergyPressed
	}
});
