import React from 'react';

import GenericHeader from '../../../components/generic-header';
import GenericFormNave from '../../../components/generic-form-naver';

const pathIconBack = require('../../../../assets/icons/back.png');

export default function AdicionarNaver({ navigation }) {
  return (
    <>
      <GenericHeader
        pathIcon={pathIconBack}
        event={() => navigation.goBack()}
      />
      <GenericFormNave title={'Adicionar'} alias={'adicionar'} />
    </>
  );
}
