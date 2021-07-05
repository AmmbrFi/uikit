import {
  MENU_HEIGHT,
  SIDEBAR_WIDTH_FULL,
  SIDEBAR_WIDTH_REDUCED
} from './config'
import React, { useEffect, useRef, useState } from 'react'

import Avatar from './components/Avatar'
import Flex from '../../components/Box/Flex'
import Logo from './components/Logo'
import { NavProps } from './types'
import Overlay from '../../components/Overlay/Overlay'
import Panel from './components/Panel'
import UserBlock from './components/UserBlock'
import styled from 'styled-components'
import throttle from 'lodash/throttle'
import { useMatchBreakpoints } from '../../hooks'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 1px #374151;
  z-index: 20;
  transform: translate3d(0, 0, 0);
`

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`

const Link = styled.a`
  display: inline-flex;
  margin-right: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 1.2rem;
  &:hover {
    color: #e64e2e;
  }
`

const Price = styled.p`
  cursor: pointer;
  color: #fff;
  font-size: 1.3rem;
  margin-top: 8px;
`

const MiddleMenuWrapper = styled.div`
  display: flex;
  flex-flow: center;
  align-items: center;
  flex-direction: row;
`

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) =>
      `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) =>
      `calc(100% - ${
        isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED
      }px)`};
  }
`

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  profile,
  children
}) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = isXl === false
  const [isPushed, setIsPushed] = useState(!isMobile)
  const [showMenu, setShowMenu] = useState(true)
  const refPrevOffset = useRef(window.pageYOffset)

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset
      const isBottomOfPage =
        window.document.body.clientHeight === currentOffset + window.innerHeight
      const isTopOfPage = currentOffset === 0
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true)
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true)
        } else {
          // Has scroll down
          setShowMenu(false)
        }
      }
      refPrevOffset.current = currentOffset
    }
    const throttledHandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledHandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])

  // Find the home link if provided
  const homeLink = links.find(link => link.label === 'Home')

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Flex>
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={homeLink?.href ?? '/'}
          />
          <Price>{cakePriceUsd ? `$${cakePriceUsd.toFixed(5)}` : ''}</Price>
        </Flex>
        <Flex>
          <MiddleMenuWrapper>
            <Link href="https://qmm.ammbr.finance">Farming</Link>
            <Link href="https://swap-beta.ammbr.finance">Swap</Link>
            <Link href="https://trade.ammbr.finance">Trade</Link>
            <Link href="https://nft.ammbr.finance">NFTs</Link>
          </MiddleMenuWrapper>
        </Flex>
        <Flex>
          <UserBlock account={account} login={login} logout={logout} />
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay
          show={isPushed}
          onClick={() => setIsPushed(false)}
          role="presentation"
        />
      </BodyWrapper>
    </Wrapper>
  )
}

export default Menu
