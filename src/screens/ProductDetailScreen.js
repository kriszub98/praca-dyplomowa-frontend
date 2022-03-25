import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import DefaultText from '../components/DefaultText';
import TitleText from '../components/TitleText';
import CustomButton from '../components/CustomButton';

const PRODUCT = {
	imageurl:
		'https://images.unsplash.com/photo-1619095956510-24c12e2c4b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
};

const ProductDetailScreen = ({ route }) => {
	const { product } = route.params;

	return (
		<ScrollView>
			<Image
				source={{
					uri: PRODUCT.imageurl
				}}
				style={styles.bigImage}
			/>
			<View style={styles.container}>
				{/* Product Data */}
				<TitleText style={styles.title}>{product.name}</TitleText>

				{/* Author Data */}
				<View>
					<View>
						<TitleText>Dodane przez: </TitleText>
						<DefaultText>{product.owner.login}</DefaultText>
					</View>
					<View>
						<TitleText>Zweryfikowane przez: </TitleText>
						<DefaultText>{product.owner.login}</DefaultText>
					</View>
				</View>

				{/* Button Container */}
				<View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
					<View style={{ width: '45%' }}>
						<CustomButton text="Edytuj" />
					</View>
					<View style={{ width: '45%' }}>
						<CustomButton text="Usuń" />
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
	title: {
		paddingVertical: 10,
		fontSize: 32
	},
	description: {
		paddingVertical: 15
	},
	container: {
		paddingHorizontal: 10
	},
	bigImage: {
		width: '100%',
		height: 200
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between'
	}
});

// TODO: Zmien validated by
