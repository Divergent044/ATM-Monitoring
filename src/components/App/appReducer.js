const initialState = {
    authorization: {
        isAuthenticated: false
    },
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_SUCCESS':
        case 'AUTH_ERROR':
            return {
                authorization: {
                    ...action.payload
                }
            };
        case 'LOGOUT_SUCCESS':
            return {
                authorization: {
                    isAuthenticated: false
                }
            };
        case 'LOGOUT_ERROR':
        default:
            return { ...state }
    }
};
