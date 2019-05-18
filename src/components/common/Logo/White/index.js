import React from 'react';
import styled from 'styled-components';

import logoWhite from './logo-white.svg';

const Logo = styled.img`
  width: 75px;
`;
const White = () => {
  return <Logo src={logoWhite} alt="Logo omind" />;
};
export default White;
