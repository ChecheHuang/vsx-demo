import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Header from './_components/Header'

const DemoContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`
const Layout = () => {
  return (
    <DemoContainer>
      <Header />
      <Outlet />
    </DemoContainer>
  )
}

export default Layout
