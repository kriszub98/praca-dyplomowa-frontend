import { StyleSheet, View } from 'react-native';
import React from 'react';
import AllergyItem from './AllergyItem';

const AddAllergyContainer = ({ allergies, onAllergyPressed, selectedAllergies }) => {
	let styledAllergies = allergies.map((allergy) => {
		let isSelected = selectedAllergies ? selectedAllergies.some((a) => a._id === allergy._id) : false;

		return (
			<AllergyItem
				name={allergy.name}
				key={allergy._id}
				onPress={() => onAllergyPressed(allergy)}
				selected={isSelected}
			/>
		);
	});

	return <View style={styles.container}>{styledAllergies}</View>;
};

export default AddAllergyContainer;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	}
});

//TODO: TitleCase by wyglądał ładnie
