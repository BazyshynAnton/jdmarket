import Header from '../header/Header'
import CarouselSlide from './homePageComponents/carouselSlide/CarouselSlide'
import { Box, Container } from '@mui/material'
import styles from './ContentOfHomePage.module.css'
import Panel from './homePageComponents/panel/Panel'
import LatestArrivals from './homePageComponents/carouselsOfCars/latestArrivals/LatestArrivals'
import FeaturedCars from './homePageComponents/carouselsOfCars/featuredCars/FeaturedCars'
import InventoryByManufactures from './homePageComponents/carouselsOfCars/inventoryByManufactures/InventoryByManufactures'
import ForumBanner from './homePageComponents/forumBanner/ForumBanner'
import InformationDesk from './homePageComponents/informationDesk/InformationDesk'
import Footer from '../footer/Footer'

const ContentOfHomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Box className={styles.containerCarouselAndPanel}>
          <CarouselSlide />
          <Panel />
        </Box>
        <LatestArrivals />
        <FeaturedCars />
        <InventoryByManufactures />
        <ForumBanner />
        <InformationDesk />
      </Container>
      <Footer />
    </>
  )
}

export default ContentOfHomePage
