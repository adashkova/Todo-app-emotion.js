import React from 'react';
import styled from '@emotion/styled';

const NotificationWrapper = styled.div(props => ({
  position: 'absolute',
  minWidth: ' 300px',
  padding: '10px',
  top: '240px',
  display: 'flex',
  justifyContent: ' center',
  alignItems: 'center',
  backgroundColor: `${props.type === 'error' ? '#F8485E' : '#66DE93'}`,
  color: '#fff',
  borderRadius: '3px',
}));

export const Notification = ({ children, type }) => (
  <NotificationWrapper type={type}>{children}</NotificationWrapper>
);
