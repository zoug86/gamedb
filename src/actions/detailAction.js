import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetails = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAILS"
    });
    const detailData = await axios.get(gameDetailsURL(id));
    const screens = await axios.get(gameScreenshotURL(id));
    //console.log(screens.data.results);

    dispatch({
        type: "GET_DETAILS",
        payload: {
            game: detailData.data,
            screens: screens.data
        }
    });
}