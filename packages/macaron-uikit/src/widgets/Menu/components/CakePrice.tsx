import React from "react";
import styled from "styled-components";
import { MacaronRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

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
    <PriceLink href="https://macaronswap.info/token/0xacb2d47827c9813ae26de80965845d80935afd0b" target="_blank">
      <MacaronRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${macaronPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(MacaronPrice);
