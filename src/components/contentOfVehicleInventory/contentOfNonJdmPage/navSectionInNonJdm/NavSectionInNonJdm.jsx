import { useState } from '../../../shared/utils/reactImports'

import ReusableNavSection from '../../reusableNavSection/ReusableNavSection'
import Navigation from '../../reusableNavSection/Navigation'
import FilterAndCars from '../../reusableNavSection/FilterAndCars'

import nonPorsche from '../../../../assets/pictures/nonPorsche.jpg'
import nonMercedes from '../../../../assets/pictures/nonMercedes.jpg'
import nonAudi from '../../../../assets/pictures/nonAudi.jpg'
import nonFerrari from '../../../../assets/pictures/nonFerrari.jpg'
import nonBmw from '../../../../assets/pictures/nonBmw.jpg'
import nonJaguar from '../../../../assets/pictures/nonJaguar.jpg'

import vehiclePageCars from '../../../../data/vehiclePageCars'

import styles from '../../reusableNavSection/ReusableNavSection.module.scss'

const NavSectionInNonJdm = () => {
  const [sectionMark, setSectionMark] = useState(null)

  const filteredCarsByClass = vehiclePageCars.filter((car) => car.class === 3)
  const filteredCarsByMark = vehiclePageCars.filter(
    (car) => car.mark === sectionMark
  )

  return (
    <>
      <Navigation section={'NON JDM'} />
      <div className={styles.sectionsContainer}>
        <ReusableNavSection
          picture={nonPorsche}
          setSectionMark={setSectionMark}
          carName={'porsche'}
          carMake={'PORSCHE'}
        />
        <ReusableNavSection
          picture={nonMercedes}
          setSectionMark={setSectionMark}
          carName={'mercedes'}
          carMake={'MERCEDES'}
        />
        <ReusableNavSection
          picture={nonJaguar}
          setSectionMark={setSectionMark}
          carName={'jaguar'}
          carMake={'JAGUAR'}
        />
        <ReusableNavSection
          picture={nonFerrari}
          setSectionMark={setSectionMark}
          carName={'ferrari'}
          carMake={'FERRARI'}
        />
        <ReusableNavSection
          picture={nonBmw}
          setSectionMark={setSectionMark}
          carName={'bmw'}
          carMake={'BMW'}
        />
        <ReusableNavSection
          picture={nonAudi}
          setSectionMark={setSectionMark}
          carName={'audi'}
          carMake={'AUDI'}
        />
      </div>

      <FilterAndCars
        sectionMark={sectionMark}
        setSectionMark={setSectionMark}
        filteredCarsByClass={filteredCarsByClass}
        filteredCarsByMark={filteredCarsByMark}
      />
    </>
  )
}

export default NavSectionInNonJdm
