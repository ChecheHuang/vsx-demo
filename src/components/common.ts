import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styled from 'styled-components'

type BaseButtonProps = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  width?: string | number
  height?: string | number
  padding?: string
}

export const BaseButton = styled.button<BaseButtonProps>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || '0.2em'};
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2em;

  &:hover {
    opacity: 0.8;
  }
`

export const Title = styled.div`
  font-size: clamp(18.75px, 1.875vw, 48px);
  font-weight: bold;
`

type Container = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  width?: string | number
  height?: string | number
  gap?: string
}
export const ScrollableContainer = styled.div<Container>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c2c7ca;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color:;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`

export const CenterContainer = styled.div<Container>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  gap: ${(props) => props.gap || 'auto'};
`
