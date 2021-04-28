import { all } from 'redux-saga/effects';
import dadosSaga from './dashboard/saga'; 

export default function* rootSaga(getState) {
    yield all([
          dadosSaga(),
    ]);
}
