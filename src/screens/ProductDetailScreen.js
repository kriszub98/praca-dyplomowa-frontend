import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import DefaultText from '../components/DefaultText';
import TitleText from '../components/TitleText';

const AUTHOR = {
	name: 'Jan Kowalski',
	imageurl:
		'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80'
};

const PRODUCT = {
	imageurl:
		'https://images.unsplash.com/photo-1619095956510-24c12e2c4b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
	title: 'Toast'
};

const ProductDetailScreen = () => {
	return (
		<ScrollView>
			<Image
				source={{
					uri: PRODUCT.imageurl
				}}
				style={styles.bigImage}
			/>
			<View style={styles.container}>
				<TitleText style={styles.title}>{PRODUCT.title}</TitleText>
				<TitleText>Validated By: </TitleText>
				<DefaultText>{AUTHOR.name}</DefaultText>
				<View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
					<View
						style={{
							width: 150,
							height: 50,
							marginVertical: 20,
							marginRight: 15,
							backgroundColor: '#ccc',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<TitleText>Edit</TitleText>
					</View>
					<View
						style={{
							width: 150,
							height: 50,
							marginVertical: 20,
							backgroundColor: '#ccc',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<TitleText>Delete</TitleText>
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
	}
});
