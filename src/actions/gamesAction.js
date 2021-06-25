import axios from "axios";
import { searchGameURL, popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upComing: upcomingData.data.results,
            newGames: newData.data.results
        }
    });
};

export const loadSearchedGames = (gameName) => async (dispatch) => {
    //FETCH AXIOS
    const searchedGames = await axios.get(searchGameURL(gameName));
    console.log(searchedGames.data.results)
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedGames.data.results
        }
    });

};

