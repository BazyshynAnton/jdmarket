import {
  useRef,
  useState,
  NavLink,
  useEffect,
} from '../../shared/utils/reactImports'

import CssTransitionForSmallScreenSocialMediaBtn from '../cssTransition/CssTransitionForSmallScreenSocialMediaBtn'
import CssTransitionForSmallScreenVehicleInventoryBtn from '../cssTransition/CssTransitionForSmallScreenVehicleInventoryBtn'
import CssTransitionForSmallScreenCompanyProfileBtn from '../cssTransition/CssTransitionForSmallScreenCompanyProfileBtn'

import menuOpenIcon from '../../../assets/pictures/app-icons/menuOpenIcon.png'

import styles from '../Header.module.scss'

const AppBarForSmallScreens = ({ open, setOpen }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.scrollbarWidth = 'none' // Firefox
      document.body.style.msOverflowStyle = 'none' // Edge
      document.body.style['&::-webkit-scrollbar'] = 'display: none' // WebKit
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.scrollbarWidth = 'auto' // Firefox
      document.body.style.msOverflowStyle = 'auto' // Edge
      document.body.style['&::-webkit-scrollbar'] = 'auto' // WebKit
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.scrollbarWidth = 'auto' // Firefox
      document.body.style.msOverflowStyle = 'auto' // Edge
      document.body.style['&::-webkit-scrollbar'] = 'auto' // WebKit
    }
  }, [open])

  const nodeRef = useRef(null)

  //Burger menu controll
  const initialIsOpenState = {
    isOpen: false,
    isOpenTwo: false,
    isOpenThree: false,
  }

  const [stateIsOpen, setStateIsOpen] = useState(initialIsOpenState)

  const handleClickFunctionInBurger = () => {
    setStateIsOpen((stateIsOpen) => ({
      ...stateIsOpen,
      isOpen: !stateIsOpen.isOpen,
    }))
  }

  const handleClickFunctionInBurgerTwo = () => {
    setStateIsOpen((stateIsOpen) => ({
      ...stateIsOpen,
      isOpenTwo: !stateIsOpen.isOpenTwo,
    }))
  }

  const handleClickFunctionInBurgerThree = () => {
    setStateIsOpen((stateIsOpen) => ({
      ...stateIsOpen,
      isOpenThree: !stateIsOpen.isOpenThree,
    }))
  }

  return (
    <div className={`${styles.swipeBar} ${open ? styles.open : ''}`}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          height: '50px',
          paddingRight: '30px',
        }}
      >
        <button
          style={{ zIndex: '10000', background: 'none', cursor: 'pointer' }}
          onClick={() => setOpen(false)}
        >
          <img
            style={{ width: '30px', height: '20px' }}
            src={menuOpenIcon}
            alt="menu-open"
          />
        </button>
      </div>
      <div className={styles.headerInBurger}>
        <h5>NAVIGATION</h5>
      </div>
      <ul className={styles.listInBurgerMenu}>
        <li className={styles.listItemInBurgerMenu}>
          <NavLink
            to="/"
            onClick={() => {
              window.scrollTo(0, 0)
              setOpen(false)
            }}
          >
            <p>HOME</p>
          </NavLink>
        </li>
        <li
          onClick={handleClickFunctionInBurger}
          className={`${styles.listItemInBurgerMenuVehicleInventory} ${
            stateIsOpen.isOpen ? styles.activeBurgerVehicle : ''
          }`}
        >
          {!stateIsOpen.isOpen && <p>VEHICLE INVENTORY</p>}
          {stateIsOpen.isOpen && (
            <NavLink
              to="/vehicle-inventory"
              onClick={() => {
                window.scrollTo(0, 0)
                setOpen(false)
              }}
              style={{ width: '150px' }}
            >
              <p>VEHICLE INVENTORY</p>
            </NavLink>
          )}
          <CssTransitionForSmallScreenVehicleInventoryBtn
            nodeRef={nodeRef}
            state={stateIsOpen}
            setOpen={setOpen}
          />
        </li>

        <li className={styles.listItemInBurgerMenu}>
          <p>JAPAN CAR AUCTION</p>
        </li>
        <li
          onClick={handleClickFunctionInBurgerTwo}
          className={`${styles.listItemInBurgerMenuVehicleInventory} ${
            stateIsOpen.isOpenTwo ? styles.activeBurgerVehicle : ''
          }`}
        >
          <p>COMPANY PROFILE</p>
          <CssTransitionForSmallScreenCompanyProfileBtn
            nodeRef={nodeRef}
            state={stateIsOpen}
          />
        </li>
        <li className={styles.listItemInBurgerMenu}>
          <p>USA JDM IMPORTS</p>
        </li>
        <li className={styles.listItemInBurgerMenu}>
          <NavLink
            to="/how-to-buy"
            onClick={() => {
              window.scrollTo(0, 0)
              setOpen(false)
            }}
          >
            <p>HOW TO BUY?</p>
          </NavLink>
        </li>
        <li
          onClick={handleClickFunctionInBurgerThree}
          className={`${styles.listItemInBurgerMenuVehicleInventory} ${
            stateIsOpen.isOpenThree ? styles.activeBurgerVehicle : ''
          }`}
        >
          <p>SOCIAL MEDIA</p>
          <CssTransitionForSmallScreenSocialMediaBtn
            nodeRef={nodeRef}
            state={stateIsOpen}
          />
        </li>
        <li className={styles.listItemInBurgerMenu}>
          <p>CONTACT US</p>
        </li>
        <li className={styles.listItemInBurgerMenu}>
          <p>FAQ</p>
        </li>
      </ul>
    </div>
  )
}

export default AppBarForSmallScreens
