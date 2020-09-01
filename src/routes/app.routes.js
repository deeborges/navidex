import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderLogo from '../lib/components/header-logo';
import PerfilNaver from '../lib/views/naver/perfil-naver';
import AdicionarNaver from '../lib/views/naver/adicionar-naver';
import EditarNaver from '../lib/views/naver/editar-naver';
import Login from '../lib/views/login';

const Stack = createStackNavigator();

const withHeaderLogo = {
  headerTitle: () => <HeaderLogo />,
  headerTitleAlign: 'center',
  headerShown: true,
}
export default function Routes({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="RouteLogin">
      <Stack.Screen
        name="RouteLogin"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RoutePerfilNaver"
        component={PerfilNaver}
        options={withHeaderLogo}
      />
      <Stack.Screen
        name="RouteAdicionarNaver"
        component={AdicionarNaver}
        options={withHeaderLogo}
      />
      <Stack.Screen
        name="RouteEditarNaver"
        component={EditarNaver}
        options={withHeaderLogo}
      />
    </Stack.Navigator>
  );
}
