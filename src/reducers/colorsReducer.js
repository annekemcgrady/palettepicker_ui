export const colorsReducer = (state = [], {type, color, colors}) => {
    switch(type) {
        case 'ADD_COLORS':
        return colors

        case 'LOCK_COLOR':
            return [...state, {hexCode: color, isLocked: true}]

        case 'CLEAR_COLORS':
            return state = [];

        default:
            return state;
    }

}