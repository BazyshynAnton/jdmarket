import { NavLink } from 'react-router-dom'

import styles from '../ContentOfUserPage.module.css'

const NavMenuOfUserPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '1rem',
      }}>
      <div className={styles.navMenuOfUserPage}>
        <NavLink to="/">
          <p>HOME</p>
        </NavLink>
        <p
          style={{
            color: 'black',
            cursor: 'text',
            textDecoration: 'none',
          }}>
          {'>'}
        </p>
        <p style={{ color: 'black', cursor: 'text', textDecoration: 'none' }}>
          User
        </p>
      </div>

      <p
        style={{
          fontSize: '22px',
          fontFamily: 'Pathway Gothic One, Arial, Helvetica, sans-serif',
        }}>
        User profile
      </p>
    </div>
  )
}

export default NavMenuOfUserPage
