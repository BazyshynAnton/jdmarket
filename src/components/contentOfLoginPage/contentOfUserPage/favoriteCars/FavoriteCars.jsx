import { Box } from '@mui/material'
import CardOfFavoriteCars from '../cardOfFavoriteCars/CardOfFavoriteCars'
import styles from '../ContentOfUserPage.module.css'
import { useEffect, useState } from 'react'
import cars from '../../../../data/cars'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardNavBtns from '../cardNavBtns/CardNavBtns'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const FavoriteCars = () => {
  const { favoriteCar, activeUser } = useSelector(
    (store) => store.registeredAccount
  )
  const [slidesPerView, setSlidesPerView] = useState(3)
  const favoriteCars = cars.filter((car) => favoriteCar.id.includes(car.id))
  useEffect(() => {
    const handleResize = () => {
      // При ширине экрана меньше 800px, устанавливаем 3 слайда,
      // в противном случае устанавливаем 4 слайда (по умолчанию).
      if (window.innerWidth <= 380) {
        setSlidesPerView(1)
      } else if (window.innerWidth <= 655) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
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
        <p>FAVORITE CARS</p>
      </Box>
      {favoriteCars.length ? (
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className={styles.favoriteCarsSwiper}
        >
          {favoriteCars.map((car) => (
            <SwiperSlide className={styles.swiperSlideContainer} key={car.id}>
              <CardOfFavoriteCars text={car.text} img={car.img} id={car.id} />
            </SwiperSlide>
          ))}
          <CardNavBtns />
        </Swiper>
      ) : (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Pathway Gothic One, sans-serif',
            fontSize: '25px',
          }}
          className={styles.favoriteCarsSwiper}
        >
          List is empty ☹️
          {activeUser ? (
            <NavLink
              to="/vehicle-inventory"
              style={{
                borderRadius: '5px',
                width: '90px',
                padding: '5px 8px',
                color: '#fff',
                background: 'red',
                cursor: 'pointer',
                fontSize: '15px',
                textAlign: 'center',
              }}
            >
              show cars
            </NavLink>
          ) : (
            <button
              onClick={() =>
                swal({
                  title: 'Oops...',
                  text: 'You are not registered or not logged in.',
                })
              }
              style={{
                borderRadius: '5px',
                width: '90px',
                padding: '5px 8px',
                color: '#fff',
                background: 'red',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              show cars
            </button>
          )}
        </Box>
      )}
    </Box>
  )
}

export default FavoriteCars
