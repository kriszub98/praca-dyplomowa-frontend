import React, { useEffect, useState } from 'react';
import allergyBackend from '../api/allergyBackend';

const useRecipes = () => {
	const [ recipes, setRecipes ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState('');

	const getRecipes = async () => {
		try {
			const results = await allergyBackend.get('/recipes');
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
