import { configureStore } from '@reduxjs/toolkit'
import useFormRegister from '../components/contentOfLoginPage/createAccountAndRegisteredAccount/createAccountSlice'
import alreadyRegisteredAccount from '../components/contentOfLoginPage/createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'
import headerSlice from '../components/header/headerSlice'

export default configureStore({
  reducer: {
    formRegister: useFormRegister,
    registeredAccount: alreadyRegisteredAccount,
    headerSlice,
  },
})
