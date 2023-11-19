import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import CardOfCar from '../cardOfCar/CardOfCar'
import SwiperNavBtns from '../swiperNavBtns/SwiperNavBtns'

import cars from '../../../../../data/cars'

import 'swiper/css'
import styles from '../CarouselsOfCars.module.css'

const LatestArrivals = () => {
  const [slidesPerView, setSlidesPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 380) {
        setSlidesPerView(1)
      } else if (window.innerWidth <= 655) {
        setSlidesPerView(2)
      } else if (window.innerWidth <= 800) {
        setSlidesPerView(3)
      } else {
        setSlidesPerView(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles.mainContainerSwiper}>
      <div className={styles.nameOfSwiper}>
        <p>LATEST ARRIVALS</p>
      </div>
      <div className={styles.titleOfSwiper}>
        <p>Latest arrived Vehicles to our Inventory</p>
      </div>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className={styles.latestArrivalsSwiper}>
        {cars.slice(0, 7).map((car) => (
          <SwiperSlide className={styles.swiperSlideContainer} key={car.id}>
            <CardOfCar text={car.text} img={car.img} id={car.id} />
          </SwiperSlide>
        ))}
        <SwiperNavBtns />
      </Swiper>
    </div>
  )
}

export default LatestArrivals
