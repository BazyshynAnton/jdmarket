import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import IndiIco from './IndiIco'

import slides from '../../../../data/slides'

import styles from './CarouselSlide.module.css'

const CarouselSlide = () => {
  return (
    <div className={styles.carouselAndTitleContainer}>
      <Carousel
        className={styles.imgContainerSlide}
        IndicatorIcon={slides.map((slide) => (
          <IndiIco key={slide.id} slide={slide} />
        ))}
        indicatorContainerProps={{ className: styles.indicatorPropsCont }}
        indicatorIconButtonProps={{
          style: {
            border: '2px solid white',
            borderRadius: '0px',
            padding: '5px 5px 5px 5px',
            marginRight: '5px',
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            border: '2px solid red',
            borderRadius: '0px',
          },
        }}>
        {slides.map((slide) => (
          <Item key={slide.id} slide={slide} />
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselSlide
