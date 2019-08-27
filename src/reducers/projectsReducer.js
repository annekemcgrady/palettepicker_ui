export const projectsReducer = (state = [], {type, project, projects}) => {
    switch(type) {
        case 'GET_PROJECTS':
            return projects;
        
        case 'ADD_PROJECT':
            return [...state, project]

        default:
            return state;
    }
}