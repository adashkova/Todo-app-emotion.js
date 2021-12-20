import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.h1`
  color: #464660;
`;

export const Layout = ({ children }) => (
  <Content>
    <StyledHeading>Todo-App</StyledHeading>
    {children}
  </Content>
);
