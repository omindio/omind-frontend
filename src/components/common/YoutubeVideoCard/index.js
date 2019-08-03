import React from 'react';
import styled from 'styled-components';

import { MediaQueries } from '@utils/Styles';

const CardProyect = styled.div`
  ${MediaQueries.xs`flex-basis: 100%;`}
  ${MediaQueries.sm`flex-basis: 100%;`}
  ${MediaQueries.md`flex-basis: 50%;`}
  ${MediaQueries.lg`flex-basis: 50%;`}
  ${MediaQueries.xl`flex-basis: 50%;`}
  position: relative;
  overflow: hidden;
  iframe {
    width: 100%;
    ${MediaQueries.xs`height: 350px;`}
    ${MediaQueries.sm`height: 460px;`}
    ${MediaQueries.sm`height: 400px;`}
    ${MediaQueries.lg`height: 100%;`}

  }
`;

const YoutubeVideoCard = ({ url, title }) => {
  return (
    <CardProyect>
      <iframe
        title={title}
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </CardProyect>
  );
};

export default YoutubeVideoCard;
