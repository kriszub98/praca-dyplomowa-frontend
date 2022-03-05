import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import allergyBackend from '../api/allergyBackend';
import CustomDimensions from '../constans/Dimensions';
import CustomColors from '../constans/Colors';
import useInput from '../hooks/useInput';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import TitleText from '../components/TitleText';
import { login } from '../store/actions/auth';

const SignInScreen = () => {
	const [ email, bindEmail, resetEmail ] = useInput('');
	const [ password, bindPassword, resetPassword ] = useInput('');
	const [ errorMessage, setErrorMessage ] = useState('');

	const navigation = useNavigation();
	const dispatch = useDispatch();

	const onLoginPressed = async () => {
		try {
			const response = await allergyBackend.post('/users/login', { email, password });

			// Login Successful, dispatch login data
			const { user, token } = response.data;
			dispatch(login(user, token));

			// return navigation.navigate('ProductAdd');
			return navigation.navigate('RecipeAdd');
		} catch (error) {
			return setErrorMessage('Niepoprawne dane logowania');
		}
	};

	const onSignUpPressed = () => {
		navigation.navigate('SignUp');
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<TitleText style={styles.title}>Zaloguj się</TitleText>
				{/*TODO: Przenieś error do ErrorText Componentu */}
				{errorMessage ? <TitleText style={styles.errorMessage}>{errorMessage}</TitleText> : null}
				<CustomInput placeholder="Email" {...bindEmail} keyboardType="email-address" />
				<CustomInput placeholder="Hasło" {...bindPassword} secureTextEntry />

				<CustomButton onPress={onLoginPressed} text="Zaloguj się" />
				<CustomButton onPress={onSignUpPressed} text="Utwórz konto" type="TERTIARY" />
			</View>
		</ScrollView>
	);
};

export default SignInScreen;

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
