import React, { useContext } from 'react';

import AppRoutes from './app.routes';
import Home from '../lib/views/naver/home-navers';

import { AuthContext } from '../providers/auth.provider';

const Routes = () => {
  const { token, loading } = useContext(AuthContext);
  return (
    token ? (
      <Home />
    ): (
      <AppRoutes />
    )
  )
}

export default Routes;