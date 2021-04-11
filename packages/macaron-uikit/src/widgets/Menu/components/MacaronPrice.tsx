import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";
import PriceImage from "../../../components/Image/PriceImage";
interface Props {
  macaronPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const MacaronPrice: React.FC<Props> = ({ macaronPriceUsd }) => {
  return macaronPriceUsd ? (
    <PriceLink href="https://bscscan.com/token/0xacb2d47827c9813ae26de80965845d80935afd0b" target="_blank">
      <PriceImage src="/images/macaron.svg" alt="MacaronSwap" height={24} width={24} mr="8px"/>
      <Text color="textSubtle" bold>{`$${macaronPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(MacaronPrice);
