import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import detailReducer from "./detailReducer";
import { themeReducer } from "./themeReducer";

// const initial = {
//     isLogged: false
// }
// const userReducer = (state = initial, action) => {
//     return { ...state }
// }

const rootReducer = combineReducers({
    games: gamesReducer,
    details: detailReducer,
    theme: themeReducer
})

export default rootReducer;