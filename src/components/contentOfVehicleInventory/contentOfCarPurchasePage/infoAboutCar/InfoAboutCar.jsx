import { Box, useMediaQuery } from '@mui/material'
import styles from './InfoAndVideoAboutCar.module.css'
import VideoAboutCar from './VideoAboutCar'
import { useDispatch, useSelector } from 'react-redux'
import {
  setInFavorite,
  setFavoriteCar,
} from '../../../contentOfLoginPage/createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'
const colorForInformation = {
  color: '#800000',
}

const key = '8402'

const InfoAboutCar = () => {
  const dispatch = useDispatch()
  const { activeUser, favoriteCar } = useSelector(
    (store) => store.registeredAccount
  )

  const isDesktop = useMediaQuery('(min-width:236px)')
  return (
    <Box className={styles.mainInfoContainer}>
      <h1>Nissan Skyline GTR R34 V spec (N.8402)</h1>
      {!!isDesktop && (
        <Box className={styles.mainTxtContainer}>
          <Box className={styles.info}>
            <p>Stock number:</p>
            <p>Mileage:</p>
            <p>Year:</p>
            <p>Fuel:</p>
            <p>Chassis number:</p>
            <p>Transmission:</p>
          </Box>
          <Box className={styles.info}>
            <p>#8402</p>
            <p>40,941 km</p>
            <p>10/1999</p>
            <p>Gasoline</p>
            <p>BNR34-005552</p>
            <p>M/T6</p>
          </Box>
        </Box>
      )}
      {!isDesktop && (
        <Box className={styles.mainTxtContainer}>
          <Box className={styles.info}>
            <p>Stock number:</p>
            <p style={colorForInformation}>#8402</p>
            <p>Mileage:</p>
            <p style={colorForInformation}>40,941 km</p>
            <p>Year:</p>
            <p style={colorForInformation}>10/1999</p>
            <p>Fuel:</p>
            <p style={colorForInformation}>Gasoline</p>
            <p>Chassis number:</p>
            <p style={colorForInformation}>BNR34-005552</p>
            <p>Transmission:</p>
            <p style={colorForInformation}>M/T6</p>
          </Box>
        </Box>
      )}
      <h2>Price(USD): $245000</h2>

      {activeUser ? (
        favoriteCar.id.includes(key) ? (
          <button
            onClick={() =>
              swal({
                title: 'Again?...',
                text: 'This car has already been added to favorites!😊',
              })
            }
          >
            ✦ Add to favorites
          </button> //ALREADY
        ) : (
          <button
            onClick={() => {
              dispatch(setFavoriteCar(key))

              swal({
                title: 'Great!',
                text: 'We are waiting for your letter!😊',
              })
            }}
          >
            ✦ Add to favorites
          </button> // ADD!!!
        )
      ) : (
        <button
          onClick={() =>
            swal({
              title: 'Oops...',
              text: 'Please "Log in" or register.',
            })
          }
        >
          ✦ Add to favorites
        </button> // PLZ REGISTER!!!
      )}
      <VideoAboutCar />
    </Box>
  )
}

export default InfoAboutCar
