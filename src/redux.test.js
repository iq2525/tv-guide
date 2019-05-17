import { reducer } from './redux';

describe('redux', () => {
  it('handles API_CALL_REQUEST', () => {
    const newState = reducer(null, {type: 'API_CALL_REQUEST'})
    expect(newState).toEqual({fetching: true, error: null})
  });

  it('handles API_CALL_SUCCESS', () => {
    const newState = reducer(null, {type: 'API_CALL_SUCCESS', tvGuide: 'test'})
    expect(newState).toEqual({fetching: false, tvGuide: 'test'})
  });

  it('handles API_CALL_FAILURE', () => {
    const newState = reducer(null, {type: 'API_CALL_FAILURE', tvGuide: null, error: 'error'})
    expect(newState).toEqual({fetching: false, tvGuide: null, error: 'error'})
  });
});
