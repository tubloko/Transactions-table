import {
  READ_FILE_LOADING,
  READ_FILE_SUCCESS,
  READ_FILE_FAILURE,
  WRITE_FILE_SUCCESS,
  WRITE_FILE_LOADING,
  DELETE_TRANSACTION,
  EDIT_TRANSACTION,
  CHANGE_ACTIVE_PAGE
} from "../constants/actionTypes";

const initialState = {
  data: [],
  currentPage: 1,
  isLoading: false,
  error: false,
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_FILE_LOADING:
      return {...state, isLoading: true};

    case READ_FILE_FAILURE:
      return {...state, isLoading: false, error: true};

    case READ_FILE_SUCCESS:
      return {...state, isLoading: false, data: action.payload.data};

    case WRITE_FILE_LOADING:
      return {
        ...state,
        isLoading: true,
        data: state.data
      };

    case WRITE_FILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.transactions
      };

    case DELETE_TRANSACTION:
      const {data} = state;
      const id = action.payload.id;

      const deleteData = data.map((file) => ({
          ...file,
          [Object.keys(file)[0]]: Object.entries(file)[0][1].filter(({TransactionId}) => TransactionId !== id),
      }));
      return {
        ...state,
        data: deleteData,
      };

    case EDIT_TRANSACTION:
      console.log(action.payload.status);
      const updateData = state.data.map((file) => ({
        ...file,
        [Object.keys(file)[0]]: Object.entries(file)[0][1].map(a => {
          return a.TransactionId === action.payload.id ? {...a, Status: action.payload.status} : a
        }),
      }));
      return {
        ...state,
        data: updateData,
      };

    case CHANGE_ACTIVE_PAGE:
      return {
        ...state,
        currentPage: action.payload.activePage
      };

    default:
      return state;
  }
};

export default tableReducer;