import { Container, Box } from '@mui/material'
import ImageInformationDesk from './imageInformationDesk/ImageInformationDesk'
import styles from './ContentOfCarPurchasePage.module.css'
import InfoAboutCar from './infoAboutCar/InfoAboutCar'
import Discribtion from './discribtion/Discribtion'

const ContentOfCarPurchasePage = () => {
  return (
    <Container>
      <Box className={styles.mainContainer}>
        <Box className={styles.containerInfoAndSlider}>
          <ImageInformationDesk />
        </Box>
      </Box>
    </Container>
  )
}

export default ContentOfCarPurchasePage
