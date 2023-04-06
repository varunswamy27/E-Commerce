import * as api from '../api/index';

export const signin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        console.log(data);
        dispatch({
            type: "SIGN_IN",
            data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({
            type: "SIGN_UP",
            data,
        })
        dispatch({
            type: "SIGN_UP_SUCCESS",
            data,
        })
    } catch (error) {
        dispatch({
            type: "SIGN_UP_ERROR",
            payload: error,
        })
    }
}

export const logout = () => {
    return {
        type: 'LOG_OUT',
    }
}