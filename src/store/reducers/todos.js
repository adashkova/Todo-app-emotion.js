import {
  GET_TODOS,
  START_LOADING_TODOS,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from '../constants';

const initialState = {
  isLoading: false,
  isError: false,
  notification: '',
  todos: [],
};

export const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_LOADING_TODOS:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TODOS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: payload,
      };
    case SHOW_NOTIFICATION:
      return {
        ...state,
        isLoading: false,
        isError: false,
        notification: payload,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        isLoading: false,
        isError: false,
        notification: '',
      };

    default:
      return state;
  }
};
