// Identifiers
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';
export const USER_UPDATED = 'USER_UPDATED';

// Actions
export const login = (user, token) => {
	return {
		type: LOGIN_SUCCESSFUL,
		user,
		token
	};
};

export const logout = () => {
	return {
		type: LOGOUT_SUCCESSFUL
	};
};

export const updateUser = (user) => {
	return {
		type: USER_UPDATED,
		user
	};
};
