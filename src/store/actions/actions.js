import { BASE_URL, API_KEY } from '../../api/constants';
import {
  START_LOADING_TODOS,
  GET_TODOS,
  IS_ERROR,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from '../constants';
import axios from 'axios';

export const getTodosFromApi = () => {
  return dispatch => {
    dispatch(startLoadingTodos());

    axios
      .get(`${BASE_URL}/todos`, {
        headers: {
          'Content-Type': 'application/json',
          apikey: API_KEY,
        },
      })
      .then(
        response => {
          dispatch(getTodos(response.data));
        },
        () => {
          dispatch(showNotification('Error'));
          setTimeout(() => {
            dispatch(hideNotification());
          }, 3000);
        }
      );
  };
};

export const addTodoToApi = todo => {
  return dispatch => {
    dispatch(startLoadingTodos());

    axios
      .post(
        `${BASE_URL}/todos`,
        {
          title: todo,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            apikey: API_KEY,
          },
        }
      )
      .then(
        () => {
          dispatch(getTodosFromApi());
          dispatch(showNotification('Todo was succesfully added!'));
          setTimeout(() => {
            dispatch(hideNotification());
          }, 3000);
        },
        () => {
          dispatch(showNotification('Error'));
          setTimeout(() => {
            dispatch(hideNotification());
          }, 3000);
        }
      );
  };
};

export const toggleTodoInApi = id => {
  return dispatch => {
    dispatch(startLoadingTodos());

    axios
      .put(
        `${BASE_URL}/todos/${id}/done`,
        { id },

        {
          headers: {
            'Content-Type': 'application/json',
            apikey: API_KEY,
          },
        }
      )
      .then(
        () => {
          dispatch(getTodosFromApi());
        },
        () => {
          dispatch(showNotification('Error'));
          setTimeout(() => {
            dispatch(hideNotification());
          }, 3000);
        }
      );
  };
};

export const deleteTodoFromApi = id => {
  return dispatch => {
    dispatch(startLoadingTodos());

    axios
      .delete(
        `${BASE_URL}/todos/${id}`,

        {
          headers: {
            'Content-Type': 'application/json',
            apikey: API_KEY,
          },
        }
      )
      .then(
        () => {
          dispatch(getTodosFromApi());
          dispatch(showNotification('Todo was succesfully deleted! '));
          setTimeout(() => {
            dispatch(hideNotification());
          }, 3000);
        },
        () => {
          dispatch(showNotification('Error'));
          setTimeout(() => {
            dispatch(hideNotification());
          }, 3000);
        }
      );
  };
};

export const getTodos = todos => ({
  type: GET_TODOS,
  payload: todos,
});

export const startLoadingTodos = () => ({
  type: START_LOADING_TODOS,
});

export const showNotification = text => ({
  type: SHOW_NOTIFICATION,
  payload: text,
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});

export const hasError = () => ({
  type: IS_ERROR,
});
