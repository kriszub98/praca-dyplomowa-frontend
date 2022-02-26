import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../constans/Colors';

const ErrorText = (props) => {
	return <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
	text: {
		color: Colors.errorText
	}
});
