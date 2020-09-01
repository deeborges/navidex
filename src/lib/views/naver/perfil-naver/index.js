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
  color: #212121;
  font-family: Montserrat-Bold;
  font-size: 22px;
  margin-bottom: 4px;
`;

export const NaverJob = styled.Text`
  font-family: Montserrat-Regular;
  font-size: 16px;
  color: #212121;
  margin-bottom: 24px;
`;

export const NaverSubdescriptionContainer = styled.View`
  margin-bottom: 24px;
`;

export const NaverSubdescriptionTitle = styled.Text`
  color: #212121;
  font-family: Montserrat-SemiBold;
`;

export const NaverSubdescriptionValues = styled.Text`
  color: #212121;
  font-family: Montserrat-Regular;
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

        <NaverSubdescriptionContainer>
          <NaverSubdescriptionTitle>Idade</NaverSubdescriptionTitle>
          <NaverSubdescriptionValues>32</NaverSubdescriptionValues>
        </NaverSubdescriptionContainer>

        <NaverSubdescriptionContainer>
          <NaverSubdescriptionTitle>Tempo de empresa</NaverSubdescriptionTitle>
          <NaverSubdescriptionValues>3 anos</NaverSubdescriptionValues>
        </NaverSubdescriptionContainer>

        <NaverSubdescriptionContainer>
          <NaverSubdescriptionTitle>
            Projeto que participou
          </NaverSubdescriptionTitle>
          <NaverSubdescriptionValues>
            Mateus Entregas, Canto do Chef, Mateus App, Mateus Cashback, Mateus
            Online PWA
          </NaverSubdescriptionValues>
        </NaverSubdescriptionContainer>
        <WrapperButtons></WrapperButtons>
      </NaverDescriptionContainer>
    </Wrapper>
  );
}
