import { CSSTransition } from 'react-transition-group'
import React, { useEffect, useState } from 'react'
import { Box, Container } from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

import styles from './BackToTopBtn.module.css'

const BackToTopBtn = () => {
  const nodeRef = React.useRef(null)

  const [backToTopBtn, setBackToTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true)
      } else {
        setBackToTopBtn(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTwo, setIsOpenTwo] = useState(false)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }
  const handleMouseEnterTwo = () => {
    setIsOpenTwo(true)
  }

  const handleMouseLeaveTwo = () => {
    setIsOpenTwo(false)
  }

  return (
    <Container>
      <Box className={styles.mainContainer}>
        <CSSTransition
          nodeRef={nodeRef}
          in={backToTopBtn}
          timeout={300}
          classNames="fadeBackToTopBtn"
          mountOnEnter
          unmountOnExit>
          <Box ref={nodeRef} className={styles.backToTopBtnMainContainer}>
            <CSSTransition
              nodeRef={nodeRef}
              in={isOpen}
              timeout={300}
              classNames="infoMail"
              mountOnEnter
              unmountOnExit>
              <Box
                ref={nodeRef}
                className={styles.infoMail}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <p>info@jdm.com</p>
              </Box>
            </CSSTransition>
            <Box onClick={scrollUp} className={styles.backToTopBtnIcon}>
              <DoubleArrowIcon />
            </Box>
            <Box
              className={styles.emailIcon}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <EmailIcon />
            </Box>
            <CSSTransition
              nodeRef={nodeRef}
              in={isOpenTwo}
              timeout={300}
              classNames="infoMail"
              mountOnEnter
              unmountOnExit>
              <Box
                ref={nodeRef}
                className={styles.infoPhone}
                onMouseEnter={handleMouseEnterTwo}
                onMouseLeave={handleMouseLeaveTwo}>
                <p>+81-573-56766</p>
              </Box>
            </CSSTransition>
            <Box
              className={styles.phoneIcon}
              onMouseEnter={handleMouseEnterTwo}
              onMouseLeave={handleMouseLeaveTwo}>
              <PhoneIcon />
            </Box>
          </Box>
        </CSSTransition>
      </Box>
    </Container>
  )
}

export default BackToTopBtn
