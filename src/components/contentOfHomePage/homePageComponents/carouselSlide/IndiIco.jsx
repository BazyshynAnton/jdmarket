import { LazyLoadImage } from '../../../shared/utils/reactImports'

import styles from './CarouselSlide.module.scss'

const IndiIco = ({ slide }) => {
  return (
    <div className={styles.borderContainerIco}>
      <div className={styles.containerIco}>
        <LazyLoadImage src={slide.img} alt={slide.title} />
      </div>
    </div>
  )
}

export default IndiIco
