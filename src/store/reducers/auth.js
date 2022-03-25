import { LOGIN_SUCCESSFUL, LOGOUT_SUCCESSFUL, USER_UPDATED } from '../actions/auth';

const initialState = {
	isLogged: false,
	user: null,
	token: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESSFUL:
			return {
				...state,
				isLogged: true,
				user: action.user,
				token: action.token
			};
		case LOGOUT_SUCCESSFUL:
			return {
				...state,
				isLogged: false,
				user: null,
				token: null
			};
		case USER_UPDATED:
			return {
				...state,
				user: action.user
			};
		default:
			return state;
	}
};

export default authReducer;
