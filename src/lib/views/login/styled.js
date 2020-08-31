import styled from 'styled-components/native';

export const KeyboardContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;
export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;
export const Wrapper = styled.ScrollView`
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 0px 16px;
  padding-top: 106px;
`;

export const LogoContainer = styled.View`
  margin: 56px 112px;
`;

export const Logo = styled.Image`
  width: auto;
`;

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
  placeHolder: 'E-mail',
})`
  align-items: center;
  border: 1px;
  border-color: #212121;
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

export const InputSenha = styled.TextInput`
  align-items: center;
  border: 1px;
  border-color: #212121;
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
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
