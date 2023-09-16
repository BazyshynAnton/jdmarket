import { Box } from '@mui/material'
import styles from '../CarouselsOfCars.module.css'

const CardOfCar = ({ text, img }) => {
  return (
    <Box className={styles.cardOfCarsContainer}>
      <Box className={styles.imgContainer}>
        <img src={img} alt="car" />
      </Box>
      <Box className={styles.cardTextAndButton}>
        <p>{text}</p>
        <button>view details</button>
      </Box>
    </Box>
  )
}

export default CardOfCar
