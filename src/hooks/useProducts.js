import { useEffect, useState } from 'react';
import allergyBackend from '../api/allergyBackend';

const useProducts = () => {
	const [ products, setProducts ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState('');

	const getProducts = async () => {
		try {
			const results = await allergyBackend.get('/products');
			setProducts(results.data);
		} catch (error) {
			return setErrorMessage(error.response.data.error);
		}
	};

	const addProduct = async (name, description, token, allergies) => {
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
			console.log(result); // TODO: USUŃ KOMENTY
		} catch (error) {
			console.log(error.response.data.error);
			return setErrorMessage(error.response.data.error);
		}
	};

	useEffect(() => getProducts(), []);

	return { products, errorMessage, getProducts, addProduct };
};

export default useProducts;
