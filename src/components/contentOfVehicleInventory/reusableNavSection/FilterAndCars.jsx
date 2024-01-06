import { NavLink } from '../../shared/utils/reactImports'
import CardSale from '../carSale/cardSale/CardSale'

import styles from './ReusableNavSection.module.scss'

const FilterAndCars = ({
  sectionMark,
  setSectionMark,
  filteredCarsByClass,
  filteredCarsByMark,
}) => {
  return (
    <>
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
          ? filteredCarsByClass.map((card) => (
              <NavLink
                key={card.id}
                to={`/vehicle-inventory/${card.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <CardSale card={card} />
              </NavLink>
            ))
          : filteredCarsByMark.map((card) => (
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

export default FilterAndCars
