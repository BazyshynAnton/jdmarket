import { Box } from '@mui/material'
import slides from '../../../../data/slides'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import IndiIco from './IndiIco'
import styles from './CarouselSlide.module.css'

const CarouselSlide = () => {
  return (
    <Box className={styles.carouselAndTitleContainer}>
      <Carousel
        className={styles.imgContainerSlide}
        IndicatorIcon={slides.map((slide) => (
          <IndiIco key={slide.id} slide={slide} />
        ))}
        indicatorContainerProps={{
          style: {
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            bottom: '15px',
            right: '-410px',
            zIndex: '1',
          },
        }}
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
    </Box>
  )
}

export default CarouselSlide
