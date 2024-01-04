import {
  useEffect,
  useRef,
  useState,
  CSSTransition,
  LazyLoadImage,
} from '../shared/utils/reactImports'

import doubleArrowIcon from '../../assets/pictures/app-icons/doubleArrowIcon.png'
import mailIcon from '../../assets/pictures/app-icons/mailIcon.png'
import phoneIcon from '../../assets/pictures/app-icons/phoneIcon.png'

import styles from './BackToTopBtn.module.scss'

const stylesForImg = { width: '24px', height: '24px' }

const BackToTopBtn = () => {
  const nodeRef1 = useRef(null)
  const nodeRef2 = useRef(null)
  const nodeRef3 = useRef(null)

  const [backToTopBtn, setBackToTopBtn] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTwo, setIsOpenTwo] = useState(false)
  const [leaveDelay, setLeaveDelay] = useState(null)
  const [leaveDelayTwo, setLeaveDelayTwo] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopBtn(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="my-container">
      <div className={styles.mainContainer}>
        <CSSTransition
          nodeRef={nodeRef1}
          in={backToTopBtn}
          timeout={300}
          classNames="fadeBackToTopBtn"
          mountOnEnter
          unmountOnExit
        >
          <div ref={nodeRef1} className={styles.backToTopBtnMainContainer}>
            <div onClick={scrollUp} className={styles.backToTopBtnIcon}>
              <LazyLoadImage
                style={stylesForImg}
                src={doubleArrowIcon}
                alt="scroll-to-top"
              />
            </div>
            <div
              className={styles.emailIcon}
              onMouseEnter={() => {
                clearTimeout(leaveDelay)
                setIsOpen(true)
              }}
              onMouseLeave={() => {
                setLeaveDelay(
                  setTimeout(() => {
                    setIsOpen(false)
                  }, 300)
                )
              }}
            >
              <LazyLoadImage style={stylesForImg} src={mailIcon} alt="mail" />

              <CSSTransition
                nodeRef={nodeRef2}
                in={isOpen}
                timeout={300}
                classNames="infoMail"
                mountOnEnter
                unmountOnExit
              >
                <div
                  ref={nodeRef2}
                  className={styles.infoMail}
                  onMouseEnter={() => {
                    clearTimeout(leaveDelay)
                    setIsOpen(true)
                  }}
                  onMouseLeave={() => {
                    setLeaveDelay(
                      setTimeout(() => {
                        setIsOpen(false)
                      }, 300)
                    )
                  }}
                >
                  <p>info@jdm.com</p>
                </div>
              </CSSTransition>
            </div>

            <div
              className={styles.phoneIcon}
              onMouseEnter={() => {
                clearTimeout(leaveDelayTwo)
                setIsOpenTwo(true)
              }}
              onMouseLeave={() => {
                setLeaveDelayTwo(
                  setTimeout(() => {
                    setIsOpenTwo(false)
                  }, 300)
                )
              }}
            >
              <LazyLoadImage style={stylesForImg} src={phoneIcon} alt="phone" />

              <CSSTransition
                nodeRef={nodeRef3}
                in={isOpenTwo}
                timeout={300}
                classNames="infoMail"
                mountOnEnter
                unmountOnExit
              >
                <div
                  ref={nodeRef3}
                  className={styles.infoPhone}
                  onMouseEnter={() => {
                    clearTimeout(leaveDelayTwo)
                    setIsOpenTwo(true)
                  }}
                  onMouseLeave={() => {
                    setLeaveDelayTwo(
                      setTimeout(() => {
                        setIsOpenTwo(false)
                      }, 300)
                    )
                  }}
                >
                  <p>+81-573-56766</p>
                </div>
              </CSSTransition>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}

export default BackToTopBtn
