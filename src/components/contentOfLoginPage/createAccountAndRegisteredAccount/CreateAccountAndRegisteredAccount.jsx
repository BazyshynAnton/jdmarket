import { Box, FormControl } from '@mui/material'
import styles from '../ContentOfLoginPage.module.css'

const CreateAccountAndRegisteredAccount = () => {
  return (
    <Box className={styles.createAndRegisteredContainer}>
      <Box className={styles.createAccountContainer}>
        <h4>CREATE AN ACCOUNT</h4>
        <form className={styles.formContainerCreateAnAccount}>
          <p>Please enter your email address to create an account.</p>
          <Box>
            <p>Email address</p>
            <input />
          </Box>
          <button type="submit">create an account</button>
        </form>
      </Box>
      <Box className={styles.registeredContainer}>
        <h4>ALREADY REGISTERED?</h4>
        <form className={styles.formRegistered}>
          <Box>
            <p>Email address</p>
            <input />
          </Box>
          <Box>
            <p>Password</p>

            <input />
          </Box>
          <p className={styles.forgotPassword}>Forgot your password?</p>
          <button type="submit">sign in</button>
        </form>
      </Box>
    </Box>
  )
}

export default CreateAccountAndRegisteredAccount
