import React from 'react';
import { Layout } from '../../components/layout';
import { Form } from '../../components/form';
import { TodoList } from '../../containers/todoList';

export const TodoListPage = () => (
  <Layout>
    <Form />
    <TodoList />
  </Layout>
);
