import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";
import Image from "../Image/Image"

const Icon: React.FC<SvgProps> = (props) => {
  return <Image src="/images/macaron.svg" alt="MacaronSwap" height={128} width={128} mr="8px"/>;
};

export default Icon;
