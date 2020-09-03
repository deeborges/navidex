import React from 'react';
import {
  Content,
  Wrapper,
  Icon,
  IconContainer,
  Logo,
  LogoContainer,
} from './styled';

const pathLogoHeader = require('../../../assets/header-logo.png');

export default function Header({ pathIcon, event }) {
  return (
    <Wrapper>
      {pathIcon ? (
        <IconContainer onPress={event}>
          <Icon source={pathIcon} />
        </IconContainer>
      ) : null}
      <LogoContainer>
        <Logo source={pathLogoHeader} />
      </LogoContainer>
    </Wrapper>
  );
}
