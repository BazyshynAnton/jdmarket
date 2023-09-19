import { Box } from '@mui/material'
import styles from './Panel.module.css'
import american from '../../../../pictures/american.png'

const Panel = () => {
  return (
    <Box className={styles.panelContainer}>
      <Box className={styles.shadowBg}>
        <h2>Welcome to JDM Co. Ltd. Japan</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;JDM is one of the leading sports and classic
          vehicle exporters located in central Japan. With over 36 years of
          experience in the market and partners around the world, we have the
          largest stock of sports cars and classic cars in Japan. We provide a
          full service of searching for and re-conditioning vehicles according
          to your preference and deliver them anywhere around the globe.
        </p>
        <Box className={styles.imgContainerUsa}>
          <img src={american} alt="attention" />
        </Box>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;As of 2015, we are now able to deliver Nissan
          Skyline, Hakosuka GC 10, GTR 32, Honda NSX, Mazda RX-7, Toyota Soarer
          and many other JDM vehicles anywhere in the USA!{' '}
          <button>Learn more.</button>
        </p>
      </Box>
    </Box>
  )
}

export default Panel
