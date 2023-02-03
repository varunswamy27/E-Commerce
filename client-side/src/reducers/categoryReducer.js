

export const fetchAllCategory = (state = [], action) => {
    switch (action.type) {
        case "FETCH_CATEGORY":
            return action.payload;
        case "CREATE_CATEGORY":
            return [...state, action.payload];
        default:
            return state;
    }
}