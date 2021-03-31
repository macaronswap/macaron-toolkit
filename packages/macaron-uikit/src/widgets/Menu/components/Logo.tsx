import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;
const Logo: React.FC<Props> = ({ isPushed, togglePush,  href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoWithText className="desktop-icon" />
    </>
  );

  return (
    <Container>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Macaron home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Macaron home page">
          {innerLogo}
        </StyledLink>
      )}
    </Container>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed);
