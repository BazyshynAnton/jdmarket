import {
  useEffect,
  useState,
  NavLink,
  useSelector,
} from '../../../shared/utils/reactImports'
import {
  Swiper,
  SwiperSlide,
  Navigation,
} from '../../../shared/utils/swiperImports'
import swal from '../../../shared/utils/swalImports'

import CardOfFavoriteCars from '../cardOfFavoriteCars/CardOfFavoriteCars'
import CardNavBtns from '../cardNavBtns/CardNavBtns'

import cars from '../../../../data/cars'

import styles from '../ContentOfUserPage.module.scss'
import 'swiper/css'

const FavoriteCars = () => {
  const { favoriteCar, activeUser } = useSelector(
    (store) => store.registeredAccount
  )
  const [slidesPerView, setSlidesPerView] = useState(3)
  const favoriteCars = cars.filter((car) => favoriteCar.id.includes(car.id))
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 380) {
        setSlidesPerView(1)
      } else if (window.innerWidth <= 655) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
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
        <p>FAVORITE CARS</p>
      </div>
      {favoriteCars.length ? (
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          style={{
            overflow: 'visible',
            overflowX: 'clip',
            overflowY: 'visible',
            padding: '0px 20px 0px 20px',
          }}
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Pathway Gothic One',
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
                background: '#b90000',
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
                background: '#b90000',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              show cars
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default FavoriteCars
