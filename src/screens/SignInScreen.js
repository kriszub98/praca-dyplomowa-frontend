import { StyleSheet, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import TitleText from '../components/TitleText';
import CustomDimensions from '../constans/Dimensions';
import CustomColors from '../constans/Colors';

const SignInScreen = () => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	// const { height } = useWindowDimensions();
	// const navigation = useNavigation();

	const onSignInPressed = () => {
		// TODO: Logowanie, a potem redirect do home
	};
	const onSignUpPressed = () => {
		// TODO:  navigation.navigate('SignUp');
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<TitleText style={styles.title}>Zaloguj się</TitleText>

				<CustomInput placeholder="Login" value={username} setValue={setUsername} />
				<CustomInput placeholder="Hasło" value={password} setValue={setPassword} secureTextEntry />

				<CustomButton onPress={onSignInPressed} text="Zaloguj się" />
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
	}
});
