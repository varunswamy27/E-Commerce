

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

