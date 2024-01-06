import {
  Suspense,
  lazy,
  useDispatch,
  useEffect,
  useSelector,
  useState,
} from '../../../shared/utils/reactImports'
import { setFavoriteCar } from '../../../contentOfLoginPage/createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'
import swal from '../../../shared/utils/swalImports'

import VideoAboutCar from './VideoAboutCar'
import TextInfoBigScreens from '../reusableComponents/TextInfoBigScreens'

import styles from '../reusableComponents/InfoAndVideoAboutCar.module.scss'

const TextInfoSmallScreens = lazy(() =>
  import('../reusableComponents/TextInfoSmallScreens')
)

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
        <TextInfoBigScreens
          stockNumber={'#8402'}
          mileage={'40,941 km'}
          year={'10/1999'}
          fuel={'Gasoline'}
          chassisNumber={'BNR34-005552'}
          transmission={'M/T6'}
        />
      )}
      {!isDesktop && (
        <Suspense>
          <TextInfoSmallScreens
            stockNumber={'#8402'}
            mileage={'40,941 km'}
            year={'10/1999'}
            fuel={'Gasoline'}
            chassisNumber={'BNR34-005552'}
            transmission={'M/T6'}
          />
        </Suspense>
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
