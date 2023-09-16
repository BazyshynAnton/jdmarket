import { Swiper, SwiperSlide } from 'swiper/react'
import { Box } from '@mui/material'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import CardOfManufacture from '../cardOfManufacture/CardOfManufacture'
import SwiperManufactureNavBtns from '../swiperNavBtns/SwiperManufactureNavBtns'
import manufactures from '../../../data/manufactures'

import styles from '../CarouselsOfCars.module.css'

const InventoryByManufactures = () => {
  return (
    <Box className={styles.mainContainerSwiper}>
      <Box className={styles.manufactureNameOfSwiper}>
        <p>INVENTORY BY MANUFACTURERS</p>
      </Box>

      <Swiper
        slidesPerView={4}
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
