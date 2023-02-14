

export const fetchAllSubCategory = (state = [], action) => {
    switch (action.type) {
        case "FETCH_SUBCATEGORY":
            return action.payload;
        default:
            return state;
    }
}

export const createNewSubCategory = (state = [], action) => {
    switch (action.type) {
        case "CREATE_SUBCATEGORY":
            return [...state, action.payload];
        case "SUCCESS_SUBCATEGORY":
            return action.payload
        case "ERROR_SUBCATEGORY":
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

export const modifySelectedSubCategory = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_SUBCATEGORY":
            return state.map((cat) => cat._id === action.payload._id ? action.payload : cat);
        case "UPDATE_SUBCATEGORY_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}
