import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'
import CardSearchSale from './cardSearchSale/CardSearchSale'

// import jdmSports from '../../../../pictures/jdmSports.jpg'
// import jdmClassic from '../../../../pictures/jdmClassic.jpg'
// import nonJdm from '../../../../pictures/nonJdm.jpg'
import vehiclePageCars from '../../../../data/vehiclePageCars'

import styles from '../../carSale/CarSale.module.css'
import { useSelector } from 'react-redux'

const CarSale = () => {
  const { searchInput, isAvailibleBtn, selectForm } = useSelector(
    (store) => store.headerSlice
  )

  const filteredCars = vehiclePageCars.filter((car) => {
    const categoryMatch =
      selectForm.searchCategory === 'Maker' ||
      car.mark.toLowerCase().includes(selectForm.searchCategory.toLowerCase())
    const textMatch = car.text.toLowerCase().includes(searchInput.toLowerCase())

    return categoryMatch && textMatch
  })

  return (
    <>
      <Box className={styles.mainNavAndSectionContainer}>
        <Box className={styles.navContainer}>
          <NavLink
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className={styles.homeBtn}
          >
            <p>HOME</p>
          </NavLink>
          <p>{'>'}</p>
          <p>Search</p>
        </Box>
      </Box>

      {searchInput !== '' || selectForm.searchCategory !== 'Maker' ? (
        <Box sx={{ marginTop: '20px', flexWrap: 'wrap', width: '100%' }}>
          <h4>
            Search{' '}
            <span style={{ color: 'red' }}>
              {selectForm.searchCategory !== 'Maker'
                ? `${selectForm.searchCategory} ${searchInput}`
                : `${searchInput}`}
            </span>
            {' - '}
            {filteredCars.length} results have been found.
          </h4>
        </Box>
      ) : (
        <Box sx={{ marginTop: '20px', flexWrap: 'wrap', width: '100%' }}>
          <h4>
            Search "I am looking for..." {vehiclePageCars.length} results have
            been found.
          </h4>
        </Box>
      )}

      <Box className={styles.containerOfAllCars}>
        {searchInput !== '' || selectForm.searchCategory !== 'Maker'
          ? filteredCars.map((card) => (
              <NavLink
                key={card.id}
                to={`/vehicle-inventory/${card.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <CardSearchSale card={card} />
              </NavLink>
            ))
          : vehiclePageCars.map((card) => (
              <NavLink
                key={card.id}
                to={`/vehicle-inventory/${card.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <CardSearchSale card={card} />
              </NavLink>
            ))}
      </Box>
    </>
  )
}

export default CarSale
