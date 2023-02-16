import * as api from '../api/index';

export const signin = (formData, navigate ) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        console.log(data)
        dispatch({
            type: "SIGN_IN",
            data
        })
        // navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, navigate ) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        console.log(data)
        dispatch({
            type: "SIGN_IN",
            payload: data
        })
        // navigate('/')
    } catch (error) {
        console.log(error)
    }
}