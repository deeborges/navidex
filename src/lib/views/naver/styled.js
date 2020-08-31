import React from 'react';
import styled from 'styled-components/native';

export const Wrapper = styled.View `
  background-color: #fff;
  flex: 1;
`

export const NaverImage = styled.Image`
  height: 288px;
  width: 100%;
`;

export default function Naver() {
  return (
    <Wrapper>
      <NaverImage source={{ uri: 'https://imgur.com/uD1tuRx.png'}} />
    </Wrapper>
  );
}