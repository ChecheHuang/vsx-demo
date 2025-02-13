import { CiLight, CiDark } from 'react-icons/ci'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import logo from '@/assets/logoipsum-346.svg'
import { BaseButton } from '@/components/common'
import { mediaQuery } from '@/lib/utils'
import { useDispatch, useSelector } from '@/store'
import { openModal } from '@/store/modules/qrcodeModalSlice'
import { toggleTheme } from '@/store/modules/themeSlice'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`

const LogoImage = styled.img`
  height: 40px;
  margin-right: 12px;
`

const LogoText = styled.h1`
  font-size: 24px;
  color: #333333;
  ${mediaQuery()}
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`

const NavLink = styled.a`
  font-size: 16px;
  color: ${(props) => props.theme.secondary};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.primary};
  }

  ${mediaQuery()}
`

const Header = () => {
  const { scienceId = '302' } = useParams()

  const dispatch = useDispatch()
  const { themeName } = useSelector((state) => state.theme)

  const openQrCodeModal = () => {
    dispatch(openModal(scienceId))
  }

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <StyledHeader>
      <Logo>
        <LogoImage src={logo} alt="Logo" />
        <LogoText>Lorem</LogoText>
      </Logo>
      <Nav>
        <NavLink>功能介紹</NavLink>
        <NavLink>價格方案</NavLink>
        <NavLink>聯絡我們</NavLink>
        <BaseButton onClick={openQrCodeModal}>QrCode</BaseButton>
        <BaseButton onClick={handleToggleTheme}>
          {themeName === 'light' ? <CiDark /> : <CiLight />}
        </BaseButton>
      </Nav>
    </StyledHeader>
  )
}

export default Header
