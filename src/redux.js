// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  weather: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      console.log('3-data: ', action.weather)
      return { ...state, fetching: false, weather: action.weather };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, weather: null, error: action.error };
    default:
      return state;
  }
}