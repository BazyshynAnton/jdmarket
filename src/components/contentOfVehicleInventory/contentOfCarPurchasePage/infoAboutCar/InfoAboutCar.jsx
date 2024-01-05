import {
  useDispatch,
  useEffect,
  useSelector,
  useState,
} from '../../../shared/utils/reactImports'
import { setFavoriteCar } from '../../../contentOfLoginPage/createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'
import swal from '../../../shared/utils/swalImports'

import VideoAboutCar from './VideoAboutCar'

import styles from './InfoAndVideoAboutCar.module.scss'

const colorForInformation = {
  color: '#800000',
}

const key = '8402'

const InfoAboutCar = () => {
  const dispatch = useDispatch()
  const { activeUser, favoriteCar } = useSelector(
    (store) => store.registeredAccount
  )

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 236)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 236)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles.mainInfoContainer}>
      <h1>Nissan Skyline GTR R34 V spec (N.8402)</h1>
      {!!isDesktop && (
        <div className={styles.mainTxtContainer}>
          <div className={styles.info}>
            <p>Stock number:</p>
            <p>Mileage:</p>
            <p>Year:</p>
            <p>Fuel:</p>
            <p>Chassis number:</p>
            <p>Transmission:</p>
          </div>
          <div className={styles.info}>
            <p>#8402</p>
            <p>40,941 km</p>
            <p>10/1999</p>
            <p>Gasoline</p>
            <p>BNR34-005552</p>
            <p>M/T6</p>
          </div>
        </div>
      )}
      {!isDesktop && (
        <div className={styles.mainTxtContainer}>
          <div className={styles.info}>
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
          </div>
        </div>
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
    </div>
  )
}

export default InfoAboutCar
