import CardSale from '../../carSale/cardSale/CardSale'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import vehiclePageCars from '../../../../data/vehiclePageCars'

import sectionClassicNissan from '../../../../pictures/sectionClassicNissan.jpg'
import sectionClassicMitsubishi from '../../../../pictures/sectionClassicMitsubishi.jpg'
import sectionCLassicMazda from '../../../../pictures/sectionCLassicMazda.jpg'
import sectionClassicToyota from '../../../../pictures/sectionClassicToyota.jpg'
import sectionClassicSubaru from '../../../../pictures/sectionClassicSubaru.jpg'
import sectionClassicHonda from '../../../../pictures/sectionClassicHonda.jpg'

import styles from './NavSectionInJdmClassic.module.css'
import { useState } from 'react'

const NavSectionInJdmClassic = () => {
  const [sectionMark, setSectionMark] = useState(null)

  const filteredCarsByClass = vehiclePageCars.filter((car) => car.class === 2)
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
          onClick={() => setSectionMark('oldHonda')}>
          <img src={sectionClassicHonda} alt="oldHonda" />
          <p>
            <i>HONDA</i>
          </p>
        </Box>
        <Box
          className={styles.section}
          onClick={() => setSectionMark('oldToyota')}>
          <img src={sectionClassicToyota} alt="oldToyota" />
          <p>
            <i>TOYOTA</i>
          </p>
        </Box>
        <Box
          className={styles.section}
          onClick={() => setSectionMark('oldNissan')}>
          <img src={sectionClassicNissan} alt="oldNissan" />
          <p>
            <i>NISSAN</i>
          </p>
        </Box>

        <Box
          className={styles.section}
          onClick={() => setSectionMark('oldMitsubishi')}>
          <img src={sectionClassicMitsubishi} alt="oldMitsubishi" />
          <p>
            <i>MITSUBISHI</i>
          </p>
        </Box>

        <Box
          className={styles.section}
          onClick={() => setSectionMark('oldSubaru')}>
          <img src={sectionClassicSubaru} alt="oldSubaru" />
          <p>
            <i>SUBARU</i>
          </p>
        </Box>
        <Box
          className={styles.section}
          onClick={() => setSectionMark('oldMazda')}>
          <img src={sectionCLassicMazda} alt="oldMazda" />
          <p>
            <i>MAZDA</i>
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

export default NavSectionInJdmClassic
