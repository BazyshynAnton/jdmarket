import CardSale from '../../carSale/cardSale/CardSale'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import vehiclePageCars from '../../../../data/vehiclePageCars'

import nissanSection from '../../../../pictures/nissanSection.jpg'
import mitsubishiSection from '../../../../pictures/mitsubishiSection.jpg'
import mazdaSection from '../../../../pictures/mazdaSection.jpg'
import toyotaSection from '../../../../pictures/toyotaSection.jpg'
import subaruSection from '../../../../pictures/subaruSection.jpg'
import hondaSection from '../../../../pictures/hondaSection.jpg'

import styles from './NavSectionInJdmSports.module.css'
import { useState } from 'react'

const NavSectionInJdmSports = () => {
  const [sectionMark, setSectionMark] = useState(null)

  const filteredCarsByClass = vehiclePageCars.filter((car) => car.class === 1)
  const filteredCarsByMark = vehiclePageCars.filter(
    (car) => car.mark === sectionMark
  )

  return (
    <>
      <Box className={styles.mainNavAndSectionContainer}>
        <Box className={styles.navContainer}>
          <NavLink to="/" className={styles.homeBtn}>
            <p>HOME</p>
          </NavLink>
          <p>{'>'}</p>
          <NavLink to="/vehicle-inventory" className={styles.homeBtn}>
            <p>VEHICLE INVENTORY</p>
          </NavLink>
          <p>{'>'}</p>
          <p>JDM sports</p>
        </Box>
      </Box>
      <Box className={styles.sectionsContainer}>
        <Box
          className={styles.section}
          onClick={() => setSectionMark('nissan')}>
          <img src={nissanSection} alt="nissan" />

          <p>
            <i>NISSAN</i>
          </p>
        </Box>

        <Box
          className={styles.section}
          onClick={() => setSectionMark('mitsubishi')}>
          <img src={mitsubishiSection} alt="mitsubishi" />

          <p>
            <i>MITSUBISHI</i>
          </p>
        </Box>
        <Box className={styles.section} onClick={() => setSectionMark('mazda')}>
          <img src={mazdaSection} alt="mazda" />

          <p>
            <i>MAZDA</i>
          </p>
        </Box>
        <Box
          className={styles.section}
          onClick={() => setSectionMark('toyota')}>
          <img src={toyotaSection} alt="toyota" />

          <p>
            <i>TOYOTA</i>
          </p>
        </Box>
        <Box
          className={styles.section}
          onClick={() => setSectionMark('subaru')}>
          <img src={subaruSection} alt="subaru" />

          <p>
            <i>SUBARU</i>
          </p>
        </Box>
        <Box className={styles.section} onClick={() => setSectionMark('honda')}>
          <img src={hondaSection} alt="honda" />

          <p>
            <i>HONDA</i>
          </p>
        </Box>
      </Box>

      {sectionMark !== null && (
        <button
          className={styles.filterBtn}
          onClick={() => setSectionMark(null)}>
          <p>Reset Filter</p>
        </button>
      )}

      <Box className={styles.containerOfAllCars}>
        {sectionMark === null
          ? filteredCarsByClass.map((card) => (
              <CardSale key={card.id} card={card} />
            ))
          : filteredCarsByMark.map((card) => (
              <CardSale key={card.id} card={card} />
            ))}
      </Box>
    </>
  )
}

export default NavSectionInJdmSports
