import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import CardSale from '../../carSale/cardSale/CardSale'

import sectionClassicNissan from '../../../../pictures/sectionClassicNissan.jpg'
import sectionClassicMitsubishi from '../../../../pictures/sectionClassicMitsubishi.jpg'
import sectionCLassicMazda from '../../../../pictures/sectionCLassicMazda.jpg'
import sectionClassicToyota from '../../../../pictures/sectionClassicToyota.jpg'
import sectionClassicSubaru from '../../../../pictures/sectionClassicSubaru.jpg'
import sectionClassicHonda from '../../../../pictures/sectionClassicHonda.jpg'

import vehiclePageCars from '../../../../data/vehiclePageCars'

import styles from './NavSectionInJdmClassic.module.css'

const NavSectionInJdmClassic = () => {
  const [sectionMark, setSectionMark] = useState(null)

  const filteredCarsByClass = vehiclePageCars.filter((car) => car.class === 2)
  const filteredCarsByMark = vehiclePageCars.filter(
    (car) => car.mark === sectionMark
  )
  return (
    <>
      <div className={styles.mainNavAndSectionContainer}>
        <div className={styles.navContainer}>
          <NavLink to="/" className={styles.homeBtn}>
            <p>HOME</p>
          </NavLink>
          <p>{'>'}</p>
          <NavLink to="/vehicle-inventory" className={styles.homeBtn}>
            <p>VEHICLE INVENTORY</p>
          </NavLink>
          <p>{'>'}</p>
          <p>JDM classic</p>
        </div>
      </div>
      <div className={styles.sectionsContainer}>
        <div
          className={styles.section}
          onClick={() => setSectionMark('oldHonda')}>
          <img src={sectionClassicHonda} alt="oldHonda" />
          <p>
            <i>HONDA</i>
          </p>
        </div>
        <div
          className={styles.section}
          onClick={() => setSectionMark('oldToyota')}>
          <img src={sectionClassicToyota} alt="oldToyota" />
          <p>
            <i>TOYOTA</i>
          </p>
        </div>
        <div
          className={styles.section}
          onClick={() => setSectionMark('oldNissan')}>
          <img src={sectionClassicNissan} alt="oldNissan" />
          <p>
            <i>NISSAN</i>
          </p>
        </div>

        <div
          className={styles.section}
          onClick={() => setSectionMark('oldMitsubishi')}>
          <img src={sectionClassicMitsubishi} alt="oldMitsubishi" />
          <p>
            <i>MITSUBISHI</i>
          </p>
        </div>

        <div
          className={styles.section}
          onClick={() => setSectionMark('oldSubaru')}>
          <img src={sectionClassicSubaru} alt="oldSubaru" />
          <p>
            <i>SUBARU</i>
          </p>
        </div>
        <div
          className={styles.section}
          onClick={() => setSectionMark('oldMazda')}>
          <img src={sectionCLassicMazda} alt="oldMazda" />
          <p>
            <i>MAZDA</i>
          </p>
        </div>
      </div>

      {sectionMark !== null && (
        <button
          className={styles.filterBtn}
          onClick={() => setSectionMark(null)}>
          <p>Reset Filter</p>
        </button>
      )}

      <div className={styles.containerOfAllCars}>
        {sectionMark === null
          ? filteredCarsByClass.map((card) => (
              <NavLink
                key={card.id}
                to={`/vehicle-inventory/${card.id}`}
                onClick={() => window.scrollTo(0, 0)}>
                <CardSale card={card} />
              </NavLink>
            ))
          : filteredCarsByMark.map((card) => (
              <NavLink
                key={card.id}
                to={`/vehicle-inventory/${card.id}`}
                onClick={() => window.scrollTo(0, 0)}>
                <CardSale card={card} />
              </NavLink>
            ))}
      </div>
    </>
  )
}

export default NavSectionInJdmClassic
