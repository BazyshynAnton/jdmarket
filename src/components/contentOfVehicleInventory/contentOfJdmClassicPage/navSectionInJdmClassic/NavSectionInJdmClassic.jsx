import { useState } from '../../../shared/utils/reactImports'

import ReusableNavSection from '../../reusableNavSection/ReusableNavSection'
import Navigation from '../../reusableNavSection/Navigation'
import FilterAndCars from '../../reusableNavSection/FilterAndCars'

import sectionClassicNissan from '../../../../pictures/sectionClassicNissan.jpg'
import sectionClassicMitsubishi from '../../../../pictures/sectionClassicMitsubishi.jpg'
import sectionCLassicMazda from '../../../../pictures/sectionCLassicMazda.jpg'
import sectionClassicToyota from '../../../../pictures/sectionClassicToyota.jpg'
import sectionClassicSubaru from '../../../../pictures/sectionClassicSubaru.jpg'
import sectionClassicHonda from '../../../../pictures/sectionClassicHonda.jpg'

import vehiclePageCars from '../../../../data/vehiclePageCars'

import styles from '../../reusableNavSection/ReusableNavSection.module.scss'

const NavSectionInJdmClassic = () => {
  const [sectionMark, setSectionMark] = useState(null)

  const filteredCarsByClass = vehiclePageCars.filter((car) => car.class === 2)
  const filteredCarsByMark = vehiclePageCars.filter(
    (car) => car.mark === sectionMark
  )
  return (
    <>
      <Navigation section={'JDM classic'} />
      <div className={styles.sectionsContainer}>
        <ReusableNavSection
          picture={sectionClassicHonda}
          setSectionMark={setSectionMark}
          carName={'oldHonda'}
          carMake={'HONDA'}
        />
        <ReusableNavSection
          picture={sectionClassicToyota}
          setSectionMark={setSectionMark}
          carName={'oldToyota'}
          carMake={'TOYOTA'}
        />
        <ReusableNavSection
          picture={sectionClassicNissan}
          setSectionMark={setSectionMark}
          carName={'oldNissan'}
          carMake={'NISSAN'}
        />
        <ReusableNavSection
          picture={sectionClassicMitsubishi}
          setSectionMark={setSectionMark}
          carName={'oldMitsubishi'}
          carMake={'MITSUBISHI'}
        />
        <ReusableNavSection
          picture={sectionClassicSubaru}
          setSectionMark={setSectionMark}
          carName={'oldSubaru'}
          carMake={'SUBARU'}
        />
        <ReusableNavSection
          picture={sectionCLassicMazda}
          setSectionMark={setSectionMark}
          carName={'oldMazda'}
          carMake={'MAZDA'}
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

export default NavSectionInJdmClassic
