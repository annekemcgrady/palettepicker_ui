import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of ADD_COLORS', () => {
    // Setup
    const colors = [{hexCode: '#123dfr'}];
  
    const expectedAction = {
      type: 'ADD_COLORS',
      colors: [{hexCode: '#123dfr'}]
    };

    // Execution
    const result = actions.getColors(colors);

    // Expectation
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of GET_PROJECTS', () => {
    
    const projects = [{name: 'Kitchen'}];
  
    const expectedAction = {
      type: 'GET_PROJECTS',
      projects: [{name: 'Kitchen'}]
    };

    const result = actions.getProjects(projects);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of GET_PALETTES', () => {
    
    const palettes = [{name: 'Purple Rain'}];
  
    const expectedAction = {
      type: 'GET_PALETTES',
      palettes: [{name: 'Purple Rain'}]
    };

    const result = actions.getPalettes(palettes);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of REMOVE_PALETTE', () => {
    
    const id = 5;

    const expectedAction = {
      type: 'REMOVE_PALETTE',
      id: 5
    };

    const result = actions.removePalette(id);

    expect(result).toEqual(expectedAction);
  })


  it('should have a type of REMOVE_PROJECT', () => {
    const id = 25;

    const expectedAction = {
      type: 'REMOVE_PROJECT',
      id: 25
    };

    const result = actions.removeProject(id);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOAD_COMPLETE', () => {
    
    const expectedAction = {
      type: 'LOAD_COMPLETE'
     
    };

    const result = actions.loadComplete();

    expect(result).toEqual(expectedAction);
  })


  it('should have a type of HAS_ERRORED', () => {
    
    const error = 'Failed to fetch';

    const expectedAction = {
      type: 'HAS_ERRORED',
      error: 'Failed to fetch'
    };

    const result = actions.hasErrored(error);

    expect(result).toEqual(expectedAction);
  })


  it('should have a type of LOCK_COLOR', () => {
    
    const color = {hexCode: '#456gjt'};

    const expectedAction = {
      type: 'LOCK_COLOR',
      color: {hexCode: '#456gjt'}
    };

    const result = actions.lockColor(color);

    expect(result).toEqual(expectedAction);
  })


  it('should have a type of ADD_PROJECT', () => {
    
    const project = {name: 'Bathroom'};

    const expectedAction = {
      type: 'ADD_PROJECT',
      project: {name: 'Bathroom'}
    };

    const result = actions.addProject(project);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of ADD_PALETTE', () => {
    
    const palette= {name: 'Bathroom', color_one: '#33dd55'};

    const expectedAction = {
      type: 'ADD_PALETTE',
      palette: {name: 'Bathroom', color_one: '#33dd55'}
    };

    const result = actions.addPalette(palette);

    expect(result).toEqual(expectedAction);
  })


})
