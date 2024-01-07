import { useState } from '../../../shared/utils/reactImports'

import ReusableNavSection from '../../reusableNavSection/ReusableNavSection'
import Navigation from '../../reusableNavSection/Navigation'
import FilterAndCars from '../../reusableNavSection/FilterAndCars'

import nissanSection from '../../../../assets/pictures/nissanSection.jpg'
import mitsubishiSection from '../../../../assets/pictures/mitsubishiSection.jpg'
import mazdaSection from '../../../../assets/pictures/mazdaSection.jpg'
import toyotaSection from '../../../../assets/pictures/toyotaSection.jpg'
import subaruSection from '../../../../assets/pictures/subaruSection.jpg'
import hondaSection from '../../../../assets/pictures/hondaSection.jpg'

import vehiclePageCars from '../../../../data/vehiclePageCars'

import styles from '../../reusableNavSection/ReusableNavSection.module.scss'

const NavSectionInJdmSports = () => {
  const [sectionMark, setSectionMark] = useState(null)

  const filteredCarsByClass = vehiclePageCars.filter((car) => car.class === 1)
  const filteredCarsByMark = vehiclePageCars.filter(
    (car) => car.mark === sectionMark
  )

  return (
    <>
      <Navigation section={'JDM sports'} />
      <div className={styles.sectionsContainer}>
        <ReusableNavSection
          picture={nissanSection}
          setSectionMark={setSectionMark}
          carName={'nissan'}
          carMake={'NISSAN'}
        />
        <ReusableNavSection
          picture={mitsubishiSection}
          setSectionMark={setSectionMark}
          carName={'mitsubishi'}
          carMake={'MITSUBISHI'}
        />
        <ReusableNavSection
          picture={mazdaSection}
          setSectionMark={setSectionMark}
          carName={'mazda'}
          carMake={'MAZDA'}
        />
        <ReusableNavSection
          picture={toyotaSection}
          setSectionMark={setSectionMark}
          carName={'toyota'}
          carMake={'TOYOTA'}
        />
        <ReusableNavSection
          picture={subaruSection}
          setSectionMark={setSectionMark}
          carName={'subaru'}
          carMake={'SUBARU'}
        />
        <ReusableNavSection
          picture={hondaSection}
          setSectionMark={setSectionMark}
          carName={'honda'}
          carMake={'HONDA'}
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

export default NavSectionInJdmSports
