import { configureStore } from '@reduxjs/toolkit'
import useFormRegister from '../components/contentOfLoginPage/createAccountAndRegisteredAccount/createAccountAndRegisteredAccountSlice'
export default configureStore({
  reducer: { formRegister: useFormRegister },
})
