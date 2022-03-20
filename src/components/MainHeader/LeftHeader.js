import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import HeaderButton from './HeaderButton';
import DefaultText from '../DefaultText';
import Colors from '../../constans/Colors';

const LeftHeader = () => {
	const navigation = useNavigation();
	const auth = useSelector((state) => state.auth);

	const onHomePress = () => {
		return navigation.navigate('Home');
	};

	return (
		<View style={styles.container}>
			<HeaderButton text={<Entypo name="home" size={24} color={Colors.primaryTitle} />} onPress={onHomePress} />
			{auth.isLogged && (
				<DefaultText style={{ color: Colors.primaryTitle, fontSize: 16 }}>{auth.user.login}</DefaultText>
			)}
		</View>
	);
};

export default LeftHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingRight: 5
	}
});
