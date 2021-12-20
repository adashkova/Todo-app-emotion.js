import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodoListPage } from '../pages/todoListPage';

export const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<TodoListPage />} />
    </Routes>
  </Router>
);
