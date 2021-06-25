import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import detailReducer from "./detailReducer";

// const initial = {
//     isLogged: false
// }
// const userReducer = (state = initial, action) => {
//     return { ...state }
// }

const rootReducer = combineReducers({
    games: gamesReducer,
    details: detailReducer
})

export default rootReducer;