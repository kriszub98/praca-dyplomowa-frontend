// Identifiers
export const SAVE_ALLERGIES = 'SAVE_ALLERGIES';
export const RESET_ALLERGIES = 'RESET_ALLERGIES';

// Actions
export const saveAllergies = (allergies) => {
	return {
		type: SAVE_ALLERGIES,
		allergies
	};
};

export const resetAllergies = () => {
	return {
		type: RESET_ALLERGIES
	};
};
