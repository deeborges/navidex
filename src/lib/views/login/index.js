import React from 'react';
import {
  KeyboardContainer,
  Logo,
  LogoContainer,
  Wrapper,
  InputEmailContainer,
  InputEmail,
  InputLabel,
  InputLabelSenha,
  InputSenhaContainer,
  InputSenha,
  ContainerButton,
  TextButton,
  SafeArea,
} from './styled';
import { Platform } from 'react-native';

const pathLogo = require('../../../assets/logo.png');

export default function Login({ navigation }) {
  return (
    <KeyboardContainer
      behavior={'position'}
    >
      <LogoContainer>
        <Logo source={pathLogo} />
      </LogoContainer>
      <Wrapper>
        <InputEmailContainer>
          <InputLabel>E-mail</InputLabel>
          <InputEmail placeHolder="E-mail" />
        </InputEmailContainer>
        <InputSenhaContainer>
          <InputLabelSenha>Senha</InputLabelSenha>
          <InputSenha placeHolder="Senha" />
        </InputSenhaContainer>
        <ContainerButton onPress={() => navigation.navigate('RouteNaver')}>
          <TextButton>Entrar</TextButton>
        </ContainerButton>
      </Wrapper>
    </KeyboardContainer>
  );
}
