import { errorReducer } from '../reducers/errorReducer';


describe('errorReducer', () => {
  
  it('should return the initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return error', () => {
    const hasErroredAction= {
      type: "HAS_ERRORED",
      error: 'Failed to fetch projects'
    }
    const expected = 'Failed to fetch projects';
    const result = errorReducer([], hasErroredAction);
    expect(result).toEqual(expected);
  })


})
