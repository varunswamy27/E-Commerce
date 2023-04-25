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

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.addUser(user)
        dispatch({
            type: 'CREATE_USER',
            payload: data
        })
        dispatch({
            type: 'SUCCESS_USER',
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: 'ERROR_USER',
            payload: error.response.data.message
        })
    }
}

export const removeUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);
        dispatch({
            type: 'DELETE_USER',
            payload: id,
        })
        dispatch({
            type: 'DELETE_USER_SUCCESS',
            payload: "User has been deleted"
        })
    } catch (error) {
        console.log(error)
    }
}


export const modifyUser = (id, updatedUser) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, updatedUser);
        dispatch({
            type: 'UPDATE_USER',
            payload: data
        })
        dispatch({
            type: 'UPDATE_USER_SUCCESS',
            payload: "User has been updated"
        })
    } catch (error) {
        console.log(error)
    }
}

export const getUserRoleData = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUserRole();
        dispatch({
            type: 'FETCH_USER_ROLE',
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}