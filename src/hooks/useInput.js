import { useState } from 'react';

const useInput = (initialValue) => {
	const [ value, setValue ] = useState(initialValue);
	const resetValue = () => {
		setValue(initialValue);
	};
	const bindValue = {
		value,
		setValue
	};

	return [ value, bindValue, resetValue ];
};

export default useInput;
