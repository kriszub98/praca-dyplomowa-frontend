import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';

import useAllergies from '../hooks/useAllergies';
import useInput from '../hooks/useInput';
import CustomColors from '../constans/Colors';
import CustomDimensions from '../constans/Dimensions';
import TitleText from '../components/TitleText';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const AllergyAddScreen = () => {
	const [ name, bindName, resetName ] = useInput('');
	const { addAllergy, errorMessage } = useAllergies();

	// const navigation = useNavigation();

	const onSubmitPressed = () => {
		addAllergy(name);
		resetName();
		// TODO: GO TO ALLERGIES MAYBE?! navigation.navigate('RecipeList');
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<TitleText style={styles.title}>Dodawanie alergii</TitleText>

				{errorMessage ? <TitleText style={styles.errorMessage}>{errorMessage}</TitleText> : null}
				<CustomInput placeholder="Nazwa produktu" {...bindName} />
				<CustomButton onPress={onSubmitPressed} text="Dodaj produkt" />
			</View>
		</ScrollView>
	);
};

export default AllergyAddScreen;

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		padding: 20
	},
	title: {
		fontSize: CustomDimensions.bigTitle,
		color: CustomColors.primaryTitle,
		marginVertical: '15%'
	},
	errorMessage: {
		marginBottom: 20,
		fontSize: 20,
		color: CustomColors.errorText
	}
});
