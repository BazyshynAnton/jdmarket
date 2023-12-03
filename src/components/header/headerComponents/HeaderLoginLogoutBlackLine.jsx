import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@mui/material'
import { NavLink } from 'react-router-dom'

import styles from '../Header.module.css'

import {
  setActiveUserLogout,
  setEditFalse,
} from '../../contentOfLoginPage/createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'

import { setClearRegistration } from '../../contentOfLoginPage/createAccountAndRegisteredAccount/createAccountSlice'

const HeaderLoginLogoutBlackLine = () => {
  const { accountInfo, activeUser } = useSelector(
    (store) => store.registeredAccount
  )
  const dispatch = useDispatch()

  return (
    <div className={styles.headerRegisterOverflow}>
      <Container>
        <div className={styles.registration}>
          {activeUser ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '0.3rem',
              }}>
              <NavLink to="/user">
                <p
                  style={{
                    textDecoration: 'none',
                  }}
                  onClick={() => dispatch(setEditFalse())}>
                  {accountInfo.nameAccount} {accountInfo.secondName}
                </p>
              </NavLink>
              <hr
                style={{
                  height: '20px',
                  color: 'white',
                  background: 'white',
                  width: '1px',
                }}
              />
              <NavLink
                to="/login"
                onClick={() => {
                  dispatch(setActiveUserLogout())
                }}>
                <p>Logout</p>
              </NavLink>
            </div>
          ) : (
            <NavLink
              to="/login"
              onClick={() => {
                dispatch(setClearRegistration())
              }}>
              <p>Log in</p>
            </NavLink>
          )}
        </div>
      </Container>
    </div>
  )
}

export default HeaderLoginLogoutBlackLine
