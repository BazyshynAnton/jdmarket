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
          <NavLink to="/" className={styles.homeBtn}>
            <p>HOME</p>
          </NavLink>
          <p>{'>'}</p>
          <p>VEHICLE INVENTORY</p>
        </Box>

        <Box className={styles.sectionsContainer}>
          <NavLink
            to="/vehicle-inventory/jdm-sports"
            className={styles.linkStyleForSection}>
            <Box className={styles.section}>
              <img src={jdmSports} alt="jdm-sports" />

              <p>
                <i>JDM SPORTS</i>
              </p>
            </Box>
          </NavLink>
          <NavLink
            to="/vehicle-inventory/jdm-classic"
            className={styles.linkStyleForSection}>
            <Box className={styles.section}>
              <img src={jdmClassic} alt="jdm-classic" />

              <p>
                <i>JDM CLASSIC</i>
              </p>
            </Box>
          </NavLink>
          <NavLink
            to="/vehicle-inventory/non-jdm"
            className={styles.linkStyleForSection}>
            <Box className={styles.section}>
              <img src={nonJdm} alt="non-jdm" />

              <p>
                <i>NON JDM</i>
              </p>
            </Box>
          </NavLink>
        </Box>
      </Box>
      <Box className={styles.containerOfAllCars}>
        {vehiclePageCars.map((card) => (
          <CardSale key={card.id} card={card} />
        ))}
      </Box>
    </>
  )
}

export default CarSale
