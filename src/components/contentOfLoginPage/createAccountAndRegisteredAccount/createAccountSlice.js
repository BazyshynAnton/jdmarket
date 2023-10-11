import { createSlice } from '@reduxjs/toolkit'

const initialUser = {
  registration: false,
  onClickFieldEmail: false,
  onClickFieldFirstName: false,
  onClickFieldLastName: false,
  onClickFieldPassword: false,

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
        state.onClickFieldEmail = false
      } else {
        state.onClickFieldEmail = true
      }
    },
    setCreateAccount: (state) => {
      if (state.formData.email === '') {
        state.onClickFieldEmail = true
      }
      if (state.formData.firstName === '') {
        state.onClickFieldFirstName = true
      }
      if (state.formData.lastName === '') {
        state.onClickFieldLastName = true
      }
      if (state.formData.password === '') {
        state.onClickFieldPassword = true
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
  setEmailDirty,
  setOnClickFieldEmail,
  setCreateAccount,
} = userFormRegister.actions

export default userFormRegister.reducer
