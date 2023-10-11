import { Box } from '@mui/material'
import styles from '../ContentOfLoginPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFormData, setRegistration } from './createAccountSlice'
import {
  setDefaultData,
  setActiveUserSignIn,
  setControllValid,
} from './alreadyRegisteredAccountSlice'
import RegistrationForm from '../registrationForm/RegistrationForm'
import { NavLink } from 'react-router-dom'

const stylesForRegistrationForm = {
  stylesForIputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const CreateAccountAndRegisteredAccount = () => {
  //formRegister
  const { formData, registration, onClickFieldEmail } = useSelector(
    (store) => store.formRegister
  )

  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault()

    dispatch(setValid())
  }

  const handleFormControll = (event) => {
    const { name, value } = event.target
    dispatch(setFormData({ ...formData, [name]: value }))
  }

  const handleRegistration = () => {
    if (formData.email === false) {
      useDispatch(onClickFieldEmail())
    }

    dispatch(setRegistration())
  }

  //already registered account
  const { accountInfo, inputEmailControll, inputPasswordControll } =
    useSelector((store) => store.registeredAccount)

  const handleAlreadyRegisteredInputChange = (event) => {
    const { name, value } = event.target

    dispatch(setDefaultData({ ...accountInfo, [name]: value }))
  }

  const handleInputSubmit = () => {
    dispatch(setControllValid())
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
                {onClickFieldEmail ? (
                  <label htmlFor="email" style={{ color: 'red' }}>
                    invalid value.
                  </label>
                ) : (
                  <label htmlFor="email">Email address</label>
                )}
                <input
                  type="email"
                  name="email"
                  id="email1"
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
                <input
                  name="emailAddress"
                  id="email2"
                  autoComplete="email"
                  value={accountInfo.emailAddress}
                  onChange={handleAlreadyRegisteredInputChange}
                />
              </Box>
              <Box sx={stylesForRegistrationForm.stylesForIputContainer}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={accountInfo.password}
                  onChange={handleAlreadyRegisteredInputChange}
                />
              </Box>
              <p className={styles.forgotPassword}>Forgot your password?</p>
              {accountInfo.emailAddress.includes(
                'stroustrup-example@gmail.com'
              ) && accountInfo.password.includes('BjarneStroustrup') ? (
                <NavLink
                  to="/user"
                  style={{ width: '60px' }}
                  onClick={() => {
                    dispatch(setActiveUserSignIn())
                  }}
                >
                  <button type="button">sign in</button>
                </NavLink>
              ) : (
                <>
                  {inputEmailControll || inputPasswordControll ? (
                    <p style={{ color: 'red' }}>wrong email or password.</p>
                  ) : (
                    ''
                  )}
                  <button type="button" onClick={handleInputSubmit}>
                    sign in
                  </button>
                </>
              )}
            </form>
          </Box>
        </>
      )}

      {!!registration && <RegistrationForm />}
    </Box>
  )
}

export default CreateAccountAndRegisteredAccount
