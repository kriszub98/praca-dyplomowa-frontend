// Data i would like to send:
// {allergies: [array of allergies that user chosen based on its saved preferenced + chosen]}

// List of Actions:
// SaveFilters -> Saves filters
// ResetFilters -> Resets all chosen filters

// TODO: Call SaveFilters with initial Filters from auth.allergies on login!
// TODO: call ResetFilters on Logout

import { SAVE_ALLERGIES, RESET_ALLERGIES } from '../actions/filters';

const initialState = {
	allergies: []
};

const filtersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_ALLERGIES:
			return {
				...state,
				allergies: action.allergies
			};
		case RESET_ALLERGIES:
			return {
				...state,
				allergies: []
			};
		default:
			return state;
	}
};

export default filtersReducer;
