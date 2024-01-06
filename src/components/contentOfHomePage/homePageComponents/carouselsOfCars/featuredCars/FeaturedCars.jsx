import ReusableCarouselOfCars from '../reusableCarouselOfCars/ReusableCarouselOfCars'

import cars from '../../../../../data/cars'

const slicedCars = cars.slice(7, 14)

const FeaturedCars = () => {
  return (
    <ReusableCarouselOfCars
      header={'FEATURED CARS'}
      underHeaderText={'Featured Vehicles to our Inventory'}
      slicedCars={slicedCars}
    />
  )
}

export default FeaturedCars
