import { StyleSheet, View } from 'react-native';
import React from 'react';
import AllergyItem from './AllergyItem';

const AllergyContainer = ({ allergies, onAllergyPressed }) => {
	let styledAllergies = allergies.map((allergy) => (
		<AllergyItem name={allergy.name} key={allergy._id} onPress={() => onAllergyPressed(allergy)} />
	));

	return <View style={styles.container}>{styledAllergies}</View>;
};

export default AllergyContainer;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	}
});
