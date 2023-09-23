import CardSale from '../../carSale/cardSale/CardSale'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import vehiclePageCars from '../../../../data/vehiclePageCars'

import nonPorsche from '../../../../pictures/nonPorsche.jpg'
import nonMercedes from '../../../../pictures/nonMercedes.jpg'
import nonAudi from '../../../../pictures/nonAudi.jpg'
import nonFerrari from '../../../../pictures/nonFerrari.jpg'
import nonBmw from '../../../../pictures/nonBmw.jpg'
import nonJaguar from '../../../../pictures/nonJaguar.jpg'

import styles from './NavSectionInNonJdm.module.css'
import { useState } from 'react'

const NavSectionInNonJdm = () => {
  const [sectionMark, setSectionMark] = useState(null)

  const filterCarsByClass = vehiclePageCars.filter((car) => car.class === 3)
  const filterCarsByMark = vehiclePageCars.filter(
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
          <p>NON JDM</p>
        </Box>
      </Box>
      <Box className={styles.sectionsContainer}>
        <Box
          className={styles.section}
          onClick={() => setSectionMark('porsche')}>
          <img src={nonPorsche} alt="porsche" />

          <p>
            <i>PORSCHE</i>
          </p>
        </Box>
        <Box
          className={styles.section}
          onClick={() => setSectionMark('mercedes')}>
          <img src={nonMercedes} alt="mercedes" />

          <p>
            <i>MERCEDES</i>
          </p>
        </Box>
        <Box
          className={styles.section}
          onClick={() => setSectionMark('jaguar')}>
          <img src={nonJaguar} alt="jaguar" />

          <p>
            <i>JAGUAR</i>
          </p>
        </Box>
        <Box
          className={styles.section}
          onClick={() => setSectionMark('ferrari')}>
          <img src={nonFerrari} alt="ferrari" />

          <p>
            <i>FERRARI</i>
          </p>
        </Box>

        <Box className={styles.section} onClick={() => setSectionMark('bmw')}>
          <img src={nonBmw} alt="bmw" />

          <p>
            <i>BMW</i>
          </p>
        </Box>
        <Box className={styles.section} onClick={() => setSectionMark('audi')}>
          <img src={nonAudi} alt="audi" />

          <p>
            <i>AUDI</i>
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
          ? filterCarsByClass.map((card) => (
              <CardSale key={card.id} card={card} />
            ))
          : filterCarsByMark.map((card) => (
              <CardSale key={card.id} card={card} />
            ))}
      </Box>
    </>
  )
}

export default NavSectionInNonJdm
