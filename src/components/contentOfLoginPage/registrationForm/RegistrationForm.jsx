import { Box } from '@mui/material'
import styles from '../ContentOfLoginPage.module.css'
import { useDispatch, useSelector } from 'react-redux'

import {
  setFormData,
  setMister,
  setMissus,
} from '../createAccountAndRegisteredAccount/createAccountAndRegisteredAccountSlice'

const stylesForRegistrationForm = {
  stylesForRadioInput: {
    width: '15px',
    cursor: 'pointer',
  },
  stylesForCheckBoxInput: { width: '15px', cursor: 'pointer' },

  stylesForSubmitBtn: {
    width: '60px',
  },
  stylesForIputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const RegistrationForm = () => {
  const { formData } = useSelector((store) => store.formRegister)

  const dispatch = useDispatch()

  const handleFormControll = (e) => {
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

  return (
    <Box className={styles.registrationFormContainer}>
      <h4>YOUR PERSONAL INFORMATION</h4>

      <form
        onSubmit={handleFormControll}
        className={styles.formRegistrationContent}
      >
        <p>Title</p>
        <Box className={styles.forRadioAndCheckboxContainer}>
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
        </Box>
        <Box sx={stylesForRegistrationForm.stylesForIputContainer}>
          <label htmlFor="firstName">First name*</label>
          <input
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={stylesForRegistrationForm.stylesForIputContainer}>
          <label htmlFor="lastName">Last name*</label>
          <input
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={stylesForRegistrationForm.stylesForIputContainer}>
          <label htmlFor="email3">Email*</label>
          <input
            name="email"
            id="email3"
            autoComplete="email"
            defaultValue={formData.email}
          />
        </Box>
        <Box sx={stylesForRegistrationForm.stylesForIputContainer}>
          <label htmlFor="password2">Password*</label>
          <input
            type="password"
            name="password"
            id="password2"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box className={styles.forRadioAndCheckboxContainer}>
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
          </Box>

          <button style={stylesForRegistrationForm.stylesForSubmitBtn}>
            register
          </button>
        </Box>
      </form>
    </Box>
  )
}

export default RegistrationForm
