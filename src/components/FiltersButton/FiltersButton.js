import { StyleSheet, View, Pressable } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomColors from '../../constans/Colors';

const FiltersButton = ({ onPress }) => {
	return (
		<View style={styles.pressableContainer}>
			<Pressable
				onPress={onPress}
				style={styles.container}
				android_ripple={{
					color: CustomColors.primaryButtonRipple,
					borderless: true
				}}
			>
				<MaterialCommunityIcons name="filter" size={20} color="black" />
			</Pressable>
		</View>
	);
};

export default FiltersButton;

const styles = StyleSheet.create({
	pressableContainer: {
		padding: 10,
		paddingHorizontal: 20,
		marginRight: 8
	}
});
