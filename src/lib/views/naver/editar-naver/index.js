import React, { useLayoutEffect } from 'react';
import GenericFormNave from '../../../components/generic-form-naver';
import HeaderIconBack from '../../../components/header-icon-back';

export default function AdicionarNave() {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderIconBack goBack={() => navigation.goBack()} />,
    });
  }, [navigation]);

  return (
    <>
      <GenericFormNave title={'Editar'} />
    </>
  );
}
