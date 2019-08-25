export const colorsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_COLORS':
            return action.colors;

        default:
            return state;
    }

}