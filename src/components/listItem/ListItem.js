import React from 'react';
import Trash from 'react-feather/dist/icons/trash-2';
import styled from '@emotion/styled';

const StyledTodoItem = styled.div`
  min-height: 150px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc9ca;
  padding-top: 20px;
  border: 1px solid #ccc9ca;
  border-radius: 3px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const StyledTrash = styled(Trash)`
  padding: 5px 0;
  width: 100%;
  background-color: #eeeeee;
  cursor: pointer;
  color: red;
`;

const StyledText = styled.span(props => ({
  textDecoration: props.isDone === true ? 'line-through' : '',
  fontSize: '18px',
  padding: '5px',
}));

const StyledCheckbox = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
  :checked:after {
    background-color: red;
  }
`;

export const ListItem = ({ children, removeTodo, toggleTodo, id, isDone }) => {
  const handleToggleTodo = () => {
    toggleTodo(id);
  };

  return (
    <StyledTodoItem>
      <StyledCheckbox
        type="checkbox"
        onChange={handleToggleTodo}
        checked={isDone}
      />
      <StyledText isDone={isDone}> {children}</StyledText>
      <StyledTrash onClick={() => removeTodo(id)} />
    </StyledTodoItem>
  );
};
