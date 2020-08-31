import React from 'react';

const types = {
  filled: 'filled',
  bordered: 'bordered'
}

export const ButtonBordered = ({ type, icon, text }) => (
  <ContainerButtonBordered onTouchEnd={() => Alert.alert('ui')}>
    {icon ? icon : null}
    <TextButtonBordered>{text}</TextButtonBordered>
  </ContainerButtonBordered>
);
