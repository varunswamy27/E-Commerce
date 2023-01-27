const initialState = 1;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state > 1 ? state - 1 : state;
        default:
            return state;
    }
}

export default changeTheNumber;