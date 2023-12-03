import React, { useState } from 'react'

import { List, ListItem, Toolbar } from '@mui/material'
import CssTransitionForSocialMediaBtn from '../cssTransition/CssTransitionForSocialMediaBtn'
import { NavLink } from 'react-router-dom'
import CssTransitionForVehicleInventoryBtn from '../cssTransition/CssTransitionForVehicleInventoryBtn'
import CssTransitionForCompanyProfileBtn from '../cssTransition/CssTransitionForCompanyProfileBtn'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import styles from '../Header.module.css'

const AppBarForBigSceens = () => {
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
      <Toolbar className={styles.toolbarContainer}>
        <List className={styles.lists}>
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
            <ListItem className={styles.listItem}>
              <HomeRoundedIcon className={styles.homeBtn} />
              HOME
            </ListItem>
          </NavLink>

          <NavLink
            to="/vehicle-inventory"
            onClick={() => window.scrollTo(0, 0)}
            className={`${styles.listItem} ${
              stateForMenu.isMenuOpen ? styles.openMenu : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <ListItem>VEHICLE INVENTORY</ListItem>
          </NavLink>

          <ListItem className={styles.listItem}>JAPAN CAR AUCTION</ListItem>
          <ListItem
            className={`${styles.listItem} ${
              stateForMenu.isMenuTwoOpen ? styles.openMenu : ''
            }`}
            onMouseEnter={handleMouseEnterTwo}
            onMouseLeave={handleMouseLeaveTwo}>
            COMPANY PROFILE
          </ListItem>
          <ListItem className={styles.listItem}>USA JDM IMPORTS</ListItem>
          <NavLink
            to="/how-to-buy"
            onClick={() => window.scrollTo(0, 0)}
            className={styles.listItem}>
            <ListItem>HOW TO BUY?</ListItem>
          </NavLink>
          <ListItem
            className={`${styles.listItem} ${
              stateForMenu.isMenuThreeOpen ? styles.openMenu : ''
            }`}
            onMouseEnter={handleMouseEnterThree}
            onMouseLeave={handleMouseLeaveThree}>
            SOCIAL MEDIA
          </ListItem>
          <ListItem className={styles.listItem}>CONTACT US</ListItem>
          <ListItem className={styles.listItem}>FAQ</ListItem>
        </List>
      </Toolbar>
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

export default AppBarForBigSceens
