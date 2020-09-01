import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import HeaderIconBack from '../../../components/header-icon-back';

export const Wrapper = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const NaverImage = styled.Image`
  height: 288px;
  width: 100%;
`;

export const NaverDescriptionContainer = styled.ScrollView`
  padding: 24px 16px 40px 16px;
`;

export const NaverName = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #212121;
  margin-bottom: 4px;
`;

export const NaverJob = styled.Text`
  font-size: 16px;
  color: #212121;
  margin-bottom: 24px;
`;

export const NaverIdadeContainer = styled.View`
  margin-bottom: 24px;
`;

export const NaverIdadeTitle = styled.Text`
  color: #212121;
  font-weight: bold;
`;

export const NaverIdade = styled.Text`
  color: #212121;
`;

export const WrapperButtons = styled.View`
  flex: 1 1;
`;


export default function Naver({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderIconBack goBack={() => navigation.goBack()} />,
    });
  }, [navigation]);

  return (
    <Wrapper>
      <NaverImage source={{ uri: 'https://imgur.com/uD1tuRx.png' }} />
      <NaverDescriptionContainer>
        <NaverName>Juliano Reis</NaverName>
        <NaverJob>Front-end Developer</NaverJob>
        
        <NaverIdadeContainer>
          <NaverIdadeTitle>Idade</NaverIdadeTitle>
          <NaverIdade>32</NaverIdade>
        </NaverIdadeContainer>
        
        <NaverIdadeContainer>
          <NaverIdadeTitle>Tempo de empresa</NaverIdadeTitle>
          <NaverIdade>3 anos</NaverIdade>
        </NaverIdadeContainer>
        
        <NaverIdadeContainer>
          <NaverIdadeTitle>Projeto que participou</NaverIdadeTitle>
          <NaverIdade>
            Mateus Entregas, Canto do Chef, Mateus App, Mateus Cashback, Mateus
            Online PWA
          </NaverIdade>
        </NaverIdadeContainer>
        <WrapperButtons>

        </WrapperButtons>
      </NaverDescriptionContainer>
    </Wrapper>
  );
}
