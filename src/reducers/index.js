import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { errorReducer } from './errorReducer';
import { colorsReducer } from './colorsReducer';
import { palettesReducer } from './palettesReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
    projects: projectsReducer,
    palettes: palettesReducer,
    colors: colorsReducer,
    error: errorReducer,
    loading: loadingReducer
})

export default rootReducer;