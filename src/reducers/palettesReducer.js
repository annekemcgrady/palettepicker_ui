export const palettesReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_PALETTES':    
            return action.palettes;

        case 'ADD_PALETTE':
            return [...state, action.palette]

        default:
            return state;
    }
}