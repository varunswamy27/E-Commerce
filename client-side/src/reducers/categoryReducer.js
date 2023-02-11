

export const fetchAllCategory = (state = [], action) => {
    switch (action.type) {
        case "FETCH_CATEGORY":
            return action.payload;
        default:
            return state;
    }
}

export const createNewCategory = (state = [], action) => {
    switch (action.type) {
        case "CREATE_CATEGORY":
            return [...state, action.payload];
        case "SUCCESS_CATEGORY":
            return action.payload
        case "ERROR_CATEGORY":
            return action.payload;
        default:
            return state;
    }
}

export const removeSelectedCategory = (state = [], action) => {
    switch (action.type) {
        case "DELETE_CATEGORY":
            return state.filter((cat) => cat._id !== action.payload);
        case "DELETE_CATEGORY_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export const modifySelectedCategory = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_CATEGORY":
            return state.map((cat) => cat._id === action.payload._id ? action.payload : cat)
        default:
            return state;
    }
}
