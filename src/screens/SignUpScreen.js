import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomSwitch from '../components/CustomSwitch';
import TitleText from '../components/TitleText';
import CustomColors from '../constans/Colors';
import CustomDimensions from '../constans/Dimensions';
import allergyBackend from '../api/allergyBackend';
import { login } from '../store/actions/auth';

const SignUpScreen = () => {
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordRepeat, setPasswordRepeat ] = useState('');
	const [ pwz, setPwz ] = useState(''); // TODO: 7 cyfr
	const [ isDoctor, setIsDoctor ] = useState(false);

	const navigation = useNavigation();
	const dispatch = useDispatch();

	const validateFields = () => {
		//TODO: Show Error
		if (!username) {
			return false;
		}
		if (!email) {
			return false;
		}
		if (!password || !passwordRepeat || password.length < 8 || !password === passwordRepeat) {
			return false;
		}
		if (isDoctor && !pwz) {
			return false;
		}
	};

	const onRegisterPressed = async () => {
		if (validateFields) {
			let registerData = { login: username, password, pwz, email };
			let response = await allergyBackend.post('/users', registerData);
			const { user, token } = response.data;
			dispatch(login(user, token));
			// TODO: GOTO choose allergies
			return navigation.navigate('Home');
		}
	};

	const onSignInPressed = () => {
		navigation.navigate('SignIn');
	};

	const toggleSwitch = () => {
		setIsDoctor((prevState) => !prevState);
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<TitleText style={styles.title}>Rejestracja</TitleText>
				<CustomInput placeholder="Login" value={username} setValue={setUsername} />
				<CustomInput placeholder="Email" value={email} setValue={setEmail} />
				<CustomInput placeholder="Hasło" value={password} setValue={setPassword} secureTextEntry />
				<CustomInput
					placeholder="Powtórz hasło"
					value={passwordRepeat}
					setValue={setPasswordRepeat}
					secureTextEntry
				/>

				<CustomSwitch text="Czy jesteś lekarzem?" value={isDoctor} setValue={toggleSwitch} />
				{isDoctor && <CustomInput placeholder="Numer PWZ" value={pwz} setValue={setPwz} />}

				<CustomButton onPress={onRegisterPressed} text="Zarejestruj" />
				<CustomButton onPress={onSignInPressed} text="Masz konto? Zaloguj się" type="TERTIARY" />
			</View>
		</ScrollView>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		padding: 20
	},
	title: {
		fontSize: CustomDimensions.bigTitle,
		color: CustomColors.primaryTitle,
		marginVertical: '15%'
	}
});
