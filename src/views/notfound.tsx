import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import notfound from '@/assets/lottie/notfound.json'

const NotFoundContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #a78bfa, #9333ea);
`

const StyledLink = styled(Link)`
  border-radius: 0.375rem;
  background-color: #4c2885;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: white;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(76, 40, 133, 0.8);
  }
`

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <Lottie animationData={notfound} />
      <StyledLink to="/">Go Back</StyledLink>
    </NotFoundContainer>
  )
}

export default NotFoundPage
