import { Box } from '@mui/material'
import styles from '../ContentOfLoginPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFormData,
  setRegistration,
} from './createAccountAndRegisteredAccountSlice'
import RegistrationForm from '../registrationForm/RegistrationForm'

const stylesForRegistrationForm = {
  stylesForIputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const CreateAccountAndRegisteredAccount = () => {
  const { formData, registration } = useSelector((store) => store.formRegister)

  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  const handleFormControll = (event) => {
    const { name, value } = event.target
    dispatch(setFormData({ ...formData, [name]: value }))
  }

  const handleRegistration = () => {
    dispatch(setRegistration())
  }

  return (
    <Box className={styles.createAndRegisteredContainer}>
      {!registration && (
        <>
          <Box className={styles.createAccountContainer}>
            <h4>CREATE AN ACCOUNT</h4>
            <form
              onSubmit={handleFormSubmit}
              className={styles.formContainerCreateAnAccount}
            >
              <p>Please enter your email address to create an account.</p>
              <Box sx={stylesForRegistrationForm.stylesForIputContainer}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleFormControll}
                />
              </Box>
              <button
                type="button"
                onClick={() => {
                  handleRegistration()
                }}
              >
                create an account
              </button>
            </form>
          </Box>
          <Box className={styles.registeredContainer}>
            <h4>ALREADY REGISTERED?</h4>
            <form onSubmit={handleFormSubmit} className={styles.formRegistered}>
              <Box sx={stylesForRegistrationForm.stylesForIputContainer}>
                <label htmlFor="email">Email address</label>
                <input name="email" id="email2" autoComplete="email" />
              </Box>
              <Box sx={stylesForRegistrationForm.stylesForIputContainer}>
                <label htmlFor="password">Password</label>
                <input name="password" id="password" />
              </Box>
              <p className={styles.forgotPassword}>Forgot your password?</p>
              <button type="button">sign in</button>
            </form>
          </Box>
        </>
      )}

      {!!registration && <RegistrationForm />}
    </Box>
  )
}

export default CreateAccountAndRegisteredAccount
