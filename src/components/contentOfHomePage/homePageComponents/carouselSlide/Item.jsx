import { LazyLoadImage } from '../../../shared/utils/reactImports'

import styles from './CarouselSlide.module.scss'

const Item = ({ slide }) => {
  return (
    <div className={styles.imgContainerSlide}>
      <div className={styles.titleOnSlide}>
        <div className={styles.bgAndText}>
          <h3>{slide.header}</h3>
          <p>{slide.text}</p>
        </div>
      </div>
      <LazyLoadImage src={slide.img} alt={slide.title} />
    </div>
  )
}

export default Item
