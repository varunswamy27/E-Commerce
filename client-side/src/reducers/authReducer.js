

export const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case 'LOG_OUT':
            localStorage.removeItem('profile');
            return { ...state, authData: null }
        default:
            return state
    }
}