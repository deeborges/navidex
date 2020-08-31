import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: #fafafa;
  box-shadow: 0 10px 5px #212121;
  height: auto;
  padding: 24px 18px;
  width: 100%;
`;

export const Content = styled.View`
  flex: auto 1;
  flex-direction: row;
`;

export const IconMenuContainer = styled.TouchableOpacity`
  justify-content: center;
  margin: 0 24px 0 0;
`;

export const IconMenu = styled.Image``;

export const LogoContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const Logo = styled.Image`
  margin: 0 0 0 -48px;
`;
