import { createSlice } from '@reduxjs/toolkit'

const accountExampleState = {
  activeUser: false,
  inFavorite: false,
  edit: false,

  favoriteCar: {
    id: '',
  },
  accountInfo: {
    nameAccount: 'Bjarne',
    secondName: 'Stroustrup',
    emailAddress: 'stroustrup-example@gmail.com',
    password: 'BjarneStroustrup',
    misterAccount: false,
    missusAccount: false,
  },
}

const alreadyRegisteredAccount = createSlice({
  name: 'registered-user',
  initialState: accountExampleState,
  reducers: {
    setDefaultData: (state, action) => {
      state.accountInfo = action.payload
    },
    setMisterAccount: (state) => {
      state.accountInfo.misterAccount = true
      state.accountInfo.missusAccount = false
    },
    setMissusAccount: (state) => {
      state.accountInfo.missusAccount = true
      state.accountInfo.misterAccount = false
    },
    setActiveUserSignIn: (state) => {
      state.activeUser = true
    },
    setActiveUserLogout: (state) => {
      state.activeUser = false
      state.edit = false
    },
    setInFavorite: (state, action) => {
      state.inFavorite = action.payload
    },
    setFavoriteCar: (state, action) => {
      state.favoriteCar.id += action.payload
    },
    setRemoveFavoriteCar: (state, action) => {
      state.favoriteCar.id = action.payload
    },
    setEdit: (state) => {
      state.edit = true
    },
    setConfirm: (state) => {
      state.edit = false
    },
  },
})

export const {
  setDefaultData,
  setActiveUserSignIn,
  setActiveUserLogout,
  setInFavorite,
  setFavoriteCar,
  setRemoveFavoriteCar,
  setEdit,
  setMisterAccount,
  setMissusAccount,
  setConfirm,
} = alreadyRegisteredAccount.actions

export default alreadyRegisteredAccount.reducer
