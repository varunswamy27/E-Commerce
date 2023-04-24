import * as api from '../api/index';

export const getUserData = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUser();
        dispatch({
            type: 'FETCH_USER',
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}