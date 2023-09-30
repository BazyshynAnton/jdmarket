import { Box } from '@mui/material'
import styles from '../ContentOfLoginPage.module.css'
import { NavLink } from 'react-router-dom'

const NavigationMenu = () => {
  return (
    <Box className={styles.mainNavContainer}>
      <Box className={styles.navContainer}>
        <NavLink to="/" onClick={() => scrollTo(0, 0)}>
          <p className={styles.linkNav}>HOME</p>
        </NavLink>
        <p>{'>'}</p>
        <p>Authentication</p>
      </Box>

      <p className={styles.headerOfPage}>Authentication</p>
    </Box>
  )
}

export default NavigationMenu
