import { Box } from '@mui/material'
import styles from './CarouselSlide.module.css'

const Item = ({ slide }) => {
  return (
    <Box className={styles.imgContainerSlide}>
      <Box className={styles.titleOnSlide}>
        <Box className={styles.bgAndText}>
          <h3>{slide.header}</h3>
          <p>{slide.text}</p>
        </Box>
      </Box>
      <img src={slide.img} alt={slide.title} />
    </Box>
  )
}

export default Item
