

export const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case 'SIGN_UP':
            return action.data
        case 'SIGN_UP_SUCCESS':
            return action.data
        case 'SIGN_UP_ERROR':
            return action.payload
        case 'LOG_OUT':
            localStorage.removeItem('profile');
            return { ...state, authData: null }
        default:
            return state
    }
}