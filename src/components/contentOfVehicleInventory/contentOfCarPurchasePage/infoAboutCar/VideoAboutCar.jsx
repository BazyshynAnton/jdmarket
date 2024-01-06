import { LazyLoadImage } from '../../../shared/utils/reactImports'
import r34buy2 from '../../../../pictures/r34buy2.jpg'
import ytico from '../../../../pictures/ytico.png'

import styles from '../reusableComponents/InfoAndVideoAboutCar.module.scss'

const VideoAboutCar = () => {
  return (
    <div className={styles.videoOne}>
      <LazyLoadImage src={r34buy2} alt="intro" />
      <div className={styles.absIco}>
        <LazyLoadImage src={ytico} alt="youtube" />
      </div>
    </div>
  )
}

export default VideoAboutCar
