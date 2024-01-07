import {
  useDispatch,
  useSelector,
  NavLink,
} from '../../shared/utils/reactImports'
import { setFormData, setRegistration } from './createAccountSlice'
import {
  setDefaultData,
  setActiveUserSignIn,
  setControlValid,
} from './alreadyRegisteredAccountSlice'

import RegistrationForm from '../registrationForm/RegistrationForm'

import styles from '../ContentOfLoginPage.module.scss'

const stylesForRegistrationForm = {
  stylesForInputContainer: {
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

    dispatch(setControlValid())
  }

  const handleFormControl = (event) => {
    const { name, value } = event.target
    dispatch(setFormData({ ...formData, [name]: value }))
  }

  const handleRegistration = () => {
    if (formData.email === false) {
      dispatch(onClickFieldEmail())
    }

    dispatch(setRegistration())
  }

  //already registered account
  const { accountInfo, inputEmailControl, inputPasswordControl } = useSelector(
    (store) => store.registeredAccount
  )

  const handleAlreadyRegisteredInputChange = (event) => {
    const { name, value } = event.target
    dispatch(setDefaultData({ ...accountInfo, [name]: value }))
  }

  const handleInputSubmit = () => {
    dispatch(setControlValid())
  }

  return (
    <div className={styles.createAndRegisteredContainer}>
      {!registration && (
        <>
          <div className={styles.createAccountContainer}>
            <h4>CREATE AN ACCOUNT</h4>
            <form
              onSubmit={handleFormSubmit}
              className={styles.formContainerCreateAnAccount}
            >
              <p>Please enter your email address to create an account.</p>
              <div style={stylesForRegistrationForm.stylesForInputContainer}>
                {onClickFieldEmail ? (
                  <label htmlFor="email" style={{ color: '#b90000' }}>
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
                  onChange={handleFormControl}
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  handleRegistration()
                }}
              >
                create an account
              </button>
            </form>
          </div>
          <div className={styles.registeredContainer}>
            <h4>ALREADY REGISTERED?</h4>
            <form onSubmit={handleFormSubmit} className={styles.formRegistered}>
              <div style={stylesForRegistrationForm.stylesForInputContainer}>
                <label htmlFor="email">Email address</label>
                <input
                  name="emailAddress"
                  id="email2"
                  autoComplete="email"
                  value={accountInfo.emailAddress}
                  onChange={handleAlreadyRegisteredInputChange}
                />
              </div>
              <div style={stylesForRegistrationForm.stylesForInputContainer}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={accountInfo.password}
                  onChange={handleAlreadyRegisteredInputChange}
                />
              </div>
              <p className={styles.forgotPassword}>Forgot your password?</p>
              {(inputEmailControl || inputPasswordControl) && (
                <p style={{ color: '#b90000' }}>wrong email or password.</p>
              )}
              {accountInfo.emailAddress.includes(
                'stroustrup-example@gmail.com'
              ) && accountInfo.password.includes('BjarneStroustrup') ? (
                <NavLink
                  to="/user"
                  style={{ width: '60px' }}
                  onClick={() => {
                    dispatch(setActiveUserSignIn())
                    dispatch(setControlValid())
                  }}
                >
                  <button type="button">sign in</button>
                </NavLink>
              ) : (
                <>
                  <button type="button" onClick={handleInputSubmit}>
                    sign in
                  </button>
                </>
              )}
            </form>
          </div>
        </>
      )}

      {!!registration && <RegistrationForm />}
    </div>
  )
}

export default CreateAccountAndRegisteredAccount
