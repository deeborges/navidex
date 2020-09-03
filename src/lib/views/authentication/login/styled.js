import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  padding: 0px 16px;
  background-color: #fff;
`;

export const Container = styled.KeyboardAvoidingView`
  justify-content: center;
  flex: 1;
`;

export const ContainerSafe = styled.SafeAreaView`
  justify-content: center;
  flex: 1;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 106px 56px 106px;
`;

export const Logo = styled.Image``;

export const InputEmailContainer = styled.View`
  margin: 0 0 32px 0;
  width: 100%;
`;

export const InputLabel = styled.Text`
  color: #212121;
  font-family: Montserrat-Bold;
  font-size: 16px;
  padding-bottom: 4px;
`;

export const InputEmail = styled.TextInput.attrs({
  placeholder: 'E-mail',
  fontFamily: 'Montserrat-Regular',
  fontSize: 16,
})`
  align-items: center;
  border: 1px;
  border-color: #212121;
  font-family: Montserrat-Regular;
  font-size: 16px;
  height: 40px;
  padding: 8px;
  justify-content: center;
  width: 100%;
`;

export const InputSenhaContainer = styled.View`
  margin: 0px 0px 40px 0px;
  width: 100%;
`;

export const InputLabelSenha = styled.Text`
  color: #212121;
  font-family: Montserrat-Bold;
  font-size: 16px;
  padding-bottom: 4px;
`;

export const InputSenha = styled.TextInput.attrs({
  placeholder: 'Senha',
  fontFamily: 'Montserrat-Regular',
  fontSize: 16,
})`
  align-items: center;
  border: 1px;
  border-color: #212121;
  font-family: Montserrat-Regular;
  font-size: 16px;
  height: 40px;
  padding: 8px;
  justify-content: center;
  width: 100%;
`;

export const ContainerButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #4d4d4d;
  width: 100%;
  height: 40px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: Montserrat-Regular;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
