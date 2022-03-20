import { StyleSheet, View, TouchableNativeFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Colors from '../../constans/Colors';
import TitleText from '../TitleText';
import DefaultText from '../DefaultText';
import allergyBackend from '../../api/allergyBackend';
import { logout } from '../../store/actions/auth';

const CustomDrawer = (props) => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

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

	let upperDrawer = () => {
		if (auth.isLogged) {
			return (
				<View style={styles.userContainer}>
					<TitleText style={styles.userText}>{auth.user.login}</TitleText>
				</View>
			);
		}

		return (
			<View style={styles.userContainer}>
				<TitleText style={styles.userText}>Użytkownik niezalogowany</TitleText>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			{/* Upper Drawer */}
			<DrawerContentScrollView {...props} contentContainerStyle={styles.drawerStyle}>
				{/* User Data */}
				{upperDrawer()}

				{/* Link Section */}
				<DrawerItemList {...props} />
			</DrawerContentScrollView>

			{/* Bottom Drawer */}
			<View style={styles.bottomDrawerContainer}>
				<TouchableNativeFeedback onPress={() => {}}>
					<View style={styles.bottomLinkWrapper}>
						<MaterialCommunityIcons size={22} color={Colors.primaryTitle} name="cog" />
						<DefaultText style={styles.bottomLinkText}>Ustawienia</DefaultText>
					</View>
				</TouchableNativeFeedback>

				{auth.isLogged && (
					<TouchableNativeFeedback onPress={onLogoutPress}>
						<View style={styles.bottomLinkWrapper}>
							<MaterialCommunityIcons size={22} color={Colors.primaryTitle} name="logout" />
							<DefaultText style={styles.bottomLinkText}>Wyloguj</DefaultText>
						</View>
					</TouchableNativeFeedback>
				)}
			</View>
		</View>
	);
};

export default CustomDrawer;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	drawerStyle: {},
	userContainer: {
		padding: 20,
		backgroundColor: Colors.primaryTitle
	},
	userText: {
		fontSize: 16,
		color: '#fff'
	},
	bottomDrawerContainer: {
		paddingVertical: 10,
		paddingHorizontal: 12,
		borderTopWidth: 1,
		borderTopColor: '#ccc'
	},
	bottomLinkWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 12,
		paddingLeft: 6,
		marginTop: 6
	},
	bottomLinkText: {
		fontSize: 15,
		color: Colors.primaryTitle,
		marginLeft: 5
	}
});
