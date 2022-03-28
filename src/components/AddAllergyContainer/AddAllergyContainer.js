import { StyleSheet, View } from 'react-native';
import React from 'react';
import AllergyItem from './AllergyItem';

const AddAllergyContainer = ({ allergies, onAllergyPressed, selectedAllergies }) => {
	let styledAllergies = allergies.map((allergy) => {
		let isSelected = selectedAllergies.some((a) => a === allergy._id);

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
