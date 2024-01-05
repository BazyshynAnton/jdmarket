import { NavLink } from '../../shared/utils/reactImports'

import InformationDesk from '../../contentOfHomePage/homePageComponents/informationDesk/InformationDesk'
import ImageInformationDesk from './imageInformationDesk/ImageInformationDesk'
import FeaturedCars from '../../contentOfHomePage/homePageComponents/carouselsOfCars/featuredCars/FeaturedCars'
import ForumBanner from '../../contentOfHomePage/homePageComponents/forumBanner/ForumBanner'

import styles from './ContentOfCarPurchasePage.module.scss'

const ContentOfCarPurchasePage = () => {
  return (
    <div className="my-container">
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
      <InformationDesk />
    </div>
  )
}

export default ContentOfCarPurchasePage
