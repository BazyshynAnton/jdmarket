import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'
import CardSale from './cardSale/CardSale'

import jdmSports from '../../../pictures/jdmSports.jpg'
import jdmClassic from '../../../pictures/jdmClassic.jpg'
import nonJdm from '../../../pictures/nonJdm.jpg'
import vehiclePageCars from '../../../data/vehiclePageCars'

import styles from './CarSale.module.css'
import { useState } from 'react'

const CarSale = () => {
  const [selectedClass, setSelectedClass] = useState(null)

  // Фильтруем карточки на основе выбранного класса
  const filteredCars = vehiclePageCars.filter((card) => {
    if (selectedClass === null) {
      return true // Если ничего не выбрано, показываем все карточки
    }
    return card.class === selectedClass
  })

  return (
    <>
      <Box className={styles.mainNavAndSectionContainer}>
        <Box className={styles.navContainer}>
          <NavLink to="/" className={styles.homeBtn}>
            <p>HOME</p>
          </NavLink>
          <p>{'>'}</p>
          <p
            onClick={() => setSelectedClass(null)}
            className={selectedClass === null ? '' : styles.notSelectedVehicle}>
            VEHICLE INVENTORY
          </p>
          {selectedClass === 1 ? (
            <>
              <p>{'>'}</p> <p>JDM SPORTS</p>
            </>
          ) : selectedClass === 2 ? (
            <>
              <p>{'>'}</p> <p>JDM CLASSIC</p>
            </>
          ) : selectedClass === 3 ? (
            <>
              <p>{'>'}</p> <p>NON JDM</p>
            </>
          ) : (
            ''
          )}
        </Box>

        <Box className={styles.sectionsContainer}>
          <Box className={styles.section} onClick={() => setSelectedClass(1)}>
            <img src={jdmSports} alt="jdm-sports" />
            <p>
              <i>JDM SPORTS</i>
            </p>
          </Box>
          <Box className={styles.section} onClick={() => setSelectedClass(2)}>
            <img src={jdmClassic} alt="jdm-classic" />
            <p>
              <i>JDM CLASSIC</i>
            </p>
          </Box>
          <Box className={styles.section} onClick={() => setSelectedClass(3)}>
            <img src={nonJdm} alt="non-jdm" />
            <p>
              <i>NON JDM</i>
            </p>
          </Box>
        </Box>
      </Box>
      <Box className={styles.containerOfAllCars}>
        {filteredCars.map((card) => (
          <CardSale key={card.id} card={card} />
        ))}
      </Box>
    </>
  )
}

export default CarSale
