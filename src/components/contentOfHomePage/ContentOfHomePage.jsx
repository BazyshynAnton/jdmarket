import Header from '../header/Header'
import CarouselSlide from '../carouselSlide/CarouselSlide'
import { Box, Container } from '@mui/material'
import styles from './ContentOfHomePage.module.css'
import Panel from '../panel/Panel'

const ContentOfHomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Box className={styles.containerCarouselAndPanel}>
          <CarouselSlide />
          <Panel />
        </Box>
      </Container>
    </>
  )
}

export default ContentOfHomePage
