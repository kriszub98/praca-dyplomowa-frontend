import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllergyAddScreen from '../screens/AllergyAddScreen';
import ProductAddScreen from '../screens/ProductAddScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FiltersScreen from '../screens/FiltersScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import SearchProductsScreen from '../screens/SearchProductsScreen';
import RecipeAddScreen from '../screens/RecipeAddScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import HomeScreen from '../screens/HomeScreen';
import { LeftHeader, RightHeader } from '../components/MainHeader';

const Stack = createNativeStackNavigator();

const headerOptions = {
	headerLeft: (props) => <LeftHeader />,
	headerRight: (props) => <RightHeader />,
	title: null
};

const StackNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} options={headerOptions} />
			<Stack.Screen name="SignIn" component={SignInScreen} options={headerOptions} />
			<Stack.Screen name="AllergyAdd" component={AllergyAddScreen} options={headerOptions} />
			<Stack.Screen name="ProductAdd" component={ProductAddScreen} options={headerOptions} />
			<Stack.Screen name="SignUp" component={SignUpScreen} options={headerOptions} />
			<Stack.Screen name="SearchProducts" component={SearchProductsScreen} options={headerOptions} />
			<Stack.Screen name="RecipeAdd" component={RecipeAddScreen} options={headerOptions} />
			<Stack.Screen name="RecipeList" component={RecipeListScreen} options={headerOptions} />
			<Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={headerOptions} />
			<Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={headerOptions} />
			<Stack.Screen name="ProductList" component={ProductListScreen} options={headerOptions} />
		</Stack.Navigator>
	);
};

export default StackNavigation;
