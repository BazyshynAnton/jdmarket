import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, AppBar, useMediaQuery, IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setHelper } from './headerSlice'

import HeaderLoginLogoutBlackLine from './headerComponents/HeaderLoginLogoutBlackLine'
import SearchIconComponent from './headerComponents/SearchIconComponent'
import AppBarForBigSceens from './headerComponents/AppBarForBigSceens'
import AppBarForSmallScreens from './headerComponents/AppBarForSmallScreens'

import MenuIcon from '@mui/icons-material/Menu'

import headerLogo from '../../pictures/head-logo.png'

import styles from './Header.module.css'

const Header = () => {
  const INPUTID = 'inputID'

  const { helper } = useSelector((store) => store.headerSlice)

  //Controll window size
  const isDesktop = useMediaQuery('(min-width: 656px)')

  const [open, setOpen] = useState(false)

  //dispatch
  const dispatch = useDispatch()

  const handleInputRemoveHelper = (event) => {
    if (!event.target.closest(`#${INPUTID}`)) {
      dispatch(setHelper(false))
    }
  }

  useEffect(() => {
    if (helper) {
      document.addEventListener('click', handleInputRemoveHelper)
    }

    return () => {
      return document.removeEventListener('click', handleInputRemoveHelper)
    }
  }, [helper])

  return (
    <div className={styles.headerOverflow}>
      <HeaderLoginLogoutBlackLine />
      <Container>
        <div className={styles.mainHeaderBg}>
          <div className={styles.headerLogoContainer}>
            <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={headerLogo} alt="JDMexpoLogo" />
            </NavLink>
          </div>

          <SearchIconComponent />
        </div>

        <AppBar position="relative" className={styles.appBar}>
          {isDesktop && (
            <>
              <AppBarForBigSceens />
            </>
          )}

          {!isDesktop && (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon className={styles.burgerBtn} />
            </IconButton>
          )}

          {!isDesktop && (
            <AppBarForSmallScreens open={open} setOpen={setOpen} />
          )}
        </AppBar>
      </Container>
      <div className={styles.underHeader} />
    </div>
  )
}

export default Header
