import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainDrawer from './MainDrawer';

// TODO: CREATE AUTH STACK AND PUT SCREENS FOR AUTH USER
const Navigation = () => {
	return (
		<NavigationContainer>
			<MainDrawer />
		</NavigationContainer>
	);
};

export default Navigation;
