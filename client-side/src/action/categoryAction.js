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
        dispatch({
            type: 'CREATE_CATEGORY',
            payload: data
        })
        dispatch({
            type: 'SUCCESS_CATEGORY',
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: 'ERROR_CATEGORY',
            payload: error.response.data.message
        })
    }
}

export const removeCategory = (id) => async (dispatch) => {
    try {
        await api.deleteCategory(id);
        dispatch({
            type:'DELETE_CATEGORY',
            payload: id,
        })
        dispatch({
            type:'DELETE_CATEGORY_SUCCESS',
            payload: "Category has been deleted"
        })
    } catch (error) {
        console.log(error)
    }
}

export const modifyCategory = (id, updatedCat) => async (dispatch) => {
    try {
        const { data } = await api.updateCategory(id, updatedCat);
        dispatch({
            type: 'UPDATE_CATEGORY',
            payload: data
        })
        dispatch({
            type: 'UPDATE_CATEGORY_SUCCESS',
            payload: "Category has been updated"
        })
    } catch (error) {
        console.log(error)
    }
}