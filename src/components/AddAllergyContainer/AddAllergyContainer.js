import { StyleSheet, View } from 'react-native';
import React from 'react';
import AllergyItem from './AllergyItem';

const AddAllergyContainer = ({ allergies, onAllergyPressed }) => {
	let styledAllergies = allergies.map((allergy) => (
		<AllergyItem name={allergy.name} key={allergy._id} onPress={() => onAllergyPressed(allergy)} />
	));

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
