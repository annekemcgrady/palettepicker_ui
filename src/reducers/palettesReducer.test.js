import { palettesReducer } from '../reducers/palettesReducer';


describe('palettesReducer', () => {
  
  it('should return the initial state', () => {
    const expected = [];
    const result = palettesReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the array of palettes', () => {
    const addPalettesAction= {
      type: "GET_PALETTES",
      palettes: [{hexCode: '#234red'}]
    }
    const expected = [{hexCode: '#234red'}];
    const result = palettesReducer([], addPalettesAction);
    expect(result).toEqual(expected);
  })

  it('should return the array of palettes', () => {
    
    const addPaletteAction= {
      type: "ADD_PALETTE",
      palette: {name: 'Morning Glory'}
    }
    const expected = [{name: 'Morning Glory'}]
    const result = palettesReducer([], addPaletteAction);
    expect(result).toEqual(expected);
  })

  it('should return the array of remaining palettes', () => {
    
    const removePaletteAction= {
      type: "REMOVE_PALETTE",
      id: 5
    }
    const expected = []
    const result = palettesReducer([], removePaletteAction);
    expect(result).toEqual(expected);
  })

  

})
