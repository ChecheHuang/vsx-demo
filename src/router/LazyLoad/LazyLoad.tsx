import React, { Suspense } from 'react'
import styled, { keyframes } from 'styled-components'

const loaderAnim = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`

const StyledLoaderBar = styled.div`
  height: 100%;
  background: linear-gradient(to right, #34d399, #60a5fa);
  animation: ${loaderAnim} 2s infinite;
`

const FixedBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px; /* Reduced height for a thinner bar */
  background-color: #cbd5e0; /* Tailwind color gray-400 */
  overflow: hidden; /* Hides the animation when width is 0% */
`

export default function LazyLoad(
  ComponentPromise: Promise<{ default: React.ComponentType<object> }>,
) {
  const LazyComponent = React.lazy(() => ComponentPromise)

  return (
    <Suspense fallback={<Loader />}>
      <LazyComponent />
    </Suspense>
  )
}

function Loader() {
  return (
    <FixedBar>
      <StyledLoaderBar />
    </FixedBar>
  )
}
