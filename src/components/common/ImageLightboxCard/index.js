import React from 'react';
import styled from 'styled-components';

import { Image } from 'react-bootstrap';
import { MediaQueries } from '@utils/Styles';

// background: #fffa94;
const CardProyect = styled.div`

  ${MediaQueries.xs`flex-basis: 100%;`}
  ${MediaQueries.sm`flex-basis: 100%;`}
  ${MediaQueries.md`flex-basis: 50%;`}
  ${MediaQueries.lg`flex-basis: 50%;`}
  ${MediaQueries.xl`flex-basis: 50%;`}
  position: relative;
  overflow: hidden;
`;

const ImageLightBoxCard = ({ image, alt }) => {
  return (
    <CardProyect>
      <Image fluid src={image} alt={alt} />
    </CardProyect>
  );
};

export default ImageLightBoxCard;
