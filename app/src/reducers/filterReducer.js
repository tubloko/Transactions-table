import {
  FILTER_TYPE,
  FILTER_STATUS,
} from "../constants/actionTypes";

const initialStateStatus = {
  status: 'Status',
};

const initialStateType = {
  type: 'Type',
};

const filterReducerStatus = (state = initialStateStatus, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_STATUS:
      return { status: payload.status };

    default:
      return state;
  }
};

const filterReducerType = (state = initialStateType, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_TYPE:
      return { type: payload.type };

    default:
      return state;
  }
};

export {
  filterReducerStatus,
  filterReducerType,
};