import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import MacaronPrice from "./MacaronPrice";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";
import MenuButton from "./MenuButton";
import { HamburgerCloseIcon, HamburgerIcon } from "../icons";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  isDark,
  macaronPriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  /*
  if (!isPushed) {
    return (
      <Container>
        <MenuButton aria-label="Toggle menu" onClick={() => pushNav(true)} mr="24px">
          {isPushed ? (
            <HamburgerCloseIcon width="24px" color="textSubtle" />
          ) : (
            <HamburgerIcon width="24px" color="textSubtle" />
          )}
        </MenuButton>
      </Container>
    );
  }
  */

  return (
    <Container>
      <FooterTop>
        <MacaronPrice macaronPriceUsd={macaronPriceUsd} />
        {/**<LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />  */}
        <SocialEntry>
          <SocialLinks />
        </SocialEntry>
      </FooterTop>
    </Container>
  );
};

export default PanelFooter;
