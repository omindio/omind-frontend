import React from 'react';
import styled from 'styled-components';
import { MediaQueries } from '@utils/Styles';

const Card = styled.div`
  height: auto;
  box-shadow: 0 1px 15px rgba(0,0,0,.03), 0 1px 6px rgba(0,0,0,.03);
  background: #fffa94;
  border-radius: 8px;
  ${MediaQueries.xs`flex-basis: 100%;`}
  ${MediaQueries.sm`flex-basis: 170px;`}
  ${MediaQueries.md`flex-basis: 190px;`}
  ${MediaQueries.lg`flex-basis: 220px;`}
`;
const Body = styled.div`
  text-align: left;
  ${MediaQueries.xs`padding: 10px 18px;`}
  ${MediaQueries.sm`padding: 11px 19px;`}
  ${MediaQueries.md`padding: 12px 20px;`}
  ${MediaQueries.lg`padding: 15px 23px;`}
`;
const Name = styled.div`
  font-weight: 400;
  ${MediaQueries.xs`font-size: 14px;`}
  ${MediaQueries.sm`font-size: 16px;`}
  ${MediaQueries.md`font-size: 18px;`}
  ${MediaQueries.lg`font-size: 20px;`}
`;

const ValueCard = props => {
  const { name } = props;
  return (
    <Card>
      <Body>
        <Name>{name}</Name>
      </Body>
    </Card>
  );
};

export default ValueCard;
