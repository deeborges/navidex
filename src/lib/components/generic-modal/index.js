import React from 'react';
import {
  Container,
  ContainerDescription,
  ContainerHeader,
  Description,
  Headline,
  IconClose,
  IconCloseContainer,
  Wrapper,
  WrapperButtons,
  ContainerButton,
} from './styled';

const pathIconClose = require('../../../assets/icons/clear.png');

export default function GenericModal({ alias, closeModal, buttonBordered }) {
  return (
    <Wrapper>
      <Container>
        <ContainerHeader>
          <Headline>Naver {alias}</Headline>
          <IconCloseContainer onPress={closeModal}>
            <IconClose source={pathIconClose} />
          </IconCloseContainer>
        </ContainerHeader>
        <ContainerDescription>
          <Description>Naver {alias} com sucesso</Description>
        </ContainerDescription>
        <WrapperButtons>
          {buttonBordered ? (
            <ContainerButton>
              <ButtonBordered text={'Confirmar'} />
            </ContainerButton>
          ) : null}
        </WrapperButtons>
      </Container>
    </Wrapper>
  );
}
