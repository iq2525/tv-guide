import { takeLatest, call, put } from "redux-saga/effects";
import { fetchData } from './api';


// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
export function* workerSaga() {
  try {
    const response = yield call(fetchData);
    const data = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", tvGuide: data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}