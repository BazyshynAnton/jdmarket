import { createSlice } from '@reduxjs/toolkit'

const accountExampleState = {
  activeUser: false,
  inFavorite: false,
  edit: false,
  inputNameAccountControl: false,
  inputSecondNameControl: false,
  inputEmailControl: false,
  inputPasswordControl: false,
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

    setControlValid: (state) => {
      if (state.accountInfo.emailAddress !== 'stroustrup-example@gmail.com') {
        state.inputEmailControl = true
      } else {
        state.inputEmailControl = false
      }
      if (state.accountInfo.password !== 'BjarneStroustrup') {
        state.inputPasswordControl = true
      } else {
        state.inputPasswordControl = false
      }
    },

    setControlEditProfile: (state) => {
      if (state.accountInfo.nameAccount === '') {
        state.inputNameAccountControl = true
      }
      if (state.accountInfo.secondName === '') {
        state.inputSecondNameControl = true
      }
      if (state.accountInfo.emailAddress === '') {
        state.inputEmailControl = true
      }
      if (state.accountInfo.password === '') {
        state.inputPasswordControl = true
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
  setControlValid,
  setControlEditProfile,
} = alreadyRegisteredAccount.actions

export default alreadyRegisteredAccount.reducer
