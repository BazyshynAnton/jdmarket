import { Box } from '@mui/material'
import avatarExample from '../../../../pictures/avatarExample.jpg'
import styles from '../ContentOfUserPage.module.css'
import { useSelector } from 'react-redux'

const stylesForTextAndButton = {
  text: {
    marginTop: '20px',
    width: '125px',
  },
  btn: {
    marginTop: '10px',
    width: '100px',
    background: '#8B0000',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}

const UserInfo = () => {
  const { accountInfo } = useSelector((store) => store.registeredAccount)

  return (
    <Box className={styles.userInfo}>
      <Box className={styles.userAvatarContainer}>
        <img src={avatarExample} alt="user-avatar" />
      </Box>

      <p style={stylesForTextAndButton.text}>
        {accountInfo.nameAccount} {accountInfo.secondName}
      </p>
      <p>{accountInfo.emailAddress}</p>
      <button style={stylesForTextAndButton.btn}>Edit Profile</button>
    </Box>
  )
}

export default UserInfo
