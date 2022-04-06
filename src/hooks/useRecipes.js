import React, { useEffect, useState } from 'react';
import allergyBackend from '../api/allergyBackend';

const useRecipes = () => {
	const [ recipes, setRecipes ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState('');

	// TODO: One function that takes selectedAllergies as argument to filter them inside get

	const getRecipes = async (name, allergies) => {
		try {
			const results = await allergyBackend.post(`/recipes/filtered`, { name, allergies });
			setRecipes(results.data);
		} catch (error) {
			console.error(error);
			setErrorMessage(error.response.data.error);
		}
	};

	useEffect(() => getRecipes(), []);

	return { recipes, errorMessage, getRecipes };
};

export default useRecipes;
