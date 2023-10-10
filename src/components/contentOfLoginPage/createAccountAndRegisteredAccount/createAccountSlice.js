import { createSlice } from '@reduxjs/toolkit'

const initialUser = {
  registration: false,

  formData: {
    email: '',
    mister: false,
    missus: false,
    firstName: '',
    lastName: '',
    password: '',
  },
}

const userFormRegister = createSlice({
  name: 'user',
  initialState: initialUser,

  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload
    },
    setRegistration: (state) => {
      if (state.formData.email.includes('@gmail.com')) {
        state.registration = true
      }
    },
    setClearRegistration: (state) => {
      state.registration = false
    },
    setMister: (state) => {
      state.formData.mister = true
      state.formData.missus = false
    },
    setMissus: (state) => {
      state.formData.missus = true
      state.formData.mister = false
    },
    backToLoginPage: () => initialUser,
  },
})

export const {
  setFormData,
  setRegistration,
  setClearRegistration,
  setMister,
  setMissus,
  backToLoginPage,
} = userFormRegister.actions

export default userFormRegister.reducer
