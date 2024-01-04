import { NavLink, LazyLoadImage } from '../../../../shared/utils/reactImports'

import swal from '../../../../shared/utils/swalImports'

import styles from '../CarouselsOfCars.module.scss'

const CardOfCar = ({ text, img, id }) => {
  return (
    <div className={styles.cardOfCarsContainer}>
      <div className={styles.imgContainer}>
        <LazyLoadImage src={img} alt="car" />
      </div>
      <div className={styles.cardTextAndButton}>
        <p style={{ fontFamily: 'Open Sans, sans-serif' }}>{text}</p>
        {id === '8402' && (
          <NavLink
            to="/vehicle-inventory/8f22002c-8568-4e5b-829c-84cebeea1130"
            onClick={() => window.scrollTo(0, 0)}
            className={styles.styleForCarLinkBtn}
          >
            view details
          </NavLink>
        )}
        {id !== '8402' && (
          <button
            style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold' }}
            onClick={() =>
              swal({
                title: 'Oops...',
                text: 'Car Has Already Been Sold.',
              })
            }
          >
            view details
          </button>
        )}
      </div>
    </div>
  )
}

export default CardOfCar
