import { loadingReducer } from '../reducers/loadingReducer';


describe('loadingReducer', () => {
  
  it('should return the initial state', () => {
    const expected = true;
    const result = loadingReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return boolean for load complete', () => {
    const isLoadingAction= {
      type: "LOAD_COMPLETE",
    }
    const expected = false;
    const result = loadingReducer([], isLoadingAction);
    expect(result).toEqual(expected);
  })


})
