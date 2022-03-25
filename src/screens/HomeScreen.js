import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import HomeCard from '../components/HomeCard.js/HomeCard';

const HomeScreen = ({ navigation }) => {
	const auth = useSelector((state) => state.auth);
	return (
		<View>
			<ScrollView>
				{/* Logged User */}
				{auth.isLogged && (
					<HomeCard
						color="hsl(55, 87%, 70%)"
						name="Ulubione Przepisy"
						onPress={() => navigation.navigate('RecipeList')}
					/>
				)}
				{auth.isLogged && (
					<HomeCard
						color="hsl(70, 70%, 80%)"
						name="Moje Przepisy"
						onPress={() => navigation.navigate('RecipeList')}
					/>
				)}

				{/* TODO: Check if Doctor or admin */}
				{/* Doctor or admin */}
				{/*TODO: <HomeCard color="hsl(160, 90%, 80%)" name="Przepisy do weryfikacji" />
				<HomeCard color="hsl(180, 60%, 50%)" name="Produkty do weryfikacji" /> */}

				{/* For All Users */}
				<HomeCard
					color="hsl(210, 80%, 70%)"
					name="Przepisy"
					onPress={() => navigation.navigate('RecipeList')}
				/>

				{auth.isLogged && (
					<HomeCard
						color="hsl(210, 80%, 70%)"
						name="Dodaj Przepis"
						onPress={() => navigation.navigate('RecipeAdd')}
					/>
				)}

				<HomeCard
					color="hsl(10, 70%, 50%)"
					name="Produkty"
					onPress={() => navigation.navigate('ProductList')}
				/>

				{auth.isLogged && (
					<HomeCard
						color="hsl(10, 70%, 50%)"
						name="Dodaj produkt"
						onPress={() => navigation.navigate('ProductAdd')}
					/>
				)}
			</ScrollView>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
