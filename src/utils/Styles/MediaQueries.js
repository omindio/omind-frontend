import { css } from 'styled-components';

/*
  xs: 0,
  sm: 800px,
  md: 1000px,
  lg: 1200px,
  xl: 1400px,
*/
const sizes = {
  xs: 0,
  sm: 767,
  md: 1023,
  lg: 1200,
  xl: 1400,
};

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
