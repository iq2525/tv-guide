import { runSaga } from "redux-saga";
import { watcherSaga, workerSaga } from './sagas'
import * as api from './api'

//TODO - Need to add more Saga tests

it('redux saga test', async () => {
  const mockedData = [
        {
          name: 'test',
          count: 1
        },
        {
          name: 'test',
          count: 2
        },
      ]

  const dispatchedActions = [];

  const fakeStore = {
    getState: () => ({ nextPage: 1 }),
    dispatch: action => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, workerSaga).done;
});
