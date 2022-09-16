import styled from 'styled-components'
<<<<<<< HEAD
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { ButtonMenu, ButtonMenuItem } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { useRouter } from 'next/router'
import Link from 'next/link'

const StyledNav = styled.nav`
  margin-bottom: 40px;
`

const getActiveIndex = (pathname: string): number => {
  if (
    pathname.includes('/pool') ||
    pathname.includes('/create') ||
    pathname.includes('/add') ||
    pathname.includes('/remove') ||
    pathname.includes('/find') ||
    pathname.includes('/liquidity')
  ) {
    return 1
  }
  return 0
}

const Nav = () => {
  const { pathname } = useRouter()
  const { t } = useTranslation()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={getActiveIndex(pathname)} scale="sm" variant="subtle">
        <Link href="/swap" passHref>
          <ButtonMenuItem id="swap-nav-link" as="a">
            {t('Swap')}
          </ButtonMenuItem>
        </Link>
        <Link href="/pool" passHref>
          <ButtonMenuItem id="pool-nav-link" as="a">
            {t('Liquidity')}
          </ButtonMenuItem>
        </Link>
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
