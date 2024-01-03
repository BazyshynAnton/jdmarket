import { useDispatch, useState, NavLink } from '../../shared/utils/reactImports'
import { setSort } from '../headerSlice'

import HeaderSearch from './HeaderSearch'

import thumbUpIcon from '../../../assets/pictures/app-icons/thumbUpIcon.png'
import searchIcon from '../../../assets/pictures/app-icons/searchIcon.png'
import searchIconRed from '../../../assets/pictures/app-icons/searchIconRed.png'

import styles from '../Header.module.scss'

const stylesForComponent = {
  follow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)',
    background: '#4267b2',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '11px',
    height: '19px',
    minWidth: '110px',
  },
  share: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)',
    background: '#4267b2',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '11px',
    height: '19px',
    minWidth: '50px',
  },

  forSpan: {
    fontWeight: 'bold',
    padding: '5px 3px 5px 3px',
    display: 'inline-block',
    verticalAlign: ' middle',
    lineHeight: 'normal',
    textTransform: 'none',
  },
  forFacebookContainer: {
    padding: '10px 0px 0px 0px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '5px',
  },
}

const SearchIconComponent = () => {
  const dispatch = useDispatch()

  const handleSearchButtonClick = () => {
    dispatch(setSort(true))
  }

  const [isIconRed, setIsIconRed] = useState(false)
  const handleChangeIconColor = () => {
    setIsIconRed(!isIconRed)
  }

  return (
    <div className={styles.infoAndSearchContainer}>
      <div style={stylesForComponent.forFacebookContainer}>
        <button style={stylesForComponent.follow}>
          <span>
            <img
              style={{ width: '12px', height: '13px' }}
              src={thumbUpIcon}
              alt="up"
            />
          </span>
          <span style={stylesForComponent.forSpan}>Follow</span>
          <span style={{ fontWeight: 'normal' }}>125K</span>
        </button>
        <button style={stylesForComponent.share}>
          <span style={stylesForComponent.forSpan}>Share</span>
        </button>
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
          <HeaderSearch />
        </div>

        <div
          className={styles.afterContainer}
          onMouseEnter={handleChangeIconColor}
          onMouseLeave={handleChangeIconColor}
        >
          <NavLink to="search">
            <div className={styles.submitBtn} onClick={handleSearchButtonClick}>
              {isIconRed ? (
                <img
                  style={{ width: '18px', height: '18px', zIndex: '1000' }}
                  src={searchIconRed}
                  alt="search"
                />
              ) : (
                <img
                  style={{ width: '18px', height: '18px', zIndex: '1000' }}
                  src={searchIcon}
                  alt="search"
                />
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default SearchIconComponent
