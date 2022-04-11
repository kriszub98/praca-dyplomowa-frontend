import { useEffect, useState } from 'react';
import allergyBackend from '../api/allergyBackend';

const useProducts = () => {
	const [ products, setProducts ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState('');

	const getProducts = async (name = '') => {
		try {
			const results = await allergyBackend.get(`/products?name=${name}`);
			setProducts(results.data);
		} catch (error) {
			return setErrorMessage(error.response.data.error);
		}
	};

	const addProduct = async (name, description, photo, token, allergies) => {
		try {
			const result = await allergyBackend.post(
				'/products',
				{
					name,
					description,
					allergies
				},
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);

			if (photo) {
				let productId = result.data._id;
				let formData = new FormData();
				formData.append('photo', {
					uri: photo,
					name: 'image.jpg',
					type: 'image/jpeg'
				});
				await allergyBackend.post(`/products/${productId}/photo`, formData, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});
			}
		} catch (error) {
			console.log(error.response.data.error);
			return setErrorMessage(error.response.data.error);
		}
	};

	useEffect(() => getProducts(), []);

	return { products, errorMessage, getProducts, addProduct };
};

export default useProducts;
