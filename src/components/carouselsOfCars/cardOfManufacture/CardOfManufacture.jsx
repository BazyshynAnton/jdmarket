import { Box } from '@mui/material'
import styles from '../CarouselsOfCars.module.css'

const CardOfManufacture = ({ img }) => {
  return (
    <Box className={styles.cardOfManufactureContainer}>
      <Box className={styles.imgManufactureContainer}>
        <img src={img} alt="car" />
      </Box>
    </Box>
  )
}

export default CardOfManufacture
