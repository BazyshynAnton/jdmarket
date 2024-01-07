import { useDispatch, useSelector } from '../../shared/utils/reactImports'
import {
  setFormData,
  setMister,
  setMissus,
  setCreateAccount,
} from '../createAccountAndRegisteredAccount/createAccountSlice'

import styles from '../ContentOfLoginPage.module.scss'

const stylesForRegistrationForm = {
  stylesForRadioInput: {
    width: '15px',
    cursor: 'pointer',
  },
  stylesForCheckBoxInput: { width: '15px', cursor: 'pointer' },

  stylesForSubmitBtn: {
    width: '60px',
  },
  stylesForInputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const RegistrationForm = () => {
  const {
    formData,
    onClickFieldEmail,
    onClickFieldFirstName,
    onClickFieldLastName,
    onClickFieldPassword,
  } = useSelector((store) => store.formRegister)

  const dispatch = useDispatch()

  const handleFormControl = (e) => {
    e.preventDefault()
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target

    dispatch(setFormData({ ...formData, [name]: value }))
  }

  const handleRadioMisterChange = () => {
    dispatch(setMister())
  }
  const handleRadioMissusChange = () => {
    dispatch(setMissus())
  }

  const handleInputSubmit = () => {
    dispatch(setCreateAccount())
  }

  return (
    <div className={styles.registrationFormContainer}>
      <h4>YOUR PERSONAL INFORMATION</h4>

      <form
        onSubmit={handleFormControl}
        className={styles.formRegistrationContent}
      >
        <p>Title</p>
        <div className={styles.forRadioAndCheckboxContainer}>
          <input
            style={stylesForRegistrationForm.stylesForRadioInput}
            type="radio"
            name="mister"
            id="mister"
            value={formData.mister}
            onChange={handleRadioMisterChange}
            checked={formData.mister}
          />
          <label htmlFor="mister">Mr.</label>
          <input
            style={stylesForRegistrationForm.stylesForRadioInput}
            type="radio"
            name="missus"
            id="missus"
            value={formData.missus}
            checked={formData.missus}
            onChange={handleRadioMissusChange}
          />
          <label htmlFor="missus">Ms.</label>
        </div>
        <div style={stylesForRegistrationForm.stylesForInputContainer}>
          {onClickFieldFirstName ? (
            <label htmlFor="firstName" style={{ color: 'red' }}>
              First name*
            </label>
          ) : (
            <label htmlFor="firstName">First name*</label>
          )}
          <input
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div style={stylesForRegistrationForm.stylesForInputContainer}>
          {onClickFieldLastName ? (
            <label htmlFor="lastName" style={{ color: 'red' }}>
              Last name*
            </label>
          ) : (
            <label htmlFor="lastName">Last name*</label>
          )}
          <input
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div style={stylesForRegistrationForm.stylesForInputContainer}>
          {onClickFieldEmail ? (
            <label htmlFor="email3" style={{ color: 'red' }}>
              Email*
            </label>
          ) : (
            <label htmlFor="email3">Email*</label>
          )}
          <input
            name="email"
            id="email3"
            autoComplete="email"
            onChange={handleInputChange}
            defaultValue={formData.email}
          />
        </div>
        <div style={stylesForRegistrationForm.stylesForInputContainer}>
          {onClickFieldPassword ? (
            <label htmlFor="password2" style={{ color: 'red' }}>
              Password*
            </label>
          ) : (
            <label htmlFor="password2">Password*</label>
          )}
          <input
            type="password"
            name="password"
            id="password2"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.forRadioAndCheckboxContainer}>
            <input
              name="newsletter"
              id="newsletter"
              type="checkbox"
              style={stylesForRegistrationForm.stylesForCheckBoxInput}
            />
            <label
              htmlFor="newsletter"
              className={styles.textCheckboxNewsLetter}
            >
              Sign up for our newsletter!
            </label>
          </div>

          <button
            onClick={handleInputSubmit}
            style={stylesForRegistrationForm.stylesForSubmitBtn}
          >
            register
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
