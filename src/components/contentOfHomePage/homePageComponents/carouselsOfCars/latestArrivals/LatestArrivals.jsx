import ReusableCarouselOfCars from '../reusableCarouselOfCars/ReusableCarouselOfCars'

import cars from '../../../../../data/cars'

const slicedCars = cars.slice(0, 7)

const LatestArrivals = () => {
  return (
    <ReusableCarouselOfCars
      header={'LATEST ARRIVALS'}
      underHeaderText={'Latest arrived Vehicles to our Inventory'}
      slicedCars={slicedCars}
    />
  )
}

export default LatestArrivals
