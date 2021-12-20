import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { addTodoToApi } from '../../store/actions';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const StyledInput = styled.input`
  border-radius: 4px;
  height: 40px;
  min-width: 400px;
  margin-bottom: 20px;
  border: 1px solid #bdbdbd;
  background-color: #ededed;
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

const StyledButton = styled.button`
  padding: 12px;
  background-color: #464660;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const Form = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleAddTodo = () => {
    dispatch(addTodoToApi(value));
    setValue('');
  };

  return (
    <StyledForm>
      <StyledInput
        value={value}
        onChange={handleOnChange}
        placeholder="Read an interesting book..."
      />
      <StyledButton onClick={handleAddTodo}>ADD TODO</StyledButton>
    </StyledForm>
  );
};
