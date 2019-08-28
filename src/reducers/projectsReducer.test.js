import { projectsReducer } from '../reducers/projectsReducer';


describe('projectsReducer', () => {
  
  it('should return the initial state', () => {
    const expected = [];
    const result = projectsReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the array of projects', () => {
    const getProjectsAction= {
      type: "GET_PROJECTS",
      projects: [{name: 'Rumpus Room'}]
    }
    const expected = [{name: 'Rumpus Room'}];
    const result = projectsReducer([], getProjectsAction);
    expect(result).toEqual(expected);
  })

  it('should add a new project & return the array of projects', () => {
    
    const addProjectAction= {
      type: "ADD_PROJECT",
      project: {name: 'Rumpus Room'}
    }
    const expected = [{name: 'Rumpus Room'}]
    const result = projectsReducer([], addProjectAction);
    expect(result).toEqual(expected);
  })

  it('should return the array of remaining projects', () => {
    
    const removeProjectAction= {
      type: "REMOVE_PROJECT",
      id: 5
    }
    const expected = []
    const result = projectsReducer([], removeProjectAction);
    expect(result).toEqual(expected);
  })

})
