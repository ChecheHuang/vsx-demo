import { QRCodeSVG } from 'qrcode.react'
import { IoChevronBack } from 'react-icons/io5'
import styled from 'styled-components'

import Modal from '@/components/Modal'
import CopyButton from '@/components/buttons/CopyButton'
import { Title } from '@/components/common'
import { useDispatch, useSelector } from '@/store'
import { closeModal } from '@/store/modules/qrcodeModalSlice'

const StyledQrCodeContainer = styled.div`
  width: 100%;
  padding: 0 clamp(39px, 3.9vw, 100px) clamp(16px, 1.6vw, 40px)
    clamp(39px, 3.9vw, 100px);
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.2vw, 30px);
  color: #212529;
`

const StyledBackButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: calc(clamp(-2.3px, -0.23vw, -5px)); // 修正負數 clamp 用法
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const StyledBackButtonText = styled.span`
  margin-left: clamp(4px, 0.4vw, 10px);
`

const StyledInfoContainer = styled.div`
  display: flex;
  gap: clamp(15.6px, 1.56vw, 40px);
`

const StyledInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(7.8px, 0.78vw, 20px);
`

const StyledVersionText = styled.div`
  text-align: center;
`
type QrcodeModelProviderProps = {
  children: React.ReactNode
}
const QrcodeModelProvider = ({ children }: QrcodeModelProviderProps) => {
  const dispatch = useDispatch()
  const { isModalOpen, scienceId } = useSelector((state) => state.qrcodeModal)

  const closeQrcodeModal = () => {
    dispatch(closeModal())
  }

  return (
    <>
      {children}
      <Modal
        width="clamp(300px, 30vw, 800px)"
        isModalOpen={isModalOpen}
        onClose={closeQrcodeModal}
      >
        <StyledQrCodeContainer>
          <StyledBackButtonContainer
            onClick={() => alert('Back to Class List')}
          >
            <IoChevronBack />
            <StyledBackButtonText>Back to Class List</StyledBackButtonText>
          </StyledBackButtonContainer>
          <Title>Join {scienceId} Science</Title>
          <StyledInfoContainer>
            <StyledInfoItem>
              ID: X58E964
              <CopyButton copyText="X58E964" />
            </StyledInfoItem>
            <StyledInfoItem>
              Link
              <CopyButton copyText="https://www.classswift.viewsonic.io" />
            </StyledInfoItem>
          </StyledInfoContainer>
          <QRCodeSVG
            width={'100%'}
            height={'100%'}
            value="https://www.classswift.viewsonic.io"
            marginSize={2}
          />
          <StyledVersionText>Version 1.1.7</StyledVersionText>
        </StyledQrCodeContainer>
      </Modal>
    </>
  )
}

export default QrcodeModelProvider
