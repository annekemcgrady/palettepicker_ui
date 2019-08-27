export const palettesReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_PALETTES':    
            return action.palettes;

        case 'ADD_PALETTE':
            return [...state, action.palette]

        case 'REMOVE_PALETTE':
            let newState = state.filter(palette => palette.id !== action.id) 
            return [...newState]
        default:
            return state;
    }
}