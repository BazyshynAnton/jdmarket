import { createSlice } from '@reduxjs/toolkit'

const accountExampleState = {
  accountInfo: {
    nameAccount: 'Bjarne',
    secondName: 'Stroustrup',
    emailAddress: 'stroustrup-example@gmail.com',
    password: 'BjarneStroustrup',
  },
}

const alreadyRegisteredAccount = createSlice({
  name: 'registered-user',
  initialState: accountExampleState,
  reducers: {
    setDefaultData: (state, action) => {
      state.accountInfo = action.payload
    },
  },
})

export const { setDefaultData, setValid } = alreadyRegisteredAccount.actions

export default alreadyRegisteredAccount.reducer
