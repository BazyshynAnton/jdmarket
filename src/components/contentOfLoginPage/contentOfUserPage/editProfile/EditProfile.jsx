import { useDispatch, useSelector } from '../../../shared/utils/reactImports'
import {
  setDefaultData,
  setMissusAccount,
  setMisterAccount,
  setConfirm,
  setControlEditProfile,
} from '../../createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'

import styles from '../ContentOfUserPage.module.scss'

const stylesForEditForm = {
  stylesForRadioInput: {
    width: '15px',
    cursor: 'pointer',
  },

  stylesForInputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const EditProfile = () => {
  const {
    accountInfo,
    inputNameAccountControl,
    inputSecondNameControl,
    inputEmailControl,
    inputPasswordControl,
  } = useSelector((store) => store.registeredAccount)
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
    <div className={styles.containerEditProfile}>
      <h4>YOUR PERSONAL INFORMATION</h4>

      <form onSubmit={handleFormSubmit} className={styles.formEditContent}>
        <p>Title</p>
        <div className={styles.forRadioAndCheckboxContainer}>
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
        </div>
        <div style={stylesForEditForm.stylesForInputContainer}>
          {inputNameAccountControl ? (
            <label htmlFor="nameAccount" style={{ color: '#b90000' }}>
              First name*
            </label>
          ) : (
            <label htmlFor="nameAccount">First name*</label>
          )}
          <input
            name="nameAccount"
            id="nameAccount"
            value={accountInfo.nameAccount}
            onChange={handleInputChange}
          />
        </div>
        <div style={stylesForEditForm.stylesForInputContainer}>
          {inputSecondNameControl ? (
            <label htmlFor="secondName" style={{ color: '#b90000' }}>
              Last name*
            </label>
          ) : (
            <label htmlFor="secondName">Last name*</label>
          )}
          <input
            name="secondName"
            id="secondName"
            value={accountInfo.secondName}
            onChange={handleInputChange}
          />
        </div>
        <div style={stylesForEditForm.stylesForInputContainer}>
          {inputEmailControl ? (
            <label htmlFor="email3" style={{ color: '#b90000' }}>
              Email*
            </label>
          ) : (
            <label htmlFor="email3">Email*</label>
          )}
          <input
            name="emailAddress"
            id="email3"
            autoComplete="email"
            defaultValue={accountInfo.emailAddress}
            onChange={handleInputChange}
          />
        </div>
        <div style={stylesForEditForm.stylesForInputContainer}>
          {inputPasswordControl ? (
            <label htmlFor="password2" style={{ color: '#b90000' }}>
              Password*
            </label>
          ) : (
            <label htmlFor="password2">Password*</label>
          )}
          <input
            type="password"
            name="password"
            id="password2"
            value={accountInfo.password}
            onChange={handleInputChange}
          />
        </div>
        <div style={stylesForEditForm.stylesForInputContainer}>
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {accountInfo.nameAccount === '' ||
          accountInfo.secondName === '' ||
          accountInfo.emailAddress === '' ||
          accountInfo.password === '' ? (
            <button
              type="button"
              onClick={() => dispatch(setControlEditProfile())}
              className={styles.stylesForSubmitBtn}
            >
              confirm
            </button>
          ) : (
            <button
              style={{
                fontFamily: 'Pathway Gothic One',
                fontSize: '15.5px',
                letterSpacing: '0.6px',
              }}
              type="button"
              onClick={() => {
                dispatch(setConfirm())
                dispatch(setControlEditProfile())
              }}
              className={styles.stylesForSubmitBtn}
            >
              confirm
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default EditProfile
