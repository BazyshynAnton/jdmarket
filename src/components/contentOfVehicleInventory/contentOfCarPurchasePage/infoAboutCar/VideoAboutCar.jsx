import { Box } from '@mui/material'
import r34buy2 from '../../../../pictures/r34buy2.jpg'
import ytico from '../../../../pictures/ytico.png'

import styles from './InfoAndVideoAboutCar.module.css'

const VideoAboutCar = () => {
  return (
    <Box className={styles.videoOne}>
      <img src={r34buy2} alt="intro" />
      <Box className={styles.absIco}>
        <img src={ytico} alt="youtube" />
      </Box>
    </Box>
  )
}

export default VideoAboutCar
