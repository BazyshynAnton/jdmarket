import r34buy2 from '../../../../pictures/r34buy2.jpg'
import ytico from '../../../../pictures/ytico.png'

import styles from './InfoAndVideoAboutCar.module.css'

const VideoAboutCar = () => {
  return (
    <div className={styles.videoOne}>
      <img src={r34buy2} alt="intro" />
      <div className={styles.absIco}>
        <img src={ytico} alt="youtube" />
      </div>
    </div>
  )
}

export default VideoAboutCar
