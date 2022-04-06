import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ value, setValue, onEndEditing }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.searchIconStyle} />
			<TextInput
				autoCorrect={false}
				autoCapitalize="none"
				placeholder="Search"
				style={styles.textInputStyle}
				value={value}
				onChangeText={setValue}
				onEndEditing={onEndEditing}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: 'white',
		height: 45,
		borderRadius: 5,
		marginVertical: 8,
		marginHorizontal: 6,
		flexDirection: 'row',

		shadowColor: 'black',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 5
	},
	textInputStyle: {
		flex: 1,
		fontSize: 18
	},
	searchIconStyle: {
		fontSize: 18,
		alignSelf: 'center',
		marginHorizontal: 8
	}
});

export default SearchBar;
