import {
  NavLink,
  useEffect,
  useSelector,
  useState,
} from '../../../shared/utils/reactImports'

import CardSearchSale from './cardSearchSale/CardSearchSale'

import vehiclePageCars from '../../../../data/vehiclePageCars'

import styles from '../../carSale/CarSale.module.scss'
import CarSaleNavigation from '../../carSale/carSaleNavigation/CarSaleNavigation'

const CarSale = () => {
  const { searchInput, sort, selectForm } = useSelector(
    (store) => store.headerSlice
  )

  const filteredCars = vehiclePageCars.filter((car) => {
    const categoryMatch =
      selectForm.searchCategory === 'Maker' ||
      car.mark.toLowerCase().includes(selectForm.searchCategory.toLowerCase())
    const textMatch = car.text.toLowerCase().includes(searchInput.toLowerCase())

    return categoryMatch && textMatch && sort
  })

  const [currentPage, setCurrentPage] = useState(1)
  const limit = 15
  const startIndex = (currentPage - 1) * limit
  const endIndex = startIndex + limit

  const currentCars = filteredCars.slice(startIndex, endIndex)

  useEffect(() => {
    if (filteredCars.length < 15) {
      setCurrentPage(1)
    }
  }, [filteredCars.length])

  return (
    <>
      <div className={styles.mainNavAndSectionContainer}>
        <div className={styles.navContainer}>
          <NavLink
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className={styles.homeBtn}
          >
            <p>HOME</p>
          </NavLink>
          <p>{'>'}</p>
          <p>Search</p>
        </div>
      </div>

      {sort ? (
        <div style={{ marginTop: '20px', flexWrap: 'wrap', width: '100%' }}>
          <h4 style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '15px' }}>
            Search{' '}
            <span style={{ color: 'red' }}>
              {selectForm.searchCategory !== 'Maker'
                ? `${selectForm.searchCategory} ${searchInput}`
                : `${searchInput}`}
            </span>
            {' - '}
            {filteredCars.length} results have been found.
          </h4>
        </div>
      ) : (
        <div style={{ marginTop: '20px', flexWrap: 'wrap', width: '100%' }}>
          <h4>I am looking for...</h4>
        </div>
      )}

      <div className={styles.containerOfAllCars}>
        {sort
          ? currentCars.map((card) => (
              <NavLink
                key={card.id}
                to={`/vehicle-inventory/${card.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <CardSearchSale card={card} />
              </NavLink>
            ))
          : ''}
      </div>
      {filteredCars.length > 15 && (
        <CarSaleNavigation
          currentPage={currentPage}
          total={100}
          limit={limit}
          vehiclePageCars={filteredCars}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </>
  )
}

export default CarSale
