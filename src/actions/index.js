export const getColors = colors => ({
    type: 'GET_COLORS',
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

export const addProject = project => ({
    type: 'ADD_PROJECT',
    project
})

export const addPalette = palette => ({
    type: 'ADD_PALETTE',
    palette
})

export const loadComplete = () => ({
    type: 'LOAD_COMPLETE'
})

export const hasErrored = error => ({
    type: 'HAS_ERRORED',
    error
})