import React from 'react';
import styled from 'styled-components';
import { MediaQueries } from '@utils/Styles';

const Card = styled.div`
  background: #fffa94;
  ${MediaQueries.xs`flex-basis: 100%;`}
  ${MediaQueries.sm`flex-basis: 258px;`}
  ${MediaQueries.md`flex-basis: 360px;`}
  ${MediaQueries.lg`flex-basis: 380px;`}
  ${MediaQueries.xl`flex-basis: 385px;`}
`;
const Body = styled.div`
  ${MediaQueries.xs`padding: 18px;`}
  ${MediaQueries.sm`padding: 19px;`}
  ${MediaQueries.md`padding: 20px;`}
  ${MediaQueries.lg`padding: 23px;`}
`;
const Title = styled.div`
  font-weight: 700;

  ${MediaQueries.xs`font-size: 14px;margin-bottom: 8px;`}
  ${MediaQueries.sm`font-size: 16px;margin-bottom: 8px;`}
  ${MediaQueries.md`font-size: 18px;margin-bottom: 10px;`}
  ${MediaQueries.lg`font-size: 20px;margin-bottom: 10px;`}
  ${MediaQueries.xl`font-size: 20px;margin-bottom: 15px;`}
`;
const Description = styled.div`
  ${MediaQueries.xs`font-size: 14px;`}
  ${MediaQueries.sm`font-size: 16px;`}
  ${MediaQueries.md`font-size: 18px;`}
  ${MediaQueries.lg`font-size: 20px;`}
`;

const ServiceCard = props => {
  const { title, description } = props;
  return (
    <Card>
      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Body>
    </Card>
  );
};

export default ServiceCard;
