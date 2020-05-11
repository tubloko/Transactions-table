import {call, put, takeEvery} from 'redux-saga/effects';
import {
  READ_FILE_LOADING,
  WRITE_FILE_LOADING,
} from "../constants/actionTypes";
import {
  readFileSuccess,
  readFileFailure,
  writeFileSuccess,
  writeFileFailure,
} from "../actionCreators/actionCreators";
import API from "../API/API";

const _API = new API();

function* readFile() {
  const transactions = yield call(_API.getAllTransactions);
  if (transactions) yield put(readFileSuccess(transactions));
  else yield put(readFileFailure());
}

function* writeFile(action) {
  yield call(_API.addTransactions, action.payload);
  const transactions = yield call(_API.getAllTransactions);
  if (transactions) yield put(writeFileSuccess(transactions));
  else yield put(writeFileFailure());
}

export function* watchReadFile() {
  yield takeEvery(READ_FILE_LOADING, readFile);
}

export function* watchWriteFile() {
  yield takeEvery(WRITE_FILE_LOADING, writeFile);
}