import { StyleSheet, Text, Pressable, View } from 'react-native';
import React from 'react';
import CustomColors from '../constans/Colors';

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
	return (
		<View style={styles.pressableContainer}>
			<Pressable
				onPress={onPress}
				style={[ styles.container, styles[`container_${type}`], bgColor ? { backgroundColor: bgColor } : {} ]}
				android_ripple={{
					color: type === 'PRIMARY' ? CustomColors.primaryButtonRipple : false,
					borderless: true
				}}
			>
				<Text style={[ styles.text, styles[`text_${type}`], fgColor ? { color: fgColor } : {} ]}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	pressableContainer: {
		width: '100%',
		borderRadius: 5,
		marginVertical: 5,
		overflow: 'hidden'
	},
	container: {
		padding: 15,
		alignItems: 'center',
		borderRadius: 5
	},
	container_PRIMARY: {
		backgroundColor: CustomColors.primaryButton
	},
	container_SECONDARY: {
		borderWidth: 1,
		borderColor: CustomColors.primaryButton
	},
	container_TERTIARY: {},
	text: {
		color: 'white',
		fontWeight: 'bold'
	},
	text_SECONDARY: {
		color: CustomColors.primaryButton,
		fontWeight: 'bold'
	},
	text_TERTIARY: {
		color: 'gray',
		fontWeight: 'bold'
	}
});
