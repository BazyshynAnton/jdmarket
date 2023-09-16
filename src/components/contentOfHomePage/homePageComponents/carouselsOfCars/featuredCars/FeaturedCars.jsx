import { Swiper, SwiperSlide } from 'swiper/react'
import { Box } from '@mui/material'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import CardOfCar from '../cardOfCar/CardOfCar'
import SwiperNavBtns from '../swiperNavBtns/SwiperNavBtns'
import cars from '../../../../../data/cars'

import styles from '../CarouselsOfCars.module.css'

const FeaturedCars = () => {
  return (
    <Box className={styles.mainContainerSwiper}>
      <Box className={styles.nameOfSwiper}>
        <p>FEATURED CARS</p>
      </Box>
      <Box className={styles.titleOfSwiper}>
        <p>Featured Vehicles to our Inventory</p>
      </Box>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className={styles.latestArrivalsSwiper}>
        {cars.slice(7, 14).map((car) => (
          <SwiperSlide className={styles.swiperSlideContainer} key={car.id}>
            <CardOfCar text={car.text} img={car.img} />
          </SwiperSlide>
        ))}
        <SwiperNavBtns />
      </Swiper>
    </Box>
  )
}

export default FeaturedCars
