import { colorsReducer } from '../reducers/colorsReducer';


describe('colorsReducer', () => {
  
  it('should return the initial state', () => {
    const expected = [];
    const result = colorsReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the array of colors', () => {
    const addColorsAction= {
      type: "ADD_COLORS",
      colors: [{hexCode: '#234red'}]
    }
    const expected = [{hexCode: '#234red'}];
    const result = colorsReducer([], addColorsAction);
    expect(result).toEqual(expected);
  })

  it('should return the array of colors with a color with isLocked property', () => {
    const color = '#234red'
    
    const lockColorAction= {
      type: "LOCK_COLOR",
      color: color
    }
    const expected = [{hexCode: '#234red', isLocked: true}]
    const result = colorsReducer([], lockColorAction);
    expect(result).toEqual(expected);
  })



  

})
