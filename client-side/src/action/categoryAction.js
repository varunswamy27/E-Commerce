import * as api from '../api/index';


export const getCategoryData = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCategory();
        dispatch({
            type: 'FETCH_CATEGORY',
            payload: data
        });
    } catch (error) {
        console.log(error.message)
    }
}

export const createCategory = (categories) => async (dispatch) => {
    try {
        const { data } = await api.addCategory(categories)
        console.log(data);
        dispatch({
            type: 'CREATE_CATEGORY',
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}