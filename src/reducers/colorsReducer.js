export const colorsReducer = (state = [], {type, color}) => {
    switch(type) {
        case 'LOCK_COLOR':
            return [...state, {hexCode: color, isLocked: true}]

        case 'CLEAR_COLORS':
            return state = [];

        default:
            return state;
    }

}