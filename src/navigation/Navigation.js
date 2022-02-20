import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllergyAddScreen from '../screens/AllergyAddScreen';
import ProductAddScreen from '../screens/ProductAddScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FiltersScreen from '../screens/FiltersScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import RecipeListScreen from '../screens/RecipeListScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="SignIn" component={SignInScreen} />
				<Stack.Screen name="AllergyAdd" component={AllergyAddScreen} />
				<Stack.Screen name="ProductAdd" component={ProductAddScreen} />
				<Stack.Screen name="SignUp" component={SignUpScreen} />
				<Stack.Screen name="RecipeList" component={RecipeListScreen} />
				<Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
				<Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
				<Stack.Screen name="ProductList" component={ProductListScreen} />
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
