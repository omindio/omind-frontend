import React from 'react';
import styled from 'styled-components';

import { MediaQueries } from '@utils/Styles';

import logoWhite from './logo-white.svg';

const Logo = styled.img`
  ${MediaQueries.xs`width: 60px;`}
  ${MediaQueries.sm`width: 65px;`}
  ${MediaQueries.md`width: 75px;`}
  ${MediaQueries.lg`width: 75px;`}
  ${MediaQueries.xl`width: 75px;`}
`;

const White = () => {
  return <Logo src={logoWhite} alt="Logo omind" />;
};
export default White;
