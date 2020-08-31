import React from 'react';
import { IconBack, IconBackContainer } from './styled';

const pathIconBack = require('../../../assets/icons/back.png');

export default function HeaderIconBack({ goBack }) {
  return (
    <IconBackContainer onPress={goBack}>
      <IconBack source={pathIconBack} />
    </IconBackContainer>
  );
}
