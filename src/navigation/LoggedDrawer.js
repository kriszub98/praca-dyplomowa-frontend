import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import CustomDrawer from '../components/CustomDrawer';
import ProductAddScreen from '../screens/ProductAddScreen';
import ProductListScreen from '../screens/ProductListScreen';
import RecipeAddScreen from '../screens/RecipeAddScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import HomeScreen from '../screens/HomeScreen';
import Colors from '../constans/Colors';

import AllergyAddScreen from '../screens/AllergyAddScreen';
import FiltersScreen from '../screens/FiltersScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import SearchProductsScreen from '../screens/SearchProductsScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Products() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="ProductList"
				options={{
					headerShown: false
				}}
				component={ProductListScreen}
			/>
			<Stack.Screen
				name="ProductDetail"
				options={{
					headerShown: false
				}}
				component={ProductDetailScreen}
			/>
		</Stack.Navigator>
	);
}

function Recipes() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="RecipeList"
				options={{
					headerShown: false
				}}
				component={RecipeListScreen}
			/>
			<Stack.Screen
				name="RecipeDetail"
				options={{
					headerShown: false
				}}
				component={RecipeDetailScreen}
			/>
		</Stack.Navigator>
	);
}

function AddRecipe() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="RecipeAdd"
				options={{
					headerShown: false
				}}
				component={RecipeAddScreen}
			/>
			<Stack.Screen
				name="SearchProducts"
				options={{
					headerShown: false
				}}
				component={SearchProductsScreen}
			/>
		</Stack.Navigator>
	);
}

const LoggedDrawer = () => {
	// TODO: drawerStyle i tam fontFamily

	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				headerTitle: '',
				drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
				drawerActiveBackgroundColor: Colors.primaryTitle,
				drawerActiveTintColor: '#fff',
				drawerInactiveTintColor: Colors.primaryTitle
			}}
		>
			{/* Drawer Links */}
			<Drawer.Screen
				name="Home"
				component={HomeScreen}
				options={{
					drawerLabel: 'Ekran startowy',
					drawerIcon: ({ color }) => <FontAwesome name="home" size={22} color={color} />
				}}
			/>
			<Drawer.Screen
				name="Favourites"
				component={RecipeListScreen}
				options={{
					drawerLabel: 'Ulubione przepisy',
					drawerIcon: ({ color }) => <MaterialCommunityIcons name="heart" size={22} color={color} />
				}}
			/>
			<Drawer.Screen
				name="MyRecipes"
				component={RecipeListScreen}
				options={{
					drawerLabel: 'Moje przepisy',
					drawerIcon: ({ color }) => <MaterialCommunityIcons name="account-circle" size={22} color={color} />
				}}
			/>
			<Drawer.Screen
				name="RecipeList"
				component={Recipes}
				options={{
					drawerLabel: 'Przepisy',
					drawerIcon: ({ color }) => <MaterialCommunityIcons name="text-box" size={22} color={color} />
				}}
			/>
			<Drawer.Screen
				name="RecipeAddStack"
				component={AddRecipe}
				options={{
					drawerLabel: 'Dodaj przepis',
					drawerIcon: ({ color }) => <MaterialCommunityIcons name="text-box-plus" size={22} color={color} />
				}}
			/>
			<Drawer.Screen
				name="ProductList"
				component={Products}
				options={{
					drawerLabel: 'Produkty',
					drawerIcon: ({ color }) => <MaterialCommunityIcons name="food" size={22} color={color} />
				}}
			/>
			<Drawer.Screen
				name="ProductAdd"
				component={ProductAddScreen}
				options={{
					drawerLabel: 'Dodaj produkt',
					drawerIcon: ({ color }) => <Ionicons name="add-circle-sharp" size={22} color={color} />
				}}
			/>
		</Drawer.Navigator>
	);
};

export default LoggedDrawer;
