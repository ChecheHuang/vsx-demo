import { memo } from 'react'
import styled, { StyleSheetManager } from 'styled-components'

import { Student } from '@/mock/mock'

const Guest = styled.div<{ isGuest: boolean }>``

const StyledCard = styled(Guest)`
  width: 100px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  flex: 0 0 auto;
  cursor: ${(props) => (props.isGuest ? 'not-allowed' : 'pointer')};
`

const StyledIdContainer = styled(Guest)`
  background-color: ${(props) =>
    props.isGuest ? props.theme.disabled : props.theme.primary};
  color: white;
  text-align: center;
  padding: 5px 0;
  font-size: 16px;
`

const StyledNameContainer = styled(Guest)`
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => (props.isGuest ? props.theme.disabled : 'inherit')};
`

const StyledScoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`

const StyledScoreButton = styled.button<{ isGuest: boolean }>`
  background-color: ${(props) =>
    props.isGuest ? props.theme.disabled : props.color};
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`

const StyledScoreValue = styled(Guest)`
  font-size: 14px;
  color: ${(props) => (props.isGuest ? props.theme.disabled : '#333')};
  font-weight: bold;
`

const StudentCard = ({
  id,
  name,
  score,
  isGuest,
  handlePlusClick,
  handleMinusClick,
}: Student & {
  handlePlusClick: () => void
  handleMinusClick: () => void
}) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isGuest'}>
      <StyledCard isGuest={isGuest}>
        <StyledIdContainer isGuest={isGuest}>{id}</StyledIdContainer>
        <StyledNameContainer isGuest={isGuest}>{name}</StyledNameContainer>
        <StyledScoreContainer>
          <StyledScoreButton
            color="#e74c3c"
            isGuest={isGuest || score <= 0}
            onClick={handleMinusClick}
          >
            -1
          </StyledScoreButton>
          <StyledScoreValue isGuest={isGuest}>{score}</StyledScoreValue>
          <StyledScoreButton
            color="#2ecc71"
            isGuest={isGuest || score >= 10}
            onClick={handlePlusClick}
          >
            +1
          </StyledScoreButton>
        </StyledScoreContainer>
      </StyledCard>
    </StyleSheetManager>
  )
}

export default memo(StudentCard)
