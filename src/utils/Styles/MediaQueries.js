import { css } from 'styled-components';
import sizes from './sizes';

// Iterate through the sizes and create a media template
const MediaQueries = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default MediaQueries;
