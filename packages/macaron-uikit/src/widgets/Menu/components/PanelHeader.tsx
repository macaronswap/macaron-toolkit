import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import UserBlock from "./../components/UserBlock";
import Flex from "../../../components/Box/Flex";
import { useMatchBreakpoints } from "./../../../hooks";
import Avatar from "./../components/Avatar";
import throttle from "lodash/throttle";
import { PanelProps, PushedProps, NavProps } from "../types";
import Image from "../../../components/Image/Image";

interface Props extends PanelProps, PushedProps, NavProps {
  isMobile: boolean;
}

  const Container = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  height: 185px;
  align-content: center;
  padding: 12px;
`;

const Auth = styled.div`
  display: flex;
  justify-content: center;
`;

  const PanelHeader: React.FC<Props> = ({ 
    account,
    login,
    logout,
    links,
    profile,
    children}) => {
      const { isXl } = useMatchBreakpoints();
      const isMobile = isXl === false;
      const [isPushed, setIsPushed] = useState(!isMobile);
      const [showMenu, setShowMenu] = useState(true);
      const refPrevOffset = useRef(window.pageYOffset);
  
      useEffect(() => {
        const handleScroll = () => {
          const currentOffset = window.pageYOffset;
          const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
          const isTopOfPage = currentOffset === 0;
          // Always show the menu when user reach the top
          if (isTopOfPage) {
            setShowMenu(true);
          }
          // Avoid triggering anything at the bottom because of layout shift
          else if (!isBottomOfPage) {
            if (currentOffset < refPrevOffset.current) {
              // Has scroll up
              setShowMenu(true);
            } else {
              // Has scroll down
              setShowMenu(false);
            }
          }
          refPrevOffset.current = currentOffset;
        };
        const throttledHandleScroll = throttle(handleScroll, 200);
    
        window.addEventListener("scroll", throttledHandleScroll);
        return () => {
          window.removeEventListener("scroll", throttledHandleScroll);
        };
      }, []);
    
  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Container>
      {/* 
      <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          href={homeLink?.href ?? "/"}
        />
        */ }
        <Image src="/images/macaron-with-text.svg" alt="MacaronSwap" height={50} width={300}/>
        <Auth>
          <Flex>
            <UserBlock account={account} login={login} logout={logout} />
            {profile && <Avatar profile={profile} />}
          </Flex>
        </Auth>
    </Container>
  );
};

export default PanelHeader;
