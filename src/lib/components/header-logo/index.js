import React from 'react';
import { Logo } from './styled';

const pathLogo = require('../../../assets/header-logo.png');

export default function HeaderLogo() {
  return <Logo source={pathLogo} />;
}
