import { Box, useMediaQuery } from '@mui/material'
import { NavLink } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel'
import styles from '../ContentOfUserPage.module.css'

import { setRemoveFavoriteCar } from '../../../contentOfLoginPage/createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const stylesForCardOfFavoriteCars = {
  btn: {
    marginLeft: '10px',
    float: 'right',
    background: '#a10202',
    borderRadius: '4px',
    color: 'white',
    width: '40%',
    height: '30px',
    cursor: 'pointer',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn2: {
    float: 'right',
    background: '#a10202',
    borderRadius: '4px',
    color: 'white',
    width: '100%',
    height: '30px',
    cursor: 'pointer',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const CardOfFavoriteCars = ({ text, img, id }) => {
  const [ifStyle, setIfStyle] = useState(window.innerWidth <= 970)
  useEffect(() => {
    const handleResize = () => {
      setIfStyle(window.innerWidth <= 970)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const dispatch = useDispatch()
  const { favoriteCar } = useSelector((store) => store.registeredAccount)
  return (
    <Box className={styles.cardOfCarsContainer}>
      <Box className={styles.imgContainer}>
        <img src={img} alt="car" />
      </Box>

      {id === '8402' && (
        <>
          <Box className={styles.cardTextAndButton}>
            <p>{text}</p>
            <NavLink
              to="/vehicle-inventory/8f22002c-8568-4e5b-829c-84cebeea1130"
              style={
                ifStyle
                  ? stylesForCardOfFavoriteCars.btn2
                  : stylesForCardOfFavoriteCars.btn
              }
            >
              view details
            </NavLink>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Box
              className={styles.removeFromFavorites}
              onClick={() =>
                dispatch(setRemoveFavoriteCar(favoriteCar.id.replace(id, '')))
              }
            >
              <p>Remove</p>
              <CancelIcon className={styles.removeButton} />
            </Box>
          </Box>
        </>
      )}
      {id !== '8402' && (
        <>
          <Box className={styles.cardTextAndButton}>
            <p>{text}</p>
            <button
              style={stylesForCardOfFavoriteCars.btn}
              onClick={() =>
                swal({
                  title: 'Oops...',
                  text: 'Car Has Already Been Sold.',
                })
              }
            >
              view details
            </button>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Box
              className={styles.removeFromFavorites}
              onClick={() => {
                dispatch(setRemoveFavoriteCar(favoriteCar.id.replace(id, '')))
              }}
            >
              <p>Remove</p>
              <CancelIcon className={styles.removeButton} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  )
}

export default CardOfFavoriteCars
