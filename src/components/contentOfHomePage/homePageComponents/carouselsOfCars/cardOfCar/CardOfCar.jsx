import { NavLink } from 'react-router-dom'

import swal from 'sweetalert'

import styles from '../CarouselsOfCars.module.css'

const stylesForCardOfFavoriteCars = {
  btn: {
    marginLeft: '10px',
    float: 'right',
    background: 'red',
    borderRadius: '4px',
    color: 'white',
    width: '40%',
    height: '30px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Open Sans, sans-serif',
  },
}

const CardOfCar = ({ text, img, id }) => {
  return (
    <div className={styles.cardOfCarsContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt="car" />
      </div>
      <div className={styles.cardTextAndButton}>
        <p style={{ fontFamily: 'Open Sans, sans-serif' }}>{text}</p>
        {id === '8402' && (
          <NavLink
            to="/vehicle-inventory/8f22002c-8568-4e5b-829c-84cebeea1130"
            onClick={() => window.scrollTo(0, 0)}
            className={styles.styleForCarLinkBtn}
            style={stylesForCardOfFavoriteCars.btn}>
            view details
          </NavLink>
        )}
        {id !== '8402' && (
          <button
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            onClick={() =>
              swal({
                title: 'Oops...',
                text: 'Car Has Already Been Sold.',
              })
            }>
            view details
          </button>
        )}
      </div>
    </div>
  )
}

export default CardOfCar
