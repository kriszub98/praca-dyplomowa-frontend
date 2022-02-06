import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FiltersScreen from '../screens/FiltersScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import RecipeListScreen from '../screens/RecipeListScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="SignUp" component={SignUpScreen} />
				<Stack.Screen name="SignIn" component={SignInScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

// return <SignUpScreen />;
// return <FiltersScreen />;
// return <SignInScreen />;
// return <RecipeListScreen />;
// return <ProductDetailScreen />;
// return <RecipeDetailScreen />;
