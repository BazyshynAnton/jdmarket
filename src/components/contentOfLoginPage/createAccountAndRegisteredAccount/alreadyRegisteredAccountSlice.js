import { createSlice } from '@reduxjs/toolkit'

const accountExampleState = {
  activeUser: false,
  inFavorite: false,
  favoriteCar: {
    id: '',
  },
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
    setActiveUserSignIn: (state) => {
      state.activeUser = true
    },
    setActiveUserLogout: (state) => {
      state.activeUser = false
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
  },
})

export const {
  setDefaultData,
  setActiveUserSignIn,
  setActiveUserLogout,
  setInFavorite,
  setFavoriteCar,
  setRemoveFavoriteCar,
} = alreadyRegisteredAccount.actions

export default alreadyRegisteredAccount.reducer
