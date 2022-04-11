import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import DefaultText from '../components/DefaultText';
import TitleText from '../components/TitleText';
import CustomButton from '../components/CustomButton';
import allergyBackend from '../api/allergyBackend';
import Colors from '../constans/Colors';

const ProductDetailScreen = ({ navigation, route }) => {
	const { product } = route.params;
	const auth = useSelector((state) => state.auth);
	let dateToShow = dayjs(product.createdAt).format('DD.MM.YYYY HH:mm');

	let photoContent = product.hasPhoto ? (
		<Image
			source={{
				uri: `http://192.168.100.36:3000/api/v1/products/${product._id}/photo`
			}}
			style={styles.bigImage}
		/>
	) : (
		<View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 200 }}>
			<MaterialIcons name="no-photography" size={50} color="black" />
			<TitleText style={{ fontSize: 30 }}>Brak zdjęcia</TitleText>
		</View>
	);

	const onDeleteButtonPress = async () => {
		const result = await allergyBackend.delete(`/products/${product._id}`, {
			headers: { Authorization: `Bearer ${auth.token}` }
		});

		if (result.data.message === 'Usunięto pomyślnie') {
			return navigation.navigate('ProductList', { action: 'changeData' });
		}
	};
	const onEditButtonPress = () => console.log('Edytuj');

	return (
		<ScrollView>
			<View>{photoContent}</View>

			<View style={styles.container}>
				{/* Product Data */}
				<View style={{ paddingHorizontal: 10 }}>
					<TitleText style={styles.title}>{product.name}</TitleText>
				</View>

				{/* Verified */}
				{product.validatedBy && (
					<View style={styles.section}>
						<View style={styles.split}>
							<View style={{ justifyContent: 'center', padding: 8 }}>
								<MaterialIcons name="verified" size={30} color={Colors.validatedText} />
							</View>
							<View>
								<TitleText style={styles.smallText}>Zweryfikowane przez: </TitleText>
								<DefaultText style={styles.smallText}>{product.owner.login}</DefaultText>
							</View>
						</View>
					</View>
				)}

				{/* Author Data */}
				<View style={styles.section}>
					<View style={styles.split}>
						<View style={{ justifyContent: 'center', padding: 10 }}>
							<MaterialIcons name="person" size={30} color="black" />
						</View>
						<View>
							<TitleText style={styles.smallText}>Dodane przez: </TitleText>
							<DefaultText style={styles.smallText}>{product.owner.login}</DefaultText>
							<TitleText style={styles.smallText}>Dodano dnia: </TitleText>
							<DefaultText style={styles.smallText}>{dateToShow}</DefaultText>
						</View>
					</View>
				</View>

				{/* Description */}
				<View style={{ padding: 10 }}>
					<DefaultText style={styles.description}>{product.description}</DefaultText>
				</View>

				{/* Button Container */}
				{auth.isLogged &&
				auth.user.isAdmin && (
					<View style={styles.buttonContainer}>
						<View style={{ width: '45%' }}>
							<CustomButton text="Edytuj" onPress={onEditButtonPress} />
						</View>
						<View style={{ width: '45%' }}>
							<CustomButton text="Usuń" onPress={onDeleteButtonPress} />
						</View>
					</View>
				)}
			</View>
		</ScrollView>
	);
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
	title: {
		paddingVertical: 8,
		fontSize: 26
	},
	description: {
		fontSize: 16
	},
	smallText: {
		fontSize: 16
	},
	container: {
		paddingHorizontal: 10
	},
	bigImage: {
		width: '100%',
		height: 200,
		resizeMode: 'contain',
		marginTop: 4
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between'
	},
	section: {
		marginVertical: 8
	},
	split: {
		flexDirection: 'row'
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingVertical: 10
	}
});

// TODO: Zmien validated by
