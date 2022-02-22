import { StyleSheet, View } from 'react-native';
import React from 'react';

import DefaultText from '../DefaultText';

const PreparationCard = ({ step }) => {
	return (
		<View style={styles.container}>
			<DefaultText style={styles.text}>{step}</DefaultText>
		</View>
	);
};

export default PreparationCard;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginVertical: 8,
		paddingHorizontal: 18,
		paddingVertical: 10,

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
	}
});
