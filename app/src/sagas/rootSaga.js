import {all} from "redux-saga/effects";
import { watchReadFile, watchWriteFile } from "./transactionsSaga";
import { watchUserLogin } from "./loginSaga";

export default function* rootSaga() {
  yield all([
    watchReadFile(),
    watchWriteFile(),
    watchUserLogin(),
  ]);
}
