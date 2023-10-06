import { Box } from '@mui/material'
import styles from '../ContentOfUserPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  setDefaultData,
  setMissusAccount,
  setMisterAccount,
  setConfirm,
} from '../../createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'

const stylesForEditForm = {
  stylesForRadioInput: {
    width: '15px',
    cursor: 'pointer',
  },

  stylesForIputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const EditProfile = () => {
  const { accountInfo } = useSelector((store) => store.registeredAccount)
  const dispatch = useDispatch()
  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  const handleRadioMisterChange = () => {
    dispatch(setMisterAccount())
  }
  const handleRadioMissusChange = () => {
    dispatch(setMissusAccount())
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target

    dispatch(setDefaultData({ ...accountInfo, [name]: value }))
  }

  return (
    <Box className={styles.containerEditProfile}>
      <h4>YOUR PERSONAL INFORMATION</h4>

      <form onSubmit={handleFormSubmit} className={styles.formEditContent}>
        <p>Title</p>
        <Box className={styles.forRadioAndCheckboxContainer}>
          <input
            style={stylesForEditForm.stylesForRadioInput}
            type="radio"
            name="mister"
            id="mister"
            value={accountInfo.misterAccount}
            onChange={handleRadioMisterChange}
            checked={accountInfo.misterAccount}
          />
          <label htmlFor="mister">Mr.</label>
          <input
            style={stylesForEditForm.stylesForRadioInput}
            type="radio"
            name="missus"
            id="missus"
            value={accountInfo.missusAccount}
            checked={accountInfo.missusAccount}
            onChange={handleRadioMissusChange}
          />
          <label htmlFor="missus">Ms.</label>
        </Box>
        <Box sx={stylesForEditForm.stylesForIputContainer}>
          <label htmlFor="nameAccount">First name*</label>
          <input
            name="nameAccount"
            id="nameAccount"
            value={accountInfo.nameAccount}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={stylesForEditForm.stylesForIputContainer}>
          <label htmlFor="secondName">Last name*</label>
          <input
            name="secondName"
            id="secondName"
            value={accountInfo.secondName}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={stylesForEditForm.stylesForIputContainer}>
          <label htmlFor="email3">Email*</label>
          <input
            name="email"
            id="email3"
            autoComplete="email"
            defaultValue={accountInfo.emailAddress}
          />
        </Box>
        <Box sx={stylesForEditForm.stylesForIputContainer}>
          <label htmlFor="password2">Password*</label>
          <input
            type="password"
            name="password"
            id="password2"
            value={accountInfo.password}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={stylesForEditForm.stylesForIputContainer}>
          <label htmlFor="photo">Change Profile Picrure</label>
          <input
            style={{
              border: 'none',
              padding: ' 5px 0px',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            type="file"
            name="photo"
            id="photo"
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <button
            type="button"
            onClick={() => dispatch(setConfirm())}
            className={styles.stylesForSubmitBtn}
          >
            confirm
          </button>
        </Box>
      </form>
    </Box>
  )
}

export default EditProfile
