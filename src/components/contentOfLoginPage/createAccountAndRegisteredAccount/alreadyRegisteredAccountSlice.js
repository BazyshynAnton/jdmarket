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
  accountInfoChange: {
    nameAccountChange: 'Bjarne',
    secondNameChange: 'Stroustrup',
    emailAddressChange: 'stroustrup-example@gmail.com',
    passwordChange: 'BjarneStroustrup',
    misterAccountChange: true,
    missusAccountChange: false,
  },
}

const alreadyRegisteredAccount = createSlice({
  name: 'registered-user',
  initialState: accountExampleState,
  reducers: {
    setDefaultData: (state, action) => {
      state.accountInfo = action.payload
    },
    setDefaultDataChange: (state, action) => {
      state.accountInfoChange = action.payload
    },
    setMisterAccount: (state) => {
      state.accountInfoChange.misterAccountChange = true
      state.accountInfoChange.missusAccountChange = false
    },
    setMissusAccount: (state) => {
      state.accountInfoChange.missusAccountChange = true
      state.accountInfoChange.misterAccountChange = false
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
    setEdit: (state, action) => {
      state.edit = action.payload
    },

    setControlValid: (state) => {
      if (
        state.accountInfo.emailAddress !==
        state.accountInfoChange.emailAddressChange
      ) {
        state.inputEmailControl = true
      } else {
        state.inputEmailControl = false
      }
      if (
        state.accountInfo.password !== state.accountInfoChange.passwordChange
      ) {
        state.inputPasswordControl = true
      } else {
        state.inputPasswordControl = false
      }
    },

    setControlEditProfile: (state) => {
      if (state.accountInfoChange.nameAccountChange === '') {
        state.inputNameAccountControl = true
      } else {
        state.inputNameAccountControl = false
      }
      if (state.accountInfoChange.secondNameChange === '') {
        state.inputSecondNameControl = true
      } else {
        state.inputSecondNameControl = false
      }
      if (state.accountInfoChange.emailAddressChange === '') {
        state.inputEmailControl = true
      } else {
        state.inputEmailControl = false
      }
      if (state.accountInfoChange.passwordChange === '') {
        state.inputPasswordControl = true
      } else {
        state.inputPasswordControl = false
      }
    },

    setApplyChanges: (state) => {
      state.accountInfo.nameAccount = state.accountInfoChange.nameAccountChange
      state.accountInfo.secondName = state.accountInfoChange.secondNameChange
      state.accountInfo.emailAddress =
        state.accountInfoChange.emailAddressChange
      state.accountInfo.password = state.accountInfoChange.passwordChange
      state.accountInfo.misterAccount =
        state.accountInfoChange.misterAccountChange
      state.accountInfo.missusAccount =
        state.accountInfoChange.missusAccountChange
    },
  },
})

export const {
  setDefaultData,
  setDefaultDataChange,
  setActiveUserSignIn,
  setActiveUserLogout,
  setInFavorite,
  setFavoriteCar,
  setRemoveFavoriteCar,
  setEdit,
  setMisterAccount,
  setMissusAccount,
  setControlValid,
  setControlEditProfile,
  setApplyChanges,
} = alreadyRegisteredAccount.actions

export default alreadyRegisteredAccount.reducer
