import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type QrcodeModalState = {
  isModalOpen: boolean
  scienceId: string
}

const initialState: QrcodeModalState = {
  isModalOpen: true,
  scienceId: '302',
}

const qrcodeModalSlice = createSlice({
  name: 'qrcodeModal',
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<QrcodeModalState['scienceId']>,
    ) => {
      state.isModalOpen = true
      state.scienceId = action.payload
    },
    closeModal: (state) => {
      state.isModalOpen = false
    },
  },
})

export const { openModal, closeModal } = qrcodeModalSlice.actions

export default qrcodeModalSlice.reducer
