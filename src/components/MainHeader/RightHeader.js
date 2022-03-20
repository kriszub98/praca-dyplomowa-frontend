import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../store/actions/auth';
import allergyBackend from '../../api/allergyBackend';
import HeaderButton from './HeaderButton';

const RightHeader = () => {
	const navigation = useNavigation();
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const onLoginPress = () => {
		return navigation.navigate('SignIn');
	};

	const onLogoutPress = async () => {
		try {
			await allergyBackend.post(
				'/users/logoutAll',
				{},
				{
					headers: { Authorization: `Bearer ${auth.token}` }
				}
			);

			dispatch(logout());
		} catch (e) {
			return console.error(e);
		}
	};

	return (
		<View style={styles.container}>
			{!auth.isLogged && <HeaderButton text="Logowanie" onPress={onLoginPress} />}
			{auth.isLogged && <HeaderButton text="Wyloguj" onPress={onLogoutPress} />}
		</View>
	);
};

export default RightHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});
