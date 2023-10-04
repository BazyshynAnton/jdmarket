import { configureStore } from '@reduxjs/toolkit'
import useFormRegister from '../components/contentOfLoginPage/createAccountAndRegisteredAccount/createAccountSlice'
import alreadyRegisteredAccount from '../components/contentOfLoginPage/createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'

export default configureStore({
  reducer: {
    formRegister: useFormRegister,
    registeredAccount: alreadyRegisteredAccount,
  },
})
