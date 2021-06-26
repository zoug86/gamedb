

export const themeReducer = (toggle = true, action) => {
    switch (action.type) {
        case "FETCH_TOGGLE":
            return !toggle;
        default:
            return toggle;
    }
}