import {
  useState,
  NavLink,
  useDispatch,
  useSelector,
} from '../../../shared/utils/reactImports'
import { setRemoveFavoriteCar } from '../../../contentOfLoginPage/createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'

import swal from '../../../shared/utils/swalImports'

import cancelIcon from '../../../../assets/pictures/app-icons/cancelIcon.png'
import cancelIconRed from '../../../../assets/pictures/app-icons/cancelIconRed.png'

import styles from '../ContentOfUserPage.module.scss'

import styleTwo from '../../../contentOfHomePage/homePageComponents/carouselsOfCars/CarouselsOfCars.module.scss'

const CardOfFavoriteCars = ({ text, img, id }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const handleMouseOver = () => {
    setIsButtonHovered(true)
  }
  const handleMouseLeave = () => {
    setIsButtonHovered(false)
  }

  const dispatch = useDispatch()
  const { favoriteCar } = useSelector((store) => store.registeredAccount)
  return (
    <div className={styles.cardOfCarsContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt="car" />
      </div>

      {id === '8402' && (
        <>
          <div className={styles.cardTextAndButton}>
            <p style={{ fontFamily: 'Open Sans, sans-serif' }}>{text}</p>
            <NavLink
              to="/vehicle-inventory/8f22002c-8568-4e5b-829c-84cebeea1130"
              className={styleTwo.styleForCarLinkBtn}
            >
              view details
            </NavLink>
          </div>
          <div style={{ width: '100%' }}>
            <div
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              className={styles.removeFromFavorites}
              onClick={() =>
                dispatch(setRemoveFavoriteCar(favoriteCar.id.replace(id, '')))
              }
            >
              <p style={{ fontFamily: 'Open Sans, sans-serif' }}>Remove</p>
              {!isButtonHovered ? (
                <img
                  style={{ width: '20px', height: '20px' }}
                  src={cancelIcon}
                  alt="remove"
                />
              ) : (
                <img
                  style={{ width: '20px', height: '20px' }}
                  src={cancelIconRed}
                  alt="remove"
                />
              )}
            </div>
          </div>
        </>
      )}
      {id !== '8402' && (
        <>
          <div className={styles.cardTextAndButton}>
            <p>{text}</p>
            <button
              style={styleTwo.styleForCarLinkBtn}
              onClick={() =>
                swal({
                  title: 'Oops...',
                  text: 'Car Has Already Been Sold.',
                })
              }
            >
              view details
            </button>
          </div>
          <div style={{ width: '100%' }}>
            <div
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              className={styles.removeFromFavorites}
              onClick={() => {
                dispatch(setRemoveFavoriteCar(favoriteCar.id.replace(id, '')))
              }}
            >
              <p>Remove</p>
              {!isButtonHovered ? (
                <img
                  style={{ width: '20px', height: '20px' }}
                  src={cancelIcon}
                  alt="remove"
                />
              ) : (
                <img
                  style={{ width: '20px', height: '20px' }}
                  src={cancelIconRed}
                  alt="remove"
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CardOfFavoriteCars
