import { Box } from '@mui/material'
import avatarExample from '../../../../pictures/avatarExample.jpg'
import styles from '../ContentOfUserPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setEdit } from '../../createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'

const stylesForTextAndButton = {
  text: {
    marginTop: '20px',
    width: '125px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '15px',
  },
  btn: {
    marginTop: '10px',
    width: '100px',
    background: '#8B0000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Pathway Gothic One, sans-serif',
    fontSize: '15px',
  },
}

const UserInfo = () => {
  const { accountInfo, activeUser } = useSelector(
    (store) => store.registeredAccount
  )

  const dispatch = useDispatch()

  return (
    <Box className={styles.userInfo}>
      <Box className={styles.userAvatarContainer}>
        <img src={avatarExample} alt="user-avatar" />
      </Box>

      <p style={stylesForTextAndButton.text}>
        {accountInfo.nameAccount} {accountInfo.secondName}
      </p>
      <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '15px' }}>
        {accountInfo.emailAddress}
      </p>
      {activeUser ? (
        <button
          onClick={() => {
            dispatch(setEdit())
          }}
          style={stylesForTextAndButton.btn}>
          Edit Profile
        </button>
      ) : (
        <button
          onClick={() =>
            swal({
              title: 'Oops...',
              text: 'You are not registered or not logged in.',
            })
          }
          style={stylesForTextAndButton.btn}>
          Edit Profile
        </button>
      )}
    </Box>
  )
}

export default UserInfo
