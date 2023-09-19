import { Swiper, SwiperSlide } from 'swiper/react'
import { Box } from '@mui/material'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import CardOfCar from '../cardOfCar/CardOfCar'
import SwiperNavBtns from '../swiperNavBtns/SwiperNavBtns'
import cars from '../../../../../data/cars'

import styles from '../CarouselsOfCars.module.css'
import { useEffect, useState } from 'react'

const LatestArrivals = () => {
  const [slidesPerView, setSlidesPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      // При ширине экрана меньше 800px, устанавливаем 3 слайда,
      // в противном случае устанавливаем 4 слайда (по умолчанию).
      if (window.innerWidth <= 655) {
        setSlidesPerView(2)
      } else if (window.innerWidth <= 800) {
        setSlidesPerView(3)
      } else {
        setSlidesPerView(4)
      }
    }

    // Вызываем handleResize при загрузке страницы и изменении размера окна.
    handleResize()
    window.addEventListener('resize', handleResize)

    // Очищаем слушатель событий при размонтировании компонента.
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Box className={styles.mainContainerSwiper}>
      <Box className={styles.nameOfSwiper}>
        <p>LATEST ARRIVALS</p>
      </Box>
      <Box className={styles.titleOfSwiper}>
        <p>Latest arrived Vehicles to our Inventory</p>
      </Box>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className={styles.latestArrivalsSwiper}>
        {cars.slice(0, 7).map((car) => (
          <SwiperSlide className={styles.swiperSlideContainer} key={car.id}>
            <CardOfCar text={car.text} img={car.img} />
          </SwiperSlide>
        ))}
        <SwiperNavBtns />
      </Swiper>
    </Box>
  )
}

export default LatestArrivals
