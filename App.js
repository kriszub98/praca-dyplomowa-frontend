import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FiltersScreen from './src/screens/FiltersScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
import RecipeListScreen from './src/screens/RecipeListScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
	return <SignUpScreen />;
	return <FiltersScreen />;
	return <SignInScreen />;
	return <RecipeListScreen />;
	return <ProductDetailScreen />;
	return <RecipeDetailScreen />;

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
