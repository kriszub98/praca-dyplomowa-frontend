import { useEffect, useState } from 'react';
import allergyBackend from '../api/allergyBackend';

const useAllergies = () => {
	const [ allergies, setAllergies ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState('');

	const getAllergies = async () => {
		try {
			const results = await allergyBackend.get('/allergies');
			setAllergies(results.data);
		} catch (error) {
			return setErrorMessage(error.response.data.error);
		}
	};

	const addAllergy = async (name) => {
		try {
			const result = await allergyBackend.post('/allergies', { name });
			console.log(result);
		} catch (error) {
			return setErrorMessage(error.response.data.error);
		}
	};

	useEffect(() => getAllergies(), []);

	return { allergies, errorMessage, getAllergies, addAllergy };
};

export default useAllergies;
