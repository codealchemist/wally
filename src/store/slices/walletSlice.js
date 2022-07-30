import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

function log () {
  console.log('[ walletReducer ]', ...arguments)
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {},
  reducers: {
    saveWallet: (state, action) => {
      log({ action })
      return action.payload
    }
  }
})

export const { saveWallet } = walletSlice.actions
export default walletSlice.reducer
export const selectWallet = state => state.wallet
