import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CardSale from '../../carSale/cardSale/CardSale'

import nissanSection from '../../../../pictures/nissanSection.jpg'
import mitsubishiSection from '../../../../pictures/mitsubishiSection.jpg'
import mazdaSection from '../../../../pictures/mazdaSection.jpg'
import toyotaSection from '../../../../pictures/toyotaSection.jpg'
import subaruSection from '../../../../pictures/subaruSection.jpg'
import hondaSection from '../../../../pictures/hondaSection.jpg'

import vehiclePageCars from '../../../../data/vehiclePageCars'

import styles from './NavSectionInJdmSports.module.css'

const NavSectionInJdmSports = () => {
  const [sectionMark, setSectionMark] = useState(null)

  const filteredCarsByClass = vehiclePageCars.filter((car) => car.class === 1)
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
          <p>JDM sports</p>
        </div>
      </div>
      <div className={styles.sectionsContainer}>
        <div
          className={styles.section}
          onClick={() => setSectionMark('nissan')}>
          <img src={nissanSection} alt="nissan" />

          <p>
            <i>NISSAN</i>
          </p>
        </div>

        <div
          className={styles.section}
          onClick={() => setSectionMark('mitsubishi')}>
          <img src={mitsubishiSection} alt="mitsubishi" />

          <p>
            <i>MITSUBISHI</i>
          </p>
        </div>
        <div className={styles.section} onClick={() => setSectionMark('mazda')}>
          <img src={mazdaSection} alt="mazda" />

          <p>
            <i>MAZDA</i>
          </p>
        </div>
        <div
          className={styles.section}
          onClick={() => setSectionMark('toyota')}>
          <img src={toyotaSection} alt="toyota" />

          <p>
            <i>TOYOTA</i>
          </p>
        </div>
        <div
          className={styles.section}
          onClick={() => setSectionMark('subaru')}>
          <img src={subaruSection} alt="subaru" />

          <p>
            <i>SUBARU</i>
          </p>
        </div>
        <div className={styles.section} onClick={() => setSectionMark('honda')}>
          <img src={hondaSection} alt="honda" />

          <p>
            <i>HONDA</i>
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
                to={`/vehicle-inventory/${card.id}`}
                onClick={() => window.scrollTo(0, 0)}
                key={card.id}>
                <CardSale card={card} />
              </NavLink>
            ))
          : filteredCarsByMark.map((card) => (
              <NavLink
                to={`/vehicle-inventory/${card.id}`}
                onClick={() => window.scrollTo(0, 0)}
                key={card.id}>
                <CardSale card={card} />
              </NavLink>
            ))}
      </div>
    </>
  )
}

export default NavSectionInJdmSports
