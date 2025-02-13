import React, { useState, useEffect, useRef } from 'react'
import { IoClose } from 'react-icons/io5'
import styled, { keyframes, StyleSheetManager } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const ModalOverlay = styled.div<{ isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${(props) => (props.isClosing ? fadeOut : fadeIn)} 0.3s ease-in-out
    forwards;
`

type ModalContainerProps = {
  width?: string
  height?: string
  background?: string
}

const ModalContainer = styled.div<ModalContainerProps>`
  width: ${(props) => props.width || '500px'};
  height: ${(props) => props.height || 'auto'};
  background: ${(props) => props.background || '#f6f6f6'};
  border-radius: 15px;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const ModalHeader = styled.div`
  padding: 5px 5px 0px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const CloseButton = styled.button`
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  background: none;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`

type ModalProps = {
  isModalOpen: boolean
  onClose: () => void
  children: React.ReactNode | null
  isLoading?: boolean
} & ModalContainerProps

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  onClose,
  children,
  isLoading = false,
  ...rest
}) => {
  const [isClosing, setIsClosing] = useState(false)
  const modalContainerRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       modalContainerRef.current &&
  //       !modalContainerRef.current.contains(event.target as Node)
  //     ) {
  //       handleClose()
  //     }
  //   }

  //   if (isModalOpen) {
  //     document.addEventListener('mousedown', handleClickOutside)
  //   }

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [isModalOpen])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 300)
  }

  if (!isModalOpen && !isClosing) {
    return null
  }

  if (isLoading) return <div>isLoading....</div>

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isClosing'}>
      <ModalOverlay isClosing={isClosing}>
        <ModalContainer
          ref={modalContainerRef}
          onClick={(e) => e.stopPropagation()}
          {...rest}
        >
          <ModalHeader>
            <CloseButton onClick={handleClose}>
              <IoClose />
            </CloseButton>
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
        </ModalContainer>
      </ModalOverlay>
    </StyleSheetManager>
  )
}

export default Modal
