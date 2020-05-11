import {call, put, takeEvery} from 'redux-saga/effects';
import {
  USER_LOGIN_LOADING
} from "../constants/actionTypes";
import {
  userLoginError,
  userLoginSuccess
} from "../actionCreators/actionCreators";
import verifyUser from './../utils/verifyUser';

function* userLogin(action) {
  const isAuth = yield call(verifyUser, action.payload);
  if (isAuth) yield put(userLoginSuccess(action.payload));
  else yield put(userLoginError());
}

export function* watchUserLogin() {
  yield takeEvery(USER_LOGIN_LOADING, userLogin);
}