import { NavLink } from 'react-router-dom'
import { Container } from '@mui/material'

import InfromationDesk from '../../contentOfHomePage/homePageComponents/informationDesk/InformationDesk'
import ImageInformationDesk from './imageInformationDesk/ImageInformationDesk'
import FeaturedCars from '../../contentOfHomePage/homePageComponents/carouselsOfCars/featuredCars/FeaturedCars'
import ForumBanner from '../../contentOfHomePage/homePageComponents/forumBanner/ForumBanner'

import styles from './ContentOfCarPurchasePage.module.css'

const ContentOfCarPurchasePage = () => {
  return (
    <Container>
      <div className={styles.navigation}>
        <NavLink to="/" className={styles.activeNav}>
          HOME
        </NavLink>
        <p>{'>'}</p>
        <NavLink to="/vehicle-inventory" className={styles.activeNav}>
          VEHICLE INVENTORY
        </NavLink>
        <p>{'>'}</p>
        <p>Purchase page</p>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.containerInfoAndSlider}>
          <ImageInformationDesk />
        </div>
      </div>

      <FeaturedCars />
      <ForumBanner />
      <InfromationDesk />
    </Container>
  )
}

export default ContentOfCarPurchasePage
