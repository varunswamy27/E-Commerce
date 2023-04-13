

export const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            window.location.href = '/';
            return { ...state, authData: action?.data };
        case 'SIGN_IN_ERROR':
            return action.payload
        case 'SIGN_UP':
            return action.data
        case 'SIGN_UP_SUCCESS':
            return action.data
        case 'SIGN_UP_ERROR':
            return action.payload
        case 'LOG_OUT':
            localStorage.removeItem('profile');
            window.location.href = '/auth'
            return { ...state, authData: null }
        default:
            return state
    }
}