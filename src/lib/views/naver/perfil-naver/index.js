import React from 'react';
import {
  ContainerButton,
  IconButton,
  NaverDescriptionContainer,
  NaverImage,
  NaverJob,
  NaverName,
  NaverSubdescriptionContainer,
  NaverSubdescriptionTitle,
  NaverSubdescriptionValues,
  Scroll,
  TextButton,
  Wrapper,
  WrapperButtons,
} from './styled';

import GenericHeader from '../../../components/generic-header';

const pathIconBack = require('../../../../assets/icons/back.png');
const pathIconDelete = require('../../../../assets/icons/delete.png');
const pathIconEdit = require('../../../../assets/icons/edit.png');

export default function PerfilNaver({ navigation }) {
  return (
    <>
      <GenericHeader
        pathIcon={pathIconBack}
        event={() => navigation.goBack()}
      />
      <Scroll>
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
              <NaverSubdescriptionTitle>
                Tempo de empresa
              </NaverSubdescriptionTitle>
              <NaverSubdescriptionValues>3 anos</NaverSubdescriptionValues>
            </NaverSubdescriptionContainer>
            <NaverSubdescriptionContainer>
              <NaverSubdescriptionTitle>
                Projeto que participou
              </NaverSubdescriptionTitle>
              <NaverSubdescriptionValues>
                Mateus Entregas, Canto do Chef, Mateus App, Mateus Cashback,
                Mateus Online PWA
              </NaverSubdescriptionValues>
            </NaverSubdescriptionContainer>
            <WrapperButtons>
              <ContainerButton bgColor={'#ffff'}>
                <IconButton
                  height={'16px'}
                  width={'16px'}
                  source={pathIconDelete}
                />
                <TextButton color={'#212121'}>Excluir</TextButton>
              </ContainerButton>
              <ContainerButton
                bgColor={'#212121'}
                onPress={() => navigation.navigate('RouteEditarNaver')}
              >
                <IconButton
                  height={'16px'}
                  width={'16px'}
                  source={pathIconEdit}
                />
                <TextButton color={'#ffff'}>Editar</TextButton>
              </ContainerButton>
            </WrapperButtons>
          </NaverDescriptionContainer>
        </Wrapper>
      </Scroll>
    </>
  );
}
