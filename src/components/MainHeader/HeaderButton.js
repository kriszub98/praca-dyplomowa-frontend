import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import CustomColors from '../../constans/Colors';

const HeaderButton = ({ onPress, text, bgColor, fgColor }) => {
	return (
		<View style={styles.pressableContainer}>
			<Pressable
				onPress={onPress}
				style={[ styles.container, bgColor ? { backgroundColor: bgColor } : {} ]}
				android_ripple={{
					color: false,
					borderless: true
				}}
			>
				<Text style={[ styles.text, fgColor ? { color: fgColor } : {} ]}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default HeaderButton;

const styles = StyleSheet.create({
	pressableContainer: {
		borderRadius: 5,
		overflow: 'hidden'
	},
	container: {
		padding: 15,
		alignItems: 'center',
		borderRadius: 5
	},
	text: {
		color: CustomColors.primaryTitle,
		fontSize: 16,
		fontWeight: 'bold'
	}
});
