
const initialState = {
    categories: [],
}

export const fetchAllCategory = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CATEGORY":
            return { ...state, categories: action.payload };

        default:
            return state;
    }
}