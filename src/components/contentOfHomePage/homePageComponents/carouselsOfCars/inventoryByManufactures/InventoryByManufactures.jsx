import { useEffect, useState } from '../../../../shared/utils/reactImports'
import { Swiper, SwiperSlide } from '../../../../shared/utils/swiperImports'

import CardOfManufacture from '../cardOfManufacture/CardOfManufacture'
import SwiperManufactureNavBtns from '../swiperNavBtns/SwiperManufactureNavBtns'

import manufactures from '../../../../../data/manufactures'

import styles from '../CarouselsOfCars.module.scss'
import 'swiper/css'

const InventoryByManufactures = () => {
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
      <div className={styles.manufactureNameOfSwiper}>
        <p>INVENTORY BY MANUFACTURERS</p>
      </div>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        className={styles.latestManufactureArrivalsSwiper}
      >
        {manufactures.map((manufacture) => (
          <SwiperSlide
            className={styles.swiperSlideContainer}
            key={manufacture.id}
          >
            <CardOfManufacture img={manufacture.img} />
          </SwiperSlide>
        ))}
        <SwiperManufactureNavBtns />
      </Swiper>
    </div>
  )
}

export default InventoryByManufactures
