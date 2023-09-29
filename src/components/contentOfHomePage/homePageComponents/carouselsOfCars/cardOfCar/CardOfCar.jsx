import swal from 'sweetalert'
import { Box } from '@mui/material'
import styles from '../CarouselsOfCars.module.css'
import { NavLink } from 'react-router-dom'

const CardOfCar = ({ text, img, id }) => {
  return (
    <Box className={styles.cardOfCarsContainer}>
      <Box className={styles.imgContainer}>
        <img src={img} alt="car" />
      </Box>
      <Box className={styles.cardTextAndButton}>
        <p>{text}</p>
        {id === '8402' && (
          <button>
            <NavLink to="/vehicle-inventory/8f22002c-8568-4e5b-829c-84cebeea1130">
              view details
            </NavLink>
          </button>
        )}
        {id !== '8402' && (
          <button
            onClick={() =>
              swal({
                title: 'Oops...',
                text: 'Car Has Already Been Sold.',
              })
            }>
            view details
          </button>
        )}
      </Box>
    </Box>
  )
}

export default CardOfCar
