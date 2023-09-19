import { Box } from '@mui/material'
import styles from '../CarouselsOfCars.module.css'

const CardOfManufacture = ({ img }) => {
  return (
    <Box className={styles.cardOfManufactureContainer}>
      <img src={img} alt="car" />
    </Box>
  )
}

export default CardOfManufacture
