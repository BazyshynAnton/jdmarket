import { Box } from '@mui/material'
import styles from '../ContentOfUserPage.module.css'
import { NavLink } from 'react-router-dom'

const NavMenuOfUserPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '1rem',
      }}
    >
      <Box className={styles.navMenuOfUserPage}>
        <NavLink to="/">
          <p>HOME</p>
        </NavLink>
        <p
          style={{
            color: 'black',
            cursor: 'text',
            textDecoration: 'none',
          }}
        >
          {'>'}
        </p>
        <p style={{ color: 'black', cursor: 'text', textDecoration: 'none' }}>
          User
        </p>
      </Box>

      <p
        style={{
          fontSize: '22px',
          fontFamily: 'Pathway Gothic One, Arial, Helvetica, sans-serif',
        }}
      >
        User profile
      </p>
    </Box>
  )
}

export default NavMenuOfUserPage
