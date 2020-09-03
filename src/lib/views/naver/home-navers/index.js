import React from 'react';
import { Text, View } from 'react-native';

import GenericHeader from '../../../components/generic-header';

const pathIconBack = require('../../../../assets/icons/back.png');

export default function HomeNavers({ navigation }) {
  return (
    <>
      <GenericHeader
        pathIcon={pathIconBack}
        event={() => navigation.goBack()}
      />
      <View>
        <Text>Estou na home</Text>
      </View>
    </>
  );
}
