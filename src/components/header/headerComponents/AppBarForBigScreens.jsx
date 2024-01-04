import {
  useState,
  NavLink,
  React,
  LazyLoadImage,
} from '../../shared/utils/reactImports'

import CssTransitionForSocialMediaBtn from '../cssTransition/CssTransitionForSocialMediaBtn'
import CssTransitionForVehicleInventoryBtn from '../cssTransition/CssTransitionForVehicleInventoryBtn'
import CssTransitionForCompanyProfileBtn from '../cssTransition/CssTransitionForCompanyProfileBtn'

import homeRoundedIcon from '../../../assets/pictures/app-icons/homeRoundedIcon.png'

import styles from '../Header.module.scss'

const AppBarForBigScreens = () => {
  const nodeRef = React.useRef(null)

  const initialState = {
    isMenuOpen: false,
    isMenuTwoOpen: false,
    isMenuThreeOpen: false,
  }

  const [stateForMenu, setStateForMenu] = useState(initialState)

  const handleMouseEnter = () => {
    setStateForMenu((stateForMenu) => ({ ...stateForMenu, isMenuOpen: true }))
  }

  const handleMouseLeave = () => {
    setStateForMenu((stateForMenu) => ({ ...stateForMenu, isMenuOpen: false }))
  }
  const handleMouseEnterTwo = () => {
    setStateForMenu((stateForMenu) => ({
      ...stateForMenu,
      isMenuTwoOpen: true,
    }))
  }

  const handleMouseLeaveTwo = () => {
    setStateForMenu((stateForMenu) => ({
      ...stateForMenu,
      isMenuTwoOpen: false,
    }))
  }

  const handleMouseEnterThree = () => {
    setStateForMenu((stateForMenu) => ({
      ...stateForMenu,
      isMenuThreeOpen: true,
    }))
  }

  const handleMouseLeaveThree = () => {
    setStateForMenu((stateForMenu) => ({
      ...stateForMenu,
      isMenuThreeOpen: false,
    }))
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          width: '100%',
          minHeight: '40px',
          padding: '0',
          zIndex: '3',
        }}
      >
        <ul className={styles.lists}>
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
            <li className={styles.listItem}>
              <LazyLoadImage
                style={{ width: '19px', height: '19px' }}
                src={homeRoundedIcon}
                alt="home"
              />
              HOME
            </li>
          </NavLink>

          <NavLink
            to="/vehicle-inventory"
            onClick={() => window.scrollTo(0, 0)}
            className={`${styles.listItem} ${
              stateForMenu.isMenuOpen ? styles.openMenu : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li>VEHICLE INVENTORY</li>
          </NavLink>

          <li className={styles.listItem}>JAPAN CAR AUCTION</li>
          <li
            className={`${styles.listItem} ${
              stateForMenu.isMenuTwoOpen ? styles.openMenu : ''
            }`}
            onMouseEnter={handleMouseEnterTwo}
            onMouseLeave={handleMouseLeaveTwo}
          >
            COMPANY PROFILE
          </li>
          <li className={styles.listItem}>USA JDM IMPORTS</li>
          <NavLink
            to="/how-to-buy"
            onClick={() => window.scrollTo(0, 0)}
            className={styles.listItem}
          >
            <li>HOW TO BUY?</li>
          </NavLink>
          <li
            className={`${styles.listItem} ${
              stateForMenu.isMenuThreeOpen ? styles.openMenu : ''
            }`}
            onMouseEnter={handleMouseEnterThree}
            onMouseLeave={handleMouseLeaveThree}
          >
            SOCIAL MEDIA
          </li>
          <li className={styles.listItem}>CONTACT US</li>
          <li className={styles.listItem}>FAQ</li>
        </ul>
      </div>
      <CssTransitionForVehicleInventoryBtn
        nodeRef={nodeRef}
        state={stateForMenu}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <CssTransitionForCompanyProfileBtn
        nodeRef={nodeRef}
        state={stateForMenu}
        handleMouseEnterTwo={handleMouseEnterTwo}
        handleMouseLeaveTwo={handleMouseLeaveTwo}
      />
      <CssTransitionForSocialMediaBtn
        nodeRef={nodeRef}
        state={stateForMenu}
        handleMouseEnterThree={handleMouseEnterThree}
        handleMouseLeaveThree={handleMouseLeaveThree}
      />
    </>
  )
}

export default AppBarForBigScreens
