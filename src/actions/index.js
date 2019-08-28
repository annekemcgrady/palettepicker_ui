export const getColors = colors => ({
    type: 'ADD_COLORS', 
    colors
})

export const getProjects = projects => ({
    type: 'GET_PROJECTS',
    projects
})

export const getPalettes = palettes => ({
    type: 'GET_PALETTES',
    palettes
})

export const removePalette = id => ({
    type: 'REMOVE_PALETTE', 
    id
})

export const removeProject = id => ({
    type: 'REMOVE_PROJECT', 
    id
})

export const loadComplete = () => ({
    type: 'LOAD_COMPLETE'
})

export const hasErrored = error => ({
    type: 'HAS_ERRORED',
    error
})

export const lockColor = color => ({
    type: 'LOCK_COLOR',
    color
})

export const addProject = project => ({
    type: 'ADD_PROJECT',
    project
})

export const addPalette = palette => ({
    type: 'ADD_PALETTE',
    palette
})