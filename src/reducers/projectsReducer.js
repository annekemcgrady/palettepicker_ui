export const projectsReducer = (state = [], {type, project, projects, id}) => {
    switch(type) {
        case 'GET_PROJECTS':
            return projects;
        
        case 'ADD_PROJECT':
            return [...state, {...project, id}]

        default:
            return state;
    }
}