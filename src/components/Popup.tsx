import { useState } from 'react'
import { IoMdMore } from 'react-icons/io'
import styled from 'styled-components'

const MoreIcon = styled(IoMdMore)`
  cursor: pointer;
  font-size: 1.5em;
  position: relative;
`

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 120px;
`

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`

type PopupProps = {
  children?: React.ReactNode
}

const Popup: React.FC<PopupProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <MoreIcon />
      {isOpen && children}
    </div>
  )
}

export default Popup
