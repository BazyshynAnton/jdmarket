import { Box } from '@mui/material'
import styles from '../ContentOfLoginPage.module.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { backToLoginPage } from '../createAccountAndRegisteredAccount/createAccountSlice'
const NavigationMenu = () => {
  const dispatch = useDispatch()
  const { registration } = useSelector((store) => store.formRegister)

  const backToLoginPageLink = () => {
    dispatch(backToLoginPage())
  }

  return (
    <Box className={styles.mainNavContainer}>
      <Box className={styles.navContainer}>
        <NavLink to="/" onClick={() => scrollTo(0, 0)}>
          <p className={styles.linkNav}>HOME</p>
        </NavLink>
        <p>{'>'}</p>
        <p
          className={registration ? styles.linkNav : ''}
          onClick={registration ? backToLoginPageLink : () => {}}
        >
          Authentication
        </p>
        {registration && (
          <>
            <p>{'>'}</p>
            <p>Create your account</p>
          </>
        )}
      </Box>

      {!registration ? (
        <p className={styles.headerOfPage}>Authentication</p>
      ) : (
        <p className={styles.headerOfPage}>Create an account</p>
      )}
    </Box>
  )
}

export default NavigationMenu
