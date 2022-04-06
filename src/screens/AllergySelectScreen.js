import { StyleSheet, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import useAllergies from '../hooks/useAllergies';
import AddAllergyContainer from '../components/AddAllergyContainer';
import TitleText from '../components/TitleText';
import Colors from '../constans/Colors';
import CustomButton from '../components/CustomButton';
import allergyBackend from '../api/allergyBackend';
import { updateUser } from '../store/actions/auth';

const AllergySelectScreen = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const { allergies } = useAllergies();
	const [ chosenAllergies, setChosenAllergies ] = useState(auth.user.allergies);
	const navigation = useNavigation();

	const onAllergyPressed = (allergy) => {
		// Check if allergy is already in state
		if (chosenAllergies.some((a) => a._id === allergy._id)) {
			return setChosenAllergies((prevState) => prevState.filter((a) => a._id !== allergy._id));
		}

		return setChosenAllergies((prevState) => [ ...prevState, allergy ]);
	};

	const onSaveAllergiesPress = async () => {
		// Save Allergies to DB
		const dataToSend = {
			allergies: chosenAllergies
		};

		const response = await allergyBackend.patch(`/users/me`, dataToSend, {
			headers: { Authorization: `Bearer ${auth.token}` }
		});

		const { user } = response.data;

		// Change Logged user allergies inside redux
		dispatch(updateUser(user));

		// Change Screens
		return navigation.navigate('Home');
	};

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<TitleText style={styles.title}>Wybierz swoje alergie:</TitleText>
			</View>

			<View style={styles.contentWrapper}>
				<ScrollView>
					<AddAllergyContainer
						allergies={allergies}
						onAllergyPressed={onAllergyPressed}
						selectedAllergies={auth.user.allergies}
					/>
				</ScrollView>
				<CustomButton text="Zapisz wybór" onPress={onSaveAllergiesPress} />
			</View>
		</View>
	);
};

export default AllergySelectScreen;

const styles = StyleSheet.create({
	container: {
		padding: 8,
		flex: 1
	},
	titleContainer: {
		paddingVertical: 24
	},
	title: {
		fontSize: 24,
		color: Colors.primaryTitle,
		textAlign: 'center'
	},
	contentWrapper: {
		flex: 1,
		justifyContent: 'space-between'
	}
});

// TODO: Pass Selected allergies to component
