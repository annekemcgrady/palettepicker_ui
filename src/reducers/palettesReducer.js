export const palettesReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_PALETTES':    
            return action.palettes;

        default:
            return state;
    }
}