import { useEffect, useState } from '../../../../shared/utils/reactImports'
import { Swiper, SwiperSlide } from '../../../../shared/utils/swiperImports'

import CardOfCar from '../cardOfCar/CardOfCar'
import SwiperNavBtns from '../swiperNavBtns/SwiperNavBtns'

import cars from '../../../../../data/cars'

import styles from '../CarouselsOfCars.module.scss'
import 'swiper/css'

const FeaturedCars = () => {
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

  //Controll window size
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 800)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 800)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles.mainContainerSwiper}>
      <div className={styles.nameOfSwiper}>
        <p>FEATURED CARS</p>
      </div>
      <div className={styles.titleOfSwiper}>
        <p>Featured Vehicles to our Inventory</p>
      </div>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={true}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: '#fff',
          overflow: 'visible',
          overflowX: 'clip',
          overflowY: 'visible',
          padding: '20px 20px 0px 20px',
        }}
      >
        {cars.slice(7, 14).map((car) => (
          <SwiperSlide className={styles.swiperSlideContainer} key={car.id}>
            <CardOfCar text={car.text} img={car.img} />
          </SwiperSlide>
        ))}
        {isDesktop && <SwiperNavBtns />}
      </Swiper>
    </div>
  )
}

export default FeaturedCars
