export const loadingReducer = (state = true, action) => {
    switch(action.type) {
        case 'LOAD_COMPLETE':
            return false;
        
        default: 
            return state;
    }
}