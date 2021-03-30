import styled from "styled-components";
import Button from "./Button";
import { BaseButtonProps, PolymorphicComponent } from "./types";

const IconButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  padding: 0;
  width: ${({ scale }) => (scale === "sm" ? "24px" : "32px")};
  height: ${({ scale }) => (scale === "sm" ? "24px" : "32px")};
`;

export default IconButton;
