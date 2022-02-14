import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import CustomDimensions from '../constans/Dimensions';
import CustomColors from '../constans/Colors';
import useInput from '../hooks/useInput';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import TitleText from '../components/TitleText';

const SignInScreen = () => {
	const [ username, bindUsername, resetUsername ] = useInput('');
	const [ password, bindPassword, resetPassword ] = useInput('');

	const navigation = useNavigation();

	const onSignInPressed = () => {
		// TODO: Logowanie, a potem redirect do home
		navigation.navigate('RecipeList');
	};
	const onSignUpPressed = () => {
		navigation.navigate('SignUp');
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<TitleText style={styles.title}>Zaloguj się</TitleText>

				<CustomInput placeholder="Login" {...bindUsername} />
				<CustomInput placeholder="Hasło" {...bindPassword} secureTextEntry />

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
