import {
  useDispatch,
  useSelector,
  NavLink,
} from '../../shared/utils/reactImports'
import { setClearRegistration } from '../../contentOfLoginPage/createAccountAndRegisteredAccount/createAccountSlice'

import {
  setActiveUserLogout,
  setEditFalse,
} from '../../contentOfLoginPage/createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'

import styles from '../Header.module.scss'

const HeaderLoginLogoutBlackLine = () => {
  const { accountInfo, activeUser } = useSelector(
    (store) => store.registeredAccount
  )
  const dispatch = useDispatch()

  return (
    <div style={{ background: '#000', height: '30px' }}>
      <div className="my-container">
        <div className={styles.registration}>
          {activeUser ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <NavLink to="/user">
                <p
                  style={{
                    textDecoration: 'none',
                  }}
                  onClick={() => dispatch(setEditFalse())}
                >
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
                }}
              >
                <p>Logout</p>
              </NavLink>
            </div>
          ) : (
            <NavLink
              to="/login"
              onClick={() => {
                dispatch(setClearRegistration())
              }}
            >
              <p>Log in</p>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeaderLoginLogoutBlackLine
