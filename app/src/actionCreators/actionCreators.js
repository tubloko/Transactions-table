import {
  READ_FILE_LOADING,
  READ_FILE_SUCCESS,
  READ_FILE_FAILURE,
  WRITE_FILE_LOADING,
  WRITE_FILE_SUCCESS,
  WRITE_FILE_FAILURE,
  DELETE_TRANSACTION,
  CHANGE_ACTIVE_PAGE,
  EDIT_TRANSACTION,
  FILTER_STATUS,
  FILTER_TYPE, USER_LOGIN_LOADING, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS,
} from "../constants/actionTypes";

export const readFileLoading = () => ({ type: READ_FILE_LOADING });
export const readFileSuccess = (data) => ({ type: READ_FILE_SUCCESS, payload: { data } });
export const readFileFailure = () => ({ type: READ_FILE_FAILURE });

export const writeFileLoading = ({ data, filename }) => ({
    type: WRITE_FILE_LOADING,
    payload: { data: data, filename },
  });
export const writeFileSuccess = (transactions) => ({
  type: WRITE_FILE_SUCCESS,
  payload: { transactions },
});
export const writeFileFailure = () => ({ type: WRITE_FILE_FAILURE });

export const deleteTransaction = (id) => ({ type: DELETE_TRANSACTION, payload: { id } });
export const editTransaction = ({id, status}) => ({ type: EDIT_TRANSACTION, payload: { id, status } });

export const filterStatus  = (status) => ({ type: FILTER_STATUS, payload: { status } });
export const filterType  = (type) => ({ type: FILTER_TYPE, payload: { type } });

export const userLoginLoading = (name, password) => ({ type: USER_LOGIN_LOADING, payload: { name, password } });
export const userLoginSuccess = ({ name, password }) => ({ type: USER_LOGIN_SUCCESS, payload: { name, password } });
export const userLoginError = () => ({ type: USER_LOGIN_FAILURE });

export const changeActivePage = (activePage) => ({ type: CHANGE_ACTIVE_PAGE, payload: { activePage } });