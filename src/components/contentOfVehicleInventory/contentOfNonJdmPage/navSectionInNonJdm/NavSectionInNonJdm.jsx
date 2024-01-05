import {
  useState,
  NavLink,
  LazyLoadImage,
} from '../../../shared/utils/reactImports'

import CardSale from '../../carSale/cardSale/CardSale'

import nonPorsche from '../../../../pictures/nonPorsche.jpg'
import nonMercedes from '../../../../pictures/nonMercedes.jpg'
import nonAudi from '../../../../pictures/nonAudi.jpg'
import nonFerrari from '../../../../pictures/nonFerrari.jpg'
import nonBmw from '../../../../pictures/nonBmw.jpg'
import nonJaguar from '../../../../pictures/nonJaguar.jpg'

import vehiclePageCars from '../../../../data/vehiclePageCars'

import styles from './NavSectionInNonJdm.module.scss'

const NavSectionInNonJdm = () => {
  const [sectionMark, setSectionMark] = useState(null)

  const filterCarsByClass = vehiclePageCars.filter((car) => car.class === 3)
  const filterCarsByMark = vehiclePageCars.filter(
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
          <p>NON JDM</p>
        </div>
      </div>
      <div className={styles.sectionsContainer}>
        <div
          className={styles.section}
          onClick={() => setSectionMark('porsche')}
        >
          <LazyLoadImage src={nonPorsche} alt="porsche" />

          <p>
            <i>PORSCHE</i>
          </p>
        </div>
        <div
          className={styles.section}
          onClick={() => setSectionMark('mercedes')}
        >
          <LazyLoadImage src={nonMercedes} alt="mercedes" />

          <p>
            <i>MERCEDES</i>
          </p>
        </div>
        <div
          className={styles.section}
          onClick={() => setSectionMark('jaguar')}
        >
          <LazyLoadImage src={nonJaguar} alt="jaguar" />

          <p>
            <i>JAGUAR</i>
          </p>
        </div>
        <div
          className={styles.section}
          onClick={() => setSectionMark('ferrari')}
        >
          <LazyLoadImage src={nonFerrari} alt="ferrari" />

          <p>
            <i>FERRARI</i>
          </p>
        </div>

        <div className={styles.section} onClick={() => setSectionMark('bmw')}>
          <LazyLoadImage src={nonBmw} alt="bmw" />

          <p>
            <i>BMW</i>
          </p>
        </div>
        <div className={styles.section} onClick={() => setSectionMark('audi')}>
          <LazyLoadImage src={nonAudi} alt="audi" />

          <p>
            <i>AUDI</i>
          </p>
        </div>
      </div>

      {sectionMark !== null && (
        <button
          className={styles.filterBtn}
          onClick={() => setSectionMark(null)}
        >
          <p>Reset Filter</p>
        </button>
      )}

      <div className={styles.containerOfAllCars}>
        {sectionMark === null
          ? filterCarsByClass.map((card) => (
              <NavLink
                key={card.id}
                to={`/vehicle-inventory/${card.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <CardSale card={card} />
              </NavLink>
            ))
          : filterCarsByMark.map((card) => (
              <NavLink
                key={card.id}
                to={`/vehicle-inventory/${card.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <CardSale card={card} />
              </NavLink>
            ))}
      </div>
    </>
  )
}

export default NavSectionInNonJdm
