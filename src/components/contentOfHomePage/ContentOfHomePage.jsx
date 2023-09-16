import Header from '../header/Header'
import CarouselSlide from '../carouselSlide/CarouselSlide'
import { Box, Container } from '@mui/material'
import styles from './ContentOfHomePage.module.css'
import Panel from '../panel/Panel'
import LatestArrivals from '../carouselsOfCars/latestArrivals/LatestArrivals'
import FeaturedCars from '../carouselsOfCars/featuredCars/FeaturedCars'
import InventoryByManufactures from '../carouselsOfCars/inventoryByManufactures/InventoryByManufactures'
import ForumBanner from '../forumBanner/ForumBanner'
import InformationDesk from '../informationDesk/informationDesk'

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
    </>
  )
}

export default ContentOfHomePage
