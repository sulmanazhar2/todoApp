const authReducer = (state = null, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return state;
		case 'SIGN_IN_ERR':
			return state;
		case 'SIGN_UP':
			return state;
		case 'SIGN_UP_ERR':
			return state;
		default:
			return state;
	}
};

export default authReducer;
