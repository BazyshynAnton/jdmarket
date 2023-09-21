import { Swiper, SwiperSlide } from 'swiper/react'
import { Box } from '@mui/material'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import CardOfManufacture from '../cardOfManufacture/CardOfManufacture'
import SwiperManufactureNavBtns from '../swiperNavBtns/SwiperManufactureNavBtns'
import manufactures from '../../../../../data/manufactures'

import styles from '../CarouselsOfCars.module.css'
import { useEffect, useState } from 'react'

const InventoryByManufactures = () => {
  const [slidesPerView, setSlidesPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      // При ширине экрана меньше 800px, устанавливаем 3 слайда,
      // в противном случае устанавливаем 4 слайда (по умолчанию).
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
      <Box className={styles.manufactureNameOfSwiper}>
        <p>INVENTORY BY MANUFACTURERS</p>
      </Box>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className={styles.latestManufactureArrivalsSwiper}>
        {manufactures.map((manufacture) => (
          <SwiperSlide
            className={styles.swiperSlideContainer}
            key={manufacture.id}>
            <CardOfManufacture img={manufacture.img} />
          </SwiperSlide>
        ))}
        <SwiperManufactureNavBtns />
      </Swiper>
    </Box>
  )
}

export default InventoryByManufactures
