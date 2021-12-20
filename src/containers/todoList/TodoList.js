import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import {
  getTodosFromApi,
  deleteTodoFromApi,
  toggleTodoInApi,
} from '../../store/actions';
import { ListItem } from '../../components/listItem';
import { Loader } from '../../components/loader';
import styled from '@emotion/styled';
import { Notification } from '../../components/notifications';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px;
`;

export const Todos = () => {
  const dispatch = useDispatch();

  const { todos, isLoading, notification } = useSelector(({ todos }) => todos);

  const handleDeleteTodo = id => {
    dispatch(deleteTodoFromApi(id));
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodoInApi(id));
  };

  useEffect(() => {
    dispatch(getTodosFromApi());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <Wrapper>
      {notification && (
        <Notification type={notification === 'Error' && 'error'}>
          {notification}
        </Notification>
      )}
      {todos.length > 0 &&
        todos.map(({ _id, isDone, title }) => (
          <ListItem
            key={_id}
            removeTodo={handleDeleteTodo}
            toggleTodo={handleToggleTodo}
            id={_id}
            isDone={isDone}
          >
            {title}
          </ListItem>
        ))}
    </Wrapper>
  );
};

export const TodoList = connect()(Todos);
