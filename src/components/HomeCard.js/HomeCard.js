import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import TitleText from '../TitleText';
import Colors from '../../constans/Colors';

const HomeCard = ({ name, color, onPress }) => {
	return (
		<TouchableNativeFeedback useForeground={true} onPress={onPress}>
			<View style={{ ...styles.container, backgroundColor: color }}>
				<View style={styles.titleContainer}>
					<TitleText style={styles.title}>{name}</TitleText>
				</View>
			</View>
		</TouchableNativeFeedback>
	);
};

export default HomeCard;

const styles = StyleSheet.create({
	container: {
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
		overflow: 'hidden',
		height: 150,
		justifyContent: 'flex-end'
	},
	titleContainer: {
		paddingLeft: 10,
		paddingBottom: 10
	},
	title: {
		fontSize: 24,
		color: Colors.primaryTitle
	}
});
