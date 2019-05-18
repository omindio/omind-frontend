import React from 'react';
import styled from 'styled-components';

import { MediaQueries } from '@utils/Styles';

import logoBlack from './logo-black.png';

const Logo = styled.img`
  ${MediaQueries.xs`width: 60px;`}
  ${MediaQueries.sm`width: 65px;`}
  ${MediaQueries.md`width: 75px;`}
  ${MediaQueries.lg`width: 75px;`}
  ${MediaQueries.xl`width: 75px;`}
`;

const Black = () => {
  return <Logo src={logoBlack} alt="Logo omind" />;
};
export default Black;
