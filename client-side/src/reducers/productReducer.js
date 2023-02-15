

export const fetchAllProduct = (state = [], action) => {
    switch (action.type) {
        case "FETCH_PRODUCT":
            return action.payload;
        default:
            return state;
    }
}

export const createNewProduct = (state = [], action) => {
    switch (action.type) {
        case "CREATE_PRODUCT":
            return [...state, action.payload];
        case "SUCCESS_PRODUCT":
            return action.payload
        case "ERROR_PRODUCT":
            return action.payload;
        default:
            return state;
    }
}

export const removeSelectedProduct = (state = [], action) => {
    switch (action.type) {
        case "DELETE_PRODUCT":
            return state.filter((pro) => pro._id !== action.payload);
        case "DELETE_PRODUCT_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export const modifySelectedProduct = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_PRODUCT":
            return state.map((pro) => pro._id === action.payload._id ? action.payload : pro);
        case "UPDATE_PRODUCT_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}
