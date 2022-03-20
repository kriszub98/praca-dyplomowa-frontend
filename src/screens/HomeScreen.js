import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import HomeCard from '../components/HomeCard.js/HomeCard';

const HomeScreen = ({ navigation }) => {
	const auth = useSelector((state) => state.auth);
	return (
		<View>
			<ScrollView>
				{/* TODO: Temporary */}
				{/* Not Logged */}

				{/* Logged User */}
				<HomeCard color="hsl(55, 87%, 70%)" name="Ulubione Przepisy" />
				<HomeCard color="hsl(70, 70%, 80%)" name="Moje Przepisy" />

				{/* TODO: Check if Doctor or admin */}
				{/* Doctor or admin */}
				<HomeCard color="hsl(160, 90%, 80%)" name="Przepisy do weryfikacji" />
				<HomeCard color="hsl(180, 60%, 50%)" name="Produkty do weryfikacji" />

				{/* For All Users */}
				<HomeCard
					color="hsl(210, 80%, 70%)"
					name="Przepisy"
					onPress={() => navigation.navigate('RecipeList')}
				/>

				<HomeCard
					color="hsl(210, 80%, 70%)"
					name="Dodaj Przepis"
					onPress={() => navigation.navigate('RecipeAdd')}
				/>
				<HomeCard
					color="hsl(10, 70%, 50%)"
					name="Produkty"
					onPress={() => navigation.navigate('ProductList')}
				/>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
