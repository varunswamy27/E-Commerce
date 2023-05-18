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

export const getOneProductData = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchOneProduct(id);
        dispatch({
            type: 'FETCH_ONE_PRODUCT',
            payload: data
        });
    } catch (error) {
        console.log(error.message)
    }
}

export const createProduct = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addProduct(formData)
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

export const removeProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id);
        dispatch({
            type: 'DELETE_PRODUCT',
            payload: id,
        })
        dispatch({
            type: 'DELETE_PRODUCT_SUCCESS',
            payload: "Product has been deleted"
        })
    } catch (error) {
        console.log(error)
    }
}

export const modifyProduct = (id, updatedPro) => async (dispatch) => {
    try {
        const { data } = await api.updateProduct(id, updatedPro);
        dispatch({
            type: 'UPDATE_PRODUCT',
            payload: data
        })
        dispatch({
            type: 'UPDATE_PRODUCT_SUCCESS',
            payload: "Product has been updated"
        })
    } catch (error) {
        console.log(error)
    }
}