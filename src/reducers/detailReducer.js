
const initialState = { game: {}, screens: {}, isLoading: true };

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAILS":
            return { ...state, game: action.payload.game, screens: action.payload.screens, isLoading: false };
        case "LOADING_DETAILS":
            return { ...state, isLoading: true };
        default:
            return { ...state };
    }
}

export default detailReducer;