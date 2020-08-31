import React from 'react';
import {
  Content,
  Wrapper,
  IconMenu,
  IconMenuContainer,
  Logo,
  LogoContainer,
} from './styled';

const pathIconMenu = require('../../../assets/icons/menu.png');
const pathLogo = require('../../../assets/logo.png');

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <IconMenuContainer>
          <IconMenu source={pathIconMenu} />
        </IconMenuContainer>
        <LogoContainer>
          <Logo source={pathLogo} />
        </LogoContainer>
      </Content>
    </Wrapper>
  );
}
