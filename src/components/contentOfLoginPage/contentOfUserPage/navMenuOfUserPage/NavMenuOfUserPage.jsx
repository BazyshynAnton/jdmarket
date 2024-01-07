import { NavLink } from '../../../shared/utils/reactImports'

import styles from '../ContentOfUserPage.module.scss'

const NavMenuOfUserPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '1rem',
      }}
    >
      <div className={styles.navMenuOfUserPage}>
        <NavLink to="/">
          <p>HOME</p>
        </NavLink>
        <p
          style={{
            color: '#000',
            cursor: 'text',
            textDecoration: 'none',
          }}
        >
          {'>'}
        </p>
        <p style={{ color: '#000', cursor: 'text', textDecoration: 'none' }}>
          User
        </p>
      </div>

      <p
        style={{
          fontSize: '22px',
          fontFamily: 'Pathway Gothic One',
        }}
      >
        User profile
      </p>
    </div>
  )
}

export default NavMenuOfUserPage
