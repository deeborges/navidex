import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  Container,
  Title,
  InputLabelNome,
  InputNome,
  InputNomeContainer,
  InputCargoContainer,
  InputLabelCargo,
  InputCargo,
  InputIdade,
  InputIdadeContainer,
  InputLabelIdade,
  InputLabelTempoEmpresa,
  InputTempoEmpresa,
  InputTempoEmpresaContainer,
  InputLabelProjetoParticipou,
  InputProjetoParticipou,
  InputProjetoParticipouContainer,
  InputLabelUrlFoto,
  InputUrlFoto,
  InputUrlFotoContainer,
  ContainerButton,
  TextButton,
} from './styled';

import GenericModal from '../generic-modal';

const aliases = {
  adicionar: 'adicionado',
  editar: 'editado',
};

export default function GenericFormNaver({ alias, title, action }) {
  const [visibilitityModal, setVisibilityModal] = useState(false);

  const openModal = (action) => {
    action;
    setVisibilityModal(true);
  };
  const closeModal = () => setVisibilityModal(false);

  return (
    <>
      {visibilitityModal ? (
        <GenericModal alias={aliases[alias]} closeModal={closeModal} />
      ) : null}
      <Wrapper>
        <Container>
          <Title>{title} naver</Title>
          <InputNomeContainer>
            <InputLabelNome>Nome</InputLabelNome>
            <InputNome />
          </InputNomeContainer>
          <InputCargoContainer>
            <InputLabelCargo>Cargo</InputLabelCargo>
            <InputCargo />
          </InputCargoContainer>
          <InputIdadeContainer>
            <InputLabelIdade>Idade</InputLabelIdade>
            <InputIdade />
          </InputIdadeContainer>
          <InputTempoEmpresaContainer>
            <InputLabelTempoEmpresa>Tempo de empresa</InputLabelTempoEmpresa>
            <InputTempoEmpresa />
          </InputTempoEmpresaContainer>
          <InputProjetoParticipouContainer>
            <InputLabelProjetoParticipou>
              Projetos que participou
            </InputLabelProjetoParticipou>
            <InputProjetoParticipou />
          </InputProjetoParticipouContainer>
          <InputUrlFotoContainer>
            <InputLabelUrlFoto>URL da foto do naver</InputLabelUrlFoto>
            <InputUrlFoto />
          </InputUrlFotoContainer>
          <ContainerButton onPress={openModal}>
            <TextButton>Salvar</TextButton>
          </ContainerButton>
        </Container>
      </Wrapper>
    </>
  );
}
