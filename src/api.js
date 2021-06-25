// Base URL

const baseUrl = 'https://api.rawg.io/api/';

// Getting the dates
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) return `0${month}`;
    return month;
}
const getCurrentDay = () => {
    const day = new Date().getDay();
    if (day < 10) return `0${day}`;
    return day;
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Gmaes
const popularGames = `games?key=${process.env.REACT_APP_RAWG_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcomingGames = `games?key=${process.env.REACT_APP_RAWG_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newgGames = `games?key=${process.env.REACT_APP_RAWG_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

//https://api.rawg.io/api/games?key=da9bebdac31e429eaccfd7568a0db0d2

export const popularGamesURL = () => `${baseUrl}${popularGames}`;
export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`;
export const newGamesURL = () => `${baseUrl}${newgGames}`;

// Game details
export const gameDetailsURL = (gameId) => `${baseUrl}games/${gameId}?key=${process.env.REACT_APP_RAWG_KEY}`;

//ScreenShots
export const gameScreenshotURL = (gameId) => `${baseUrl}games/${gameId}/screenshots?key=${process.env.REACT_APP_RAWG_KEY}`;

// Searched Game:
export const searchGameURL = (gameName) => `${baseUrl}games?key=${process.env.REACT_APP_RAWG_KEY}&search=${gameName}&page_size=9`;

//console.log(searchGameURL())