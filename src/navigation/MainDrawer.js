import React from 'react';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import CustomDrawer from '../components/CustomDrawer';
import Colors from '../constans/Colors';
import HomeScreen from '../screens/HomeScreen';
import ProductListScreen from '../screens/ProductListScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import ProductAddScreen from '../screens/ProductAddScreen';
import RecipeAddScreen from '../screens/RecipeAddScreen';
import SearchProductsScreen from '../screens/SearchProductsScreen';

import FiltersScreen from '../screens/FiltersScreen';
import AllergySelectScreen from '../screens/AllergySelectScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainDrawer = () => {
	// TODO: drawerStyle i tam fontFamily
	const auth = useSelector((state) => state.auth);

	function Root() {
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
				<Drawer.Screen
					name="Home"
					component={HomeScreen}
					options={{
						drawerLabel: 'Ekran startowy',
						drawerIcon: ({ color }) => <FontAwesome name="home" size={22} color={color} />
					}}
				/>

				{!auth.isLogged && (
					// Auth Screens
					<Drawer.Group>
						<Drawer.Screen
							name="SignIn"
							component={SignInScreen}
							options={{
								drawerLabel: 'Logowanie',
								drawerIcon: ({ color }) => (
									<MaterialCommunityIcons name="login" size={22} color={color} />
								)
							}}
						/>
						<Drawer.Screen
							name="SignUp"
							component={SignUpScreen}
							options={{
								drawerLabel: 'Utwórz konto',
								drawerIcon: ({ color }) => (
									<MaterialCommunityIcons name="account-plus" size={22} color={color} />
								)
							}}
						/>
					</Drawer.Group>
				)}

				<Drawer.Screen
					name="RecipeList"
					component={RecipeListScreen}
					options={{
						drawerLabel: 'Przepisy',
						drawerIcon: ({ color }) => <MaterialCommunityIcons name="text-box" size={22} color={color} />
					}}
				/>
				<Drawer.Screen
					name="ProductList"
					component={ProductListScreen}
					options={{
						drawerLabel: 'Produkty',
						drawerIcon: ({ color }) => <MaterialCommunityIcons name="food" size={22} color={color} />
					}}
				/>

				{auth.isLogged && (
					// Logged User
					<Drawer.Group>
						<Drawer.Screen
							name="Favourites"
							component={RecipeListScreen}
							options={{
								drawerLabel: 'Ulubione przepisy',
								drawerIcon: ({ color }) => (
									<MaterialCommunityIcons name="heart" size={22} color={color} />
								)
							}}
						/>
						<Drawer.Screen
							name="MyRecipes"
							component={RecipeListScreen}
							options={{
								drawerLabel: 'Moje przepisy',
								drawerIcon: ({ color }) => (
									<MaterialCommunityIcons name="account-circle" size={22} color={color} />
								)
							}}
						/>
						<Drawer.Screen
							name="RecipeAdd"
							component={RecipeAddScreen}
							options={{
								drawerLabel: 'Dodaj przepis',
								drawerIcon: ({ color }) => (
									<MaterialCommunityIcons name="text-box-plus" size={22} color={color} />
								)
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
					</Drawer.Group>
				)}
			</Drawer.Navigator>
		);
	}

	return (
		<Stack.Navigator screenOptions={{ headerTitle: '' }}>
			<Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
			<Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
			<Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />

			{auth.isLogged && (
				// Logged User
				<Stack.Group>
					<Stack.Screen name="SearchProducts" component={SearchProductsScreen} />
					<Stack.Screen name="AllergySelect" component={AllergySelectScreen} />
				</Stack.Group>
			)}
		</Stack.Navigator>
	);
};

export default MainDrawer;
