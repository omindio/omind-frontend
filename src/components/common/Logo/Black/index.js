import React from 'react';
import styled from 'styled-components';

import logoBlack from './logo-black.png';

const Logo = styled.img`
  width: 75px;
`;
const Black = () => {
  return <Logo src={logoBlack} alt="Logo omind" />;
};
export default Black;
