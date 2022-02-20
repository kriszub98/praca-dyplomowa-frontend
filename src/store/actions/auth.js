// Identifiers
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';

// Actions
export const login = (user, token) => {
	return {
		type: LOGIN_SUCCESSFUL,
		user,
		token
	};
};
