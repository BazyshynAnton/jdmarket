import { NavLink } from '../../shared/utils/reactImports'

import styles from './ReusableNavSection.module.scss'

const Navigation = ({ section }) => {
  return (
    <div className={styles.mainNavAndSectionContainer}>
      <div className={styles.navContainer}>
        <NavLink to="/" className={styles.homeBtn}>
          <p>HOME</p>
        </NavLink>
        <p>{'>'}</p>
        <NavLink to="/vehicle-inventory" className={styles.homeBtn}>
          <p>VEHICLE INVENTORY</p>
        </NavLink>
        <p>{'>'}</p>
        <p>{section}</p>
      </div>
    </div>
  )
}

export default Navigation
