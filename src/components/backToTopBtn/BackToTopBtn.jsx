// Importing necessary hooks and components from React and local utilities
import {
  useEffect,
  useRef,
  useState,
  CSSTransition,
  LazyLoadImage,
} from '../shared/utils/reactImports'

// Importing icons used in the component
import doubleArrowIcon from '../../assets/pictures/app-icons/doubleArrowIcon.png'
import mailIcon from '../../assets/pictures/app-icons/mailIcon.png'
import phoneIcon from '../../assets/pictures/app-icons/phoneIcon.png'

// Importing component-specific styles
import styles from './BackToTopBtn.module.scss'

// Defining styles for images
const stylesForImg = { width: '24px', height: '24px' }

// Defining the BackToTopBtn component
const BackToTopBtn = () => {
  // Creating references for the CSSTransition nodes
  const nodeRef1 = useRef(null)
  const nodeRef2 = useRef(null)
  const nodeRef3 = useRef(null)

  // State variables for controlling the visibility of the back to top button and the tooltips
  const [backToTopBtn, setBackToTopBtn] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTwo, setIsOpenTwo] = useState(false)
  // State variables for controlling the delay of the tooltips disappearing
  const [leaveDelay, setLeaveDelay] = useState(null)
  const [leaveDelayTwo, setLeaveDelayTwo] = useState(null)

  // Effect hook for handling the scroll event
  useEffect(() => {
    const handleScroll = () => {
      // If the scroll position is more than 100, show the back to top button
      setBackToTopBtn(window.scrollY > 100)
    }
    // Adding the scroll event listener
    window.addEventListener('scroll', handleScroll)
    // Removing the scroll event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Function for scrolling up smoothly
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
