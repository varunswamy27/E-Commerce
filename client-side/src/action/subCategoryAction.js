import * as api from '../api/index';


export const getSubCategoryData = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSubCategory();
        dispatch({
            type: 'FETCH_SUBCATEGORY',
            payload: data
        });
    } catch (error) {
        console.log(error.message)
    }
}

export const createSubCategory = (subcategories) => async (dispatch) => {
    try {
        const { data } = await api.addSubCategory(subcategories)
        dispatch({
            type: 'CREATE_SUBCATEGORY',
            payload: data
        })
        dispatch({
            type: 'SUCCESS_SUBCATEGORY',
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: 'ERROR_SUBCATEGORY',
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

export const modifySubCategory = (id, updatedSubCat) => async (dispatch) => {
    try {
        const { data } = await api.updateSubCategory(id, updatedSubCat);
        dispatch({
            type: 'UPDATE_SUBCATEGORY',
            payload: data
        })
        dispatch({
            type: 'UPDATE_SUBCATEGORY_SUCCESS',
            payload: "SubCategory has been updated"
        })
    } catch (error) {
        console.log(error)
    }
}