import { createSlice } from '@reduxjs/toolkit'

const accountExampleState = {
  activeUser: false,
  inFavorite: false,
  edit: false,
  inputNameAccountControll: false,
  inputSecondNameControll: false,
  inputEmailControll: false,
  inputPasswordControll: false,
  favoriteCar: {
    id: '',
  },
  accountInfo: {
    nameAccount: 'Bjarne',
    secondName: 'Stroustrup',
    emailAddress: 'stroustrup-example@gmail.com',
    password: 'BjarneStroustrup',
    misterAccount: true,
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
    setEditFalse: (state) => {
      state.edit = false
    },
    setConfirm: (state) => {
      state.edit = false
    },

    setControllValid: (state) => {
      if (state.accountInfo.emailAddress !== 'stroustrup-example@gmail.com') {
        state.inputEmailControll = true
      }
      if (state.accountInfo.password !== 'BjarneStroustrup') {
        state.inputPasswordControll = true
      }
    },

    setControllEditProfile: (state) => {
      if (state.accountInfo.nameAccount === '') {
        state.inputNameAccountControll = true
      }
      if (state.accountInfo.secondName === '') {
        state.inputSecondNameControll = true
      }
      if (state.accountInfo.emailAddress === '') {
        state.inputEmailControll = true
      }
      if (state.accountInfo.password === '') {
        state.inputPasswordControll = true
      }
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
  setEditFalse,
  setMisterAccount,
  setMissusAccount,
  setConfirm,
  setControllValid,
  setControllEditProfile,
} = alreadyRegisteredAccount.actions

export default alreadyRegisteredAccount.reducer
