import React, { useEffect, useState } from 'react'
import {
  Container,
  Button,
  FormControl,
  Select,
  MenuItem,
  AppBar,
  Toolbar,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  IconButton,
  SwipeableDrawer,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

import SearchIcon from '@mui/icons-material/Search'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

import headerLogo from '../../pictures/head-logo.png'
import jdmSports from '../../pictures/jdmSports.jpg'
import jdmClassic from '../../pictures/jdmClassic.jpg'
import nonJdm from '../../pictures/nonJdm.jpg'

import styles from './Header.module.css'
import { CSSTransition } from 'react-transition-group'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveUserLogout,
  setEditFalse,
} from '../contentOfLoginPage/createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'
import { setClearRegistration } from '../contentOfLoginPage/createAccountAndRegisteredAccount/createAccountSlice'
import {
  setSelectForm,
  setSearchInput,
  setSort,
  setHelper,
} from './headerSlice'

import vehiclePageCars from '../../data/vehiclePageCars'

const Header = () => {
  const { searchInput, selectForm, helper } = useSelector(
    (store) => store.headerSlice
  )

  //Search HandleControll by RTK -----
  const handleCategoryChange = (e) => {
    const { value } = e.target
    dispatch(setSelectForm({ searchCategory: value }))
    dispatch(setSort(false))
  }

  const handleInputChange = (e) => {
    dispatch(setSearchInput(e.target.value))
    dispatch(setSort(false))
  }

  const handleSearchButtonClick = () => {
    dispatch(setSort(true))
  }
  // ---------------------------------

  //Stop default event
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  //menu controll
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isMenuTwoOpen, setMenuTwoOpen] = useState(false)
  const [isMenuThreeOpen, setMenuThreeOpen] = useState(false)

  const handleMouseEnter = () => {
    setMenuOpen(true)
  }

  const handleMouseLeave = () => {
    setMenuOpen(false)
  }
  const handleMouseEnterTwo = () => {
    setMenuTwoOpen(true)
  }

  const handleMouseLeaveTwo = () => {
    setMenuTwoOpen(false)
  }
  const handleMouseEnterThree = () => {
    setMenuThreeOpen(true)
  }

  const handleMouseLeaveThree = () => {
    setMenuThreeOpen(false)
  }

  //Burger menu controll
  const [isOpen, setIsOpen] = useState(false)

  const handleClickFunctionInBurger = () => setIsOpen(!isOpen)

  const [isOpenTwo, setIsOpenTwo] = useState(false)

  const handleClickFunctionInBurgerTwo = () => setIsOpenTwo(!isOpenTwo)

  const [isOpenThree, setIsOpenThree] = useState(false)

  const handleClickFunctionInBurgerThree = () => setIsOpenThree(!isOpenThree)

  //Controll window size
  const isDesktop = useMediaQuery('(min-width: 656px)')

  const [open, setOpen] = useState(false)

  const nodeRef = React.useRef(null)

  //account
  const { accountInfo, activeUser } = useSelector(
    (store) => store.registeredAccount
  )
  //dispatch
  const dispatch = useDispatch()

  //search helper
  const filteredCars = vehiclePageCars.filter((car) => {
    const textMatch = car.text.toLowerCase().includes(searchInput.toLowerCase())

    return textMatch
  })

  const INPUTID = 'inputID'

  const handleInputHelper = () => {
    dispatch(setSearchInput(''))
    dispatch(setHelper(true))
    dispatch(setSort(false))
  }

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

  //CSSTransition for search helper

  return (
    <div className={styles.headerOverflow}>
      <div className={styles.headerRegisterOverflow}>
        <Container>
          <div className={styles.registration}>
            {activeUser ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}>
                <NavLink to="/user">
                  <p
                    style={{
                      textDecoration: 'none',
                    }}
                    onClick={() => dispatch(setEditFalse())}>
                    {accountInfo.nameAccount} {accountInfo.secondName}
                  </p>
                </NavLink>
                <hr
                  style={{
                    height: '20px',
                    color: 'white',
                    background: 'white',
                    width: '1px',
                  }}
                />
                <NavLink
                  to="/login"
                  onClick={() => {
                    dispatch(setActiveUserLogout())
                  }}>
                  <p>Logout</p>
                </NavLink>
              </div>
            ) : (
              <NavLink
                to="/login"
                onClick={() => {
                  dispatch(setClearRegistration())
                }}>
                <p>Log in</p>
              </NavLink>
            )}
          </div>
        </Container>
      </div>
      <Container>
        <div className={styles.mainHeaderBg}>
          <div className={styles.headerLogoContainer}>
            <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={headerLogo} alt="JDMexpoLogo" />
            </NavLink>
          </div>

          <div className={styles.infoAndSearchContainer}>
            <div className={styles.facebookContainer}>
              <Button variant="contained">
                <span>
                  <ThumbUpIcon sx={{ width: 15 }} />
                </span>
                <span>Follow</span>
                <span className={styles.textInSpanFacebook}>125K</span>
              </Button>
              <Button variant="contained" className={styles.shareFacebook}>
                <span>Share</span>
              </Button>
            </div>
            <div className={styles.contactContainer}>
              <div className={styles.phone}>
                <p>+81-573-66-5670</p>
              </div>
              <div className={styles.email}>
                <p>info@jdm.com</p>
              </div>
            </div>
            <div className={styles.formAndBtnContainer}>
              <div className={styles.containerSearch}>
                <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
                  <FormControl className={styles.formController}>
                    <Select
                      className="selectionOpt"
                      name="filter_type"
                      value={selectForm.searchCategory}
                      onChange={handleCategoryChange}>
                      <MenuItem value="Maker">Maker</MenuItem>
                      <MenuItem value="honda">HONDA</MenuItem>
                      <MenuItem value="mazda">MAZDA</MenuItem>
                      <MenuItem value="mitsubishi">MITSUBISHI</MenuItem>
                      <MenuItem value="nissan">NISSAN</MenuItem>
                      <MenuItem value="subaru">SUBARU</MenuItem>
                      <MenuItem value="toyota">TOYOTA</MenuItem>
                    </Select>
                  </FormControl>
                  <input
                    id={INPUTID}
                    name="searchInput"
                    type="search"
                    value={searchInput}
                    onChange={handleInputChange}
                    onClick={handleInputHelper}
                    placeholder="I am looking for..."
                    autoComplete="off"
                  />
                  <CSSTransition
                    nodeRef={nodeRef}
                    in={helper}
                    timeout={300}
                    classNames="helper"
                    unmountOnExit={true}>
                    {() =>
                      helper && filteredCars.length === 0 ? (
                        ''
                      ) : (
                        <div
                          ref={nodeRef}
                          style={{
                            maxHeight: '200px',
                            position: 'absolute',
                            bottom: '100',
                            background: '#fff',
                            zIndex: '9999',
                            width: '230px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            border: '1px solid black',
                            borderRadius: '4px',
                            padding: '5px',
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: '12px',
                            overflow: 'hidden',
                          }}>
                          {filteredCars.map((car) => (
                            <p
                              onClick={() => dispatch(setSearchInput(car.text))}
                              className={styles.hoverForHelpSearchMenu}
                              key={car.id}>
                              {car.text}
                            </p>
                          ))}
                          {filteredCars.length === 19 && (
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '0px',
                                width: '100%',
                                height: '25px',
                                background: '#fff',
                                display: 'flex',
                                justifyContent: 'center',
                                fontFamily: "'Open Sans', sans-serif",
                                fontWeight: 'bold',
                                fontSize: '15px',
                                cursor: 'default',
                              }}>
                              <span style={{ padding: '0px 10px 0px 0px' }}>
                                ...
                              </span>
                            </div>
                          )}
                        </div>
                      )
                    }
                  </CSSTransition>
                </form>
              </div>

              <div className={styles.afterContainer}>
                <NavLink to="search">
                  <div
                    className={styles.submitBtn}
                    onClick={handleSearchButtonClick}>
                    <SearchIcon className={styles.searchIco} />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <AppBar position="relative" className={styles.appBar}>
          {isDesktop && (
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
                      isMenuOpen ? styles.openMenu : ''
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <ListItem>VEHICLE INVENTORY</ListItem>
                  </NavLink>

                  <ListItem className={styles.listItem}>
                    JAPAN CAR AUCTION
                  </ListItem>
                  <ListItem
                    className={`${styles.listItem} ${
                      isMenuTwoOpen ? styles.openMenu : ''
                    }`}
                    onMouseEnter={handleMouseEnterTwo}
                    onMouseLeave={handleMouseLeaveTwo}>
                    COMPANY PROFILE
                  </ListItem>
                  <ListItem className={styles.listItem}>
                    USA JDM IMPORTS
                  </ListItem>
                  <NavLink
                    to="/how-to-buy"
                    onClick={() => window.scrollTo(0, 0)}
                    className={styles.listItem}>
                    <ListItem>HOW TO BUY?</ListItem>
                  </NavLink>
                  <ListItem
                    className={`${styles.listItem} ${
                      isMenuThreeOpen ? styles.openMenu : ''
                    }`}
                    onMouseEnter={handleMouseEnterThree}
                    onMouseLeave={handleMouseLeaveThree}>
                    SOCIAL MEDIA
                  </ListItem>
                  <ListItem className={styles.listItem}>CONTACT US</ListItem>
                  <ListItem className={styles.listItem}>FAQ</ListItem>
                </List>
              </Toolbar>
              <CSSTransition
                nodeRef={nodeRef}
                in={isMenuOpen}
                timeout={300}
                classNames="absoluteInventory"
                mountOnEnter
                unmountOnExit>
                <div
                  ref={nodeRef}
                  className={styles.absoluteInventory}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <NavLink
                    to="/vehicle-inventory/jdm-sports"
                    onClick={() => window.scrollTo(0, 0)}
                    className={styles.sectionInventory}>
                    <img src={jdmSports} alt="jdm-sports" />
                    <Typography className={styles.textInSection}>
                      JDM SPORTS
                    </Typography>
                  </NavLink>
                  <NavLink
                    to="/vehicle-inventory/jdm-classic"
                    onClick={() => window.scrollTo(0, 0)}
                    className={`${styles.sectionInventory} ${styles.borderSection}`}>
                    <img src={jdmClassic} alt="jdm-classic" />
                    <Typography className={styles.textInSection}>
                      JDM CLASSIC
                    </Typography>
                  </NavLink>
                  <NavLink
                    to="/vehicle-inventory/non-jdm"
                    onClick={() => window.scrollTo(0, 0)}
                    className={styles.sectionInventory}>
                    <img src={nonJdm} alt="non-jdm" />
                    <Typography className={styles.textInSection}>
                      NON JDM
                    </Typography>
                  </NavLink>
                </div>
              </CSSTransition>
              <CSSTransition
                nodeRef={nodeRef}
                in={isMenuTwoOpen}
                timeout={300}
                classNames="companyProfile"
                mountOnEnter
                unmountOnExit>
                <div
                  ref={nodeRef}
                  className={styles.companyProfile}
                  onMouseEnter={handleMouseEnterTwo}
                  onMouseLeave={handleMouseLeaveTwo}>
                  <div className={styles.companySection}>
                    <Typography className={styles.textInCompany}>
                      ABOUT US
                    </Typography>
                  </div>
                  <div
                    className={`${styles.companySection} ${styles.borderCompanySectionOne}`}>
                    <Typography className={styles.textInCompany}>
                      OUR SERVICES
                    </Typography>
                  </div>
                  <div
                    className={`${styles.companySection} ${styles.borderCompanySectionTwo}`}>
                    <Typography className={styles.textInCompany}>
                      WHY CHOOSE US
                    </Typography>
                  </div>
                  <div className={styles.companySection}>
                    <Typography className={styles.textInCompany}>
                      TESTIMONIALS
                    </Typography>
                  </div>
                </div>
              </CSSTransition>
              <CSSTransition
                nodeRef={nodeRef}
                in={isMenuThreeOpen}
                timeout={300}
                classNames="companyProfile"
                mountOnEnter
                unmountOnExit>
                <div
                  ref={nodeRef}
                  className={styles.mediaProfile}
                  onMouseEnter={handleMouseEnterThree}
                  onMouseLeave={handleMouseLeaveThree}>
                  <div className={styles.mediaSection}>
                    <Typography className={styles.textInMedia}>
                      MEDIA
                    </Typography>
                  </div>
                  <div
                    className={`${styles.mediaSection} ${styles.borderMediaSectionOne}`}>
                    <Typography className={styles.textInMedia}>BLOG</Typography>
                  </div>
                  <div
                    className={`${styles.mediaSection} ${styles.borderMediaSectionTwo}`}>
                    <Typography className={styles.textInMedia}>
                      FACEBOOK
                    </Typography>
                  </div>
                  <div className={styles.mediaSection}>
                    <Typography className={styles.textInMedia}>
                      FORUM
                    </Typography>
                  </div>
                </div>
              </CSSTransition>
            </>
          )}

          {!isDesktop && (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon className={styles.burgerBtn} />
            </IconButton>
          )}

          {!isDesktop && (
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
                    isOpen ? styles.activeBurgerVehicle : ''
                  }`}>
                  {!isOpen && <p>VEHICLE INVENTORY</p>}
                  {isOpen && (
                    <NavLink
                      to="/vehicle-inventory"
                      onClick={() => {
                        window.scrollTo(0, 0)
                        setOpen(false)
                      }}>
                      <p>VEHICLE INVENTORY</p>
                    </NavLink>
                  )}

                  <CSSTransition
                    nodeRef={nodeRef}
                    in={isOpen}
                    timeout={300}
                    classNames="dropdown"
                    unmountOnExit>
                    <div
                      ref={nodeRef}
                      className={`${
                        isOpen
                          ? styles.dropVehicleInventory
                          : styles.notOpenVehicleInventory
                      }`}>
                      <NavLink
                        to="/vehicle-inventory/:jdm-sports"
                        onClick={() => {
                          window.scrollTo(0, 0)
                          setOpen(false)
                        }}>
                        <div className={styles.jdmSectionInBurger}>
                          <p>JDM SPORTS</p>
                          <img src={jdmSports} alt="jdm-sports" />
                        </div>
                      </NavLink>
                      <NavLink
                        to="/vehicle-inventory/:jdm-classic"
                        onClick={() => {
                          window.scrollTo(0, 0)
                          setOpen(false)
                        }}>
                        <div className={styles.jdmSectionInBurger}>
                          <p>JDM CLASSIC</p>
                          <img src={jdmClassic} alt="jdm-classic" />
                        </div>
                      </NavLink>
                      <NavLink
                        to="/vehicle-inventory/:non-jdm"
                        onClick={() => {
                          window.scrollTo(0, 0)
                          setOpen(false)
                        }}>
                        <div className={styles.jdmSectionInBurger}>
                          <p>NON JDM</p>
                          <img src={nonJdm} alt="non-jdm" />
                        </div>
                      </NavLink>
                    </div>
                  </CSSTransition>
                </ListItem>
                <ListItem className={styles.listIntemInBurgerMenu}>
                  <p>JAPAN CAR AUCTION</p>
                </ListItem>
                <ListItem
                  onClick={handleClickFunctionInBurgerTwo}
                  className={`${styles.listIntemInBurgerMenuVehicleInventory} ${
                    isOpenTwo ? styles.activeBurgerVehicle : ''
                  }`}>
                  <p>COMPANY PROFILE</p>
                  <CSSTransition
                    nodeRef={nodeRef}
                    in={isOpenTwo}
                    timeout={300}
                    classNames="dropdown"
                    unmountOnExit>
                    <div
                      ref={nodeRef}
                      className={`${
                        isOpenTwo
                          ? styles.dropVehicleInventory
                          : styles.notOpenVehicleInventory
                      }`}>
                      <div className={styles.jdmSectionInBurger}>
                        <p> ABOUT US</p>
                      </div>
                      <div className={styles.jdmSectionInBurger}>
                        <p>OUR SERVICES</p>
                      </div>
                      <div className={styles.jdmSectionInBurger}>
                        <p>WHY CHOOSE US</p>
                      </div>
                      <div className={styles.jdmSectionInBurger}>
                        <p> TESTIMONIALS</p>
                      </div>
                    </div>
                  </CSSTransition>
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
                    isOpenThree ? styles.activeBurgerVehicle : ''
                  }`}>
                  <p>SOCIAL MEDIA</p>
                  <CSSTransition
                    nodeRef={nodeRef}
                    in={isOpenThree}
                    timeout={300}
                    classNames="dropdown"
                    unmountOnExit>
                    <div
                      ref={nodeRef}
                      className={`${
                        isOpenThree
                          ? styles.dropVehicleInventory
                          : styles.notOpenVehicleInventory
                      }`}>
                      <div className={styles.jdmSectionInBurger}>
                        <p>MEDIA</p>
                      </div>
                      <div className={styles.jdmSectionInBurger}>
                        <p>FACEBOOK</p>
                      </div>
                      <div className={styles.jdmSectionInBurger}>
                        <p>FORUM</p>
                      </div>
                    </div>
                  </CSSTransition>
                </ListItem>
                <ListItem className={styles.listIntemInBurgerMenu}>
                  <p>CONTACT US</p>
                </ListItem>
                <ListItem className={styles.listIntemInBurgerMenu}>
                  <p>FAQ</p>
                </ListItem>
              </List>
            </SwipeableDrawer>
          )}
        </AppBar>
      </Container>
      <div className={styles.underHeader} />
    </div>
  )
}

export default Header
