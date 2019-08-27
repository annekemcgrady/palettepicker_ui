export const projectsReducer = (state = [], {type, project, projects, id}) => {
    switch(type) {
        case 'GET_PROJECTS':
            return projects;
        
        case 'ADD_PROJECT':
            return [...state, project]

        case 'REMOVE_PROJECT':
        let newState = state.filter(project => project.id !== id) 
        return [...newState]


        default:
            return state;
    }
}