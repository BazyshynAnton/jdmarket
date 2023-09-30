import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'
import CardSale from './cardSale/CardSale'

import jdmSports from '../../../pictures/jdmSports.jpg'
import jdmClassic from '../../../pictures/jdmClassic.jpg'
import nonJdm from '../../../pictures/nonJdm.jpg'
import vehiclePageCars from '../../../data/vehiclePageCars'

import styles from './CarSale.module.css'

const CarSale = () => {
  return (
    <>
      <Box className={styles.mainNavAndSectionContainer}>
        <Box className={styles.navContainer}>
          <NavLink
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className={styles.homeBtn}
          >
            <p>HOME</p>
          </NavLink>
          <p>{'>'}</p>
          <p>VEHICLE INVENTORY</p>
        </Box>

        <Box className={styles.sectionsContainer}>
          <NavLink
            to="/vehicle-inventory/jdm-sports"
            onClick={() => window.scrollTo(0, 0)}
            className={`${styles.linkStyleForSection} ${styles.section}`}
          >
            <img src={jdmSports} alt="jdm-sports" />

            <p>
              <i>JDM SPORTS</i>
            </p>
          </NavLink>
          <NavLink
            to="/vehicle-inventory/jdm-classic"
            onClick={() => window.scrollTo(0, 0)}
            className={`${styles.linkStyleForSection} ${styles.section}`}
          >
            <img src={jdmClassic} alt="jdm-classic" />

            <p>
              <i>JDM CLASSIC</i>
            </p>
          </NavLink>
          <NavLink
            to="/vehicle-inventory/non-jdm"
            onClick={() => window.scrollTo(0, 0)}
            className={`${styles.linkStyleForSection} ${styles.section}`}
          >
            <img src={nonJdm} alt="non-jdm" />

            <p>
              <i>NON JDM</i>
            </p>
          </NavLink>
        </Box>
      </Box>
      <Box className={styles.containerOfAllCars}>
        {vehiclePageCars.map((card) => (
          <NavLink
            key={card.id}
            to={`/vehicle-inventory/${card.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <CardSale card={card} />
          </NavLink>
        ))}
      </Box>
    </>
  )
}

export default CarSale
