import React from 'react';
import {
  Background,
  Container,
  ContainerButton,
  InputEmailContainer,
  InputEmail,
  InputLabel,
  InputLabelSenha,
  InputSenhaContainer,
  InputSenha,
  Logo,
  LogoContainer,
  TextButton,
} from './styled';

const pathLogo = require('../../../assets/logo.png');

export default function Login({ navigation }) {
  return (
    <Background behavior={'position'}>
      <Container>
        <LogoContainer>
          <Logo source={pathLogo} />
        </LogoContainer>
        <InputEmailContainer>
          <InputLabel>E-mail</InputLabel>
          <InputEmail placeHolder="E-mail" />
        </InputEmailContainer>
        <InputSenhaContainer>
          <InputLabelSenha>Senha</InputLabelSenha>
          <InputSenha placeHolder="Senha" />
        </InputSenhaContainer>
        <ContainerButton onPress={() => navigation.navigate('RoutePerfilNaver')}>
          <TextButton>Entrar</TextButton>
        </ContainerButton>
      </Container>
    </Background>
  );
}
