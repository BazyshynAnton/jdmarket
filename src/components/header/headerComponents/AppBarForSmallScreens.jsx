import { List, ListItem, IconButton, SwipeableDrawer } from '@mui/material'

import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

import styles from '../Header.module.css'
import CssTransitionForSmallScreenSocialMediaBtn from '../cssTransition/CssTransitionForSmallScreenSocialMediaBtn'
import CssTransitionForSmallScreenVehicleInventoryBtn from '../cssTransition/CssTransitionForSmallScreenVehicleInventoryBtn'
import CssTransitionForSmallScreenCompanyProfileBtn from '../cssTransition/CssTransitionForSmallScreenCompanyProfileBtn'

const AppBarForSmallScreens = ({ open, setOpen }) => {
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
    <SwipeableDrawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      anchor="left"
      PaperProps={{
        className: styles.swipeBar,
      }}>
      <div className={styles.closeBurgerIcon}>
        <IconButton onClick={() => setOpen(false)}>
          <MenuOpenIcon sx={{ color: 'white', fontSize: '1.8rem' }} />
        </IconButton>
      </div>
      <div className={styles.headerInBurger}>
        <h5>NAVIGATION</h5>
      </div>
      <List className={styles.listInBurgerMenu}>
        <ListItem className={styles.listIntemInBurgerMenu}>
          <NavLink
            to="/"
            onClick={() => {
              window.scrollTo(0, 0)
              setOpen(false)
            }}>
            <p>HOME</p>
          </NavLink>
        </ListItem>
        <ListItem
          onClick={handleClickFunctionInBurger}
          className={`${styles.listIntemInBurgerMenuVehicleInventory} ${
            stateIsOpen.isOpen ? styles.activeBurgerVehicle : ''
          }`}>
          {!stateIsOpen.isOpen && <p>VEHICLE INVENTORY</p>}
          {stateIsOpen.isOpen && (
            <NavLink
              to="/vehicle-inventory"
              onClick={() => {
                window.scrollTo(0, 0)
                setOpen(false)
              }}>
              <p>VEHICLE INVENTORY</p>
            </NavLink>
          )}
          <CssTransitionForSmallScreenVehicleInventoryBtn
            nodeRef={nodeRef}
            state={stateIsOpen}
            setOpen={setOpen}
          />
        </ListItem>

        <ListItem className={styles.listIntemInBurgerMenu}>
          <p>JAPAN CAR AUCTION</p>
        </ListItem>
        <ListItem
          onClick={handleClickFunctionInBurgerTwo}
          className={`${styles.listIntemInBurgerMenuVehicleInventory} ${
            stateIsOpen.isOpenTwo ? styles.activeBurgerVehicle : ''
          }`}>
          <p>COMPANY PROFILE</p>
          <CssTransitionForSmallScreenCompanyProfileBtn
            nodeRef={nodeRef}
            state={stateIsOpen}
          />
        </ListItem>
        <ListItem className={styles.listIntemInBurgerMenu}>
          <p>USA JDM IMPORTS</p>
        </ListItem>
        <ListItem className={styles.listIntemInBurgerMenu}>
          <NavLink
            to="/how-to-buy"
            onClick={() => {
              window.scrollTo(0, 0)
              setOpen(false)
            }}>
            <p>HOW TO BUY?</p>
          </NavLink>
        </ListItem>
        <ListItem
          onClick={handleClickFunctionInBurgerThree}
          className={`${styles.listIntemInBurgerMenuVehicleInventory} ${
            stateIsOpen.isOpenThree ? styles.activeBurgerVehicle : ''
          }`}>
          <p>SOCIAL MEDIA</p>
          <CssTransitionForSmallScreenSocialMediaBtn
            nodeRef={nodeRef}
            state={stateIsOpen}
          />
        </ListItem>
        <ListItem className={styles.listIntemInBurgerMenu}>
          <p>CONTACT US</p>
        </ListItem>
        <ListItem className={styles.listIntemInBurgerMenu}>
          <p>FAQ</p>
        </ListItem>
      </List>
    </SwipeableDrawer>
  )
}

export default AppBarForSmallScreens
