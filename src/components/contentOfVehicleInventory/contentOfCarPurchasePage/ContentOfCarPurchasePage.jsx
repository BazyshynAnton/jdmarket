import { Container, Box } from '@mui/material'
import ImageInformationDesk from './imageInformationDesk/ImageInformationDesk'
import styles from './ContentOfCarPurchasePage.module.css'
import OrderSheet from './orderSheet/OrderSheet'
import FeaturedCars from '../../contentOfHomePage/homePageComponents/carouselsOfCars/featuredCars/FeaturedCars'
import ForumBanner from '../../contentOfHomePage/homePageComponents/forumBanner/ForumBanner'
import InfromationDesk from '../../contentOfHomePage/homePageComponents/informationDesk/InformationDesk'
import { NavLink } from 'react-router-dom'

const ContentOfCarPurchasePage = () => {
  return (
    <Container>
      <Box className={styles.navigation}>
        <NavLink to="/" className={styles.activeNav}>
          HOME
        </NavLink>
        <p>{'>'}</p>
        <NavLink to="/vehicle-inventory" className={styles.activeNav}>
          VEHICLE INVENTORY
        </NavLink>
        <p>{'>'}</p>
        <p>Purchase page</p>
      </Box>
      <Box className={styles.mainContainer}>
        <Box className={styles.containerInfoAndSlider}>
          <ImageInformationDesk />
        </Box>
      </Box>

      <FeaturedCars />
      <ForumBanner />
      <InfromationDesk />
    </Container>
  )
}

export default ContentOfCarPurchasePage
