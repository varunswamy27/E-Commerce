

export const fetchAllCategory = (state = [], action) => {
    switch (action.type) {
        case "FETCH_CATEGORY":
            return [action.payload.data, ...state];

        default:
            return state;
    }
}