import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry, multiline, autoFocus, onEndEditing }) => {
	return (
		<View style={styles.container}>
			<TextInput
				value={value}
				onChangeText={setValue}
				onEndEditing={onEndEditing}
				placeholder={placeholder}
				style={styles.input}
				secureTextEntry={secureTextEntry}
				multiline={multiline}
				autoFocus={autoFocus}
			/>
		</View>
	);
};

export default CustomInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		width: '100%',

		borderColor: '#eaeaea',
		borderWidth: 1,
		borderRadius: 5,

		padding: 10,
		marginVertical: 5
	},
	input: {}
});
