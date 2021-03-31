import styled from "styled-components";
import { OverlayProps } from "./types";

const Overlay = styled.div.attrs({ role: "presentation" })<OverlayProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;s
  background: rgba( 0, 0, 0, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 7.0px );
  -webkit-backdrop-filter: blur( 7.0px );
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: ${({ show }) => (show ? "initial" : "none")};
  transition: opacity 0.6s;
`;

Overlay.defaultProps = {
  show: false,
  zIndex: 10,
};

export default Overlay;
