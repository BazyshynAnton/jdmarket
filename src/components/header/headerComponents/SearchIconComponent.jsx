import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import SearchIcon from '@mui/icons-material/Search'
import HeaderSearch from './HeaderSearch'
import styles from '../Header.module.css'
import { useDispatch } from 'react-redux'

import { setSort } from '../headerSlice'

const SearchIconComponent = () => {
  const dispatch = useDispatch()

  const handleSearchButtonClick = () => {
    dispatch(setSort(true))
  }

  return (
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
          <HeaderSearch />
        </div>

        <div className={styles.afterContainer}>
          <NavLink to="search">
            <div className={styles.submitBtn} onClick={handleSearchButtonClick}>
              <SearchIcon className={styles.searchIco} />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default SearchIconComponent
