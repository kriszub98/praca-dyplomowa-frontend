import { StyleSheet, Text, View, Switch } from 'react-native';
import React from 'react';
import DefaultText from './DefaultText';
import CustomColors from '../constans/Colors';

const CustomSwitch = ({ text, value, setValue }) => {
	return (
		<View style={styles.container}>
			<DefaultText style={styles.text}>{text}</DefaultText>
			<Switch
				trackColor={{ false: '#767577', true: CustomColors.primaryColor }}
				thumbColor={'#f4f3f4'}
				ios_backgroundColor="#3e3e3e"
				onValueChange={setValue}
				value={value}
			/>
		</View>
	);
};

export default CustomSwitch;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '100%'
	},
	text: {
		color: 'gray',
		marginHorizontal: 10
	}
});
