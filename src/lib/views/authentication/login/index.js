import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import {
  Background,
  Container,
  ContainerButton,
  ContainerSafe,
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

import { signIn } from '../../../../services/authentication.service';

const pathLogo = require('../../../../assets/logo.png');

export default function Login({ navigation }) {
  const [modal, enableModal] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const inputRefEmail = useRef(null);
  const inputRefPassword = useRef(null);
  
  const logar = async () => {
    try {
      const data = await signIn({ email, password });
      console.info('Logado com sucesso: ', data);
    } catch (error) {
      Alert.alert('Navidex', 'Não foi possível entrar no app');
    }
  };

  return (
    <>
      <ContainerSafe>
        <Background behavior={'position'}>
          <Container>
            <LogoContainer>
              <Logo source={pathLogo} />
            </LogoContainer>
            <InputEmailContainer>
              <InputLabel>E-mail</InputLabel>
              <InputEmail
                ref={inputRefEmail}
                keyboardType={'email-address'}
                onChangeText={(text) => setEmail(text)}
              />
            </InputEmailContainer>
            <InputSenhaContainer>
              <InputLabelSenha>Senha</InputLabelSenha>
              <InputSenha
                ref={inputRefPassword}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
            </InputSenhaContainer>
            <ContainerButton onPress={async () => await logar()}>
              <TextButton>Entrar</TextButton>
            </ContainerButton>
          </Container>
        </Background>
      </ContainerSafe>
    </>
  );
}
