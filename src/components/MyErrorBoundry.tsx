import Lottie from 'lottie-react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import styled from 'styled-components'

import errorLottie from '@/assets/lottie/error.json'

import { BaseButton } from './common'

// Styled Components
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`

const ErrorMessage = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  overflow-auto;
  color: red;
`

const StyledLottie = styled(Lottie)`
  height: 80vh;
  cursor: pointer; /* Indicate it's clickable */
`

function MyErrorBoundary({ children }: { children: React.ReactNode }) {
  function fallbackRender({ error, resetErrorBoundary: fn }: FallbackProps) {
    const resetErrorBoundary = () => {
      fn()
      window.location.reload()
    }

    return (
      <ErrorContainer role="alert">
        <p>Something went wrong:</p>
        <ErrorMessage>{error.message}</ErrorMessage>
        <BaseButton onClick={resetErrorBoundary}>重新載入</BaseButton>
        <StyledLottie
          animationData={errorLottie}
          onClick={resetErrorBoundary}
        />
      </ErrorContainer>
    )
  }

  return (
    <ErrorBoundary
      fallbackRender={fallbackRender}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  )
}

export default MyErrorBoundary
