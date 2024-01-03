import {
  useEffect,
  useState,
  NavLink,
  useDispatch,
  useSelector,
  Suspense,
  lazy,
} from '../shared/utils/reactImports'
import { setHelper } from './headerSlice'

import HeaderLoginLogoutBlackLine from './headerComponents/HeaderLoginLogoutBlackLine'
import SearchIconComponent from './headerComponents/SearchIconComponent'
import AppBarForBigScreens from './headerComponents/AppBarForBigScreens'

import menuIcon from '../../assets/pictures/app-icons/menuIcon.png'
import headerLogo from '../../pictures/head-logo.png'

import styles from './Header.module.scss'

const AppBarForSmallScreens = lazy(() =>
  import('./headerComponents/AppBarForSmallScreens')
)

const Header = () => {
  const INPUTID = 'inputID'

  const { helper } = useSelector((store) => store.headerSlice)

  //Controll window size
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 656)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 656)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
      <div className="my-container">
        <div className={styles.mainHeaderBg}>
          <div className={styles.headerLogoContainer}>
            <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={headerLogo} alt="JDMexpoLogo" />
            </NavLink>
          </div>

          <SearchIconComponent />
        </div>

        <div className={styles.appBar}>
          {isDesktop && (
            <>
              <AppBarForBigScreens />
            </>
          )}

          {!isDesktop && (
            <button
              style={{ cursor: 'pointer', background: 'none' }}
              onClick={() => setOpen(true)}
            >
              <img
                style={{ width: '35px', height: '30px' }}
                src={menuIcon}
                alt="menu"
              />
            </button>
          )}

          {!isDesktop && (
            <Suspense>
              <AppBarForSmallScreens open={open} setOpen={setOpen} />
            </Suspense>
          )}
        </div>
      </div>
      <div className={styles.underHeader} />
    </div>
  )
}

export default Header
