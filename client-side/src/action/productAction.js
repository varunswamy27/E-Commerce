import * as api from '../api/index';


export const getProductData = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProduct();
        dispatch({
            type: 'FETCH_PRODUCT',
            payload: data
        });
    } catch (error) {
        console.log(error.message)
    }
}

export const createProduct = (categories) => async (dispatch) => {
    try {
        const { data } = await api.addProduct(categories)
        dispatch({
            type: 'CREATE_PRODUCT',
            payload: data
        })
        dispatch({
            type: 'SUCCESS_PRODUCT',
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: 'ERROR_PRODUCT',
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