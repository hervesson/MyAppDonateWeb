import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { firebaseFirestoreServices } from "../../Services/firebaseFirestoreServices";

import {
   SET_DADOS_BANCARIOS,
} from './constants';

//import { loginUserSuccess,} from './actions';

const fireBaseBackend = new firebaseFirestoreServices();

function* gravarDadosBancarios({ payload: { banco, conta, digito, tipopix, pix } }) {
   try {
      const response = yield call(fireBaseBackend.gravarDadosBancarios, banco, conta, digito, tipopix, pix);
      //yield put(loginUserSuccess(response));
   } catch (error) {
      //yield put(apiError(error));
   }
}

export function* dadosbancarios() {
   yield takeEvery(SET_DADOS_BANCARIOS, gravarDadosBancarios);
}


function* dadosSaga() {
   yield all([
      fork(dadosbancarios),
   ]);
}

export default dadosSaga;