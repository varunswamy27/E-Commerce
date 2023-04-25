

export const fetchAllUser = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return action.payload;
        default:
            return state;
    }
}

export const createNewUser = (state = [], action) => {
    switch (action.type) {
        case "CREATE_USER":
            return [...state, action.payload];
        case "SUCCESS_USER":
            return action.payload
        case "ERROR_USER":
            return action.payload;
        default:
            return state;
    }
}

export const removeSelectedUser = (state = [], action) => {
    switch (action.type) {
        case "DELETE_USER":
            return state.filter((cat) => cat._id !== action.payload);
        case "DELETE_USER_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export const modifySelectedUser = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return state.map((cat) => cat._id === action.payload._id ? action.payload : cat);
        case "UPDATE_USER_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export const fetchAllUserRole = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER_ROLE':
            return action.payload;
        default:
            return state;
    }
}