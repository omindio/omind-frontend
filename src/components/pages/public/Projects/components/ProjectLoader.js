import React from 'react';
// import { OverlayCard /* , Loader */ } from '@components/common';
import styled from 'styled-components';
// import { SimpleImg } from 'react-simple-img';

import { MediaQueries } from '@utils/Styles';
import Image from './loading-image.jpg';

const CardProyect = styled.div`
  ${MediaQueries.xs`flex-basis: 100%;`}
  ${MediaQueries.sm`flex-basis: 100%;`}
  ${MediaQueries.md`flex-basis: 50%;`}
  ${MediaQueries.lg`flex-basis: 50%;`}
  ${MediaQueries.xl`flex-basis: 50%;`}
  position: relative;
  overflow: hidden;
`;

const ProjectLoader = () => {
  return (
    <>
      <CardProyect>
        <img src={Image} alt="" />
      </CardProyect>
      <CardProyect>
        <img src={Image} alt="" />
      </CardProyect>
      <CardProyect>
        <img src={Image} alt="" />
      </CardProyect>
      <CardProyect>
        <img src={Image} alt="" />
      </CardProyect>
    </>
  );
};

export default ProjectLoader;
