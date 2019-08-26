export const palettesReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_PALETTES':    
            return [...state, action.palette];

        default:
            return state;
    }
}