import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constans/Colors';
import TitleText from '../components/TitleText';
import CustomButton from '../components/CustomButton';
import AddAllergyContainer from '../components/AddAllergyContainer';
import useAllergies from '../hooks/useAllergies';
import { saveAllergies } from '../store/actions/filters';

const FiltersScreen = ({ navigation }) => {
	const { allergies } = useAllergies();
	const dispatch = useDispatch();
	const activeFilters = useSelector((state) => state.activeFilters);
	const [ chosenAllergies, setChosenAllergies ] = useState(activeFilters.allergies);

	const onAllergyPressed = (allergy) => {
		// Check if allergy is already in state
		if (chosenAllergies.some((a) => a._id === allergy._id)) {
			return setChosenAllergies((prevState) => prevState.filter((a) => a._id !== allergy._id));
		}

		return setChosenAllergies((prevState) => [ ...prevState, allergy ]);
	};

	const onSaveAllergiesPress = () => {
		dispatch(saveAllergies(chosenAllergies));
		return navigation.goBack();
	};

	return (
		<View style={styles.screen}>
			<TitleText style={styles.title}>Wybierz niechciane allergeny</TitleText>
			<View style={styles.contentWrapper}>
				<ScrollView>
					<AddAllergyContainer
						allergies={allergies}
						selectedAllergies={chosenAllergies}
						onAllergyPressed={onAllergyPressed}
					/>
				</ScrollView>
			</View>
			<CustomButton text="Zapisz filtry" onPress={onSaveAllergiesPress} />
		</View>
	);
};

export default FiltersScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		padding: 10
	},
	title: {
		fontSize: 24,
		margin: 20,
		textAlign: 'center',
		color: Colors.primaryTitle
	},
	contentWrapper: {
		flex: 1,
		justifyContent: 'space-between'
	}
});
