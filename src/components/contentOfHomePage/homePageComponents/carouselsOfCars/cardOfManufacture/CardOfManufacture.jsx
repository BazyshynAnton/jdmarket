import { LazyLoadImage } from '../../../../shared/utils/reactImports'

import styles from '../CarouselsOfCars.module.scss'

const CardOfManufacture = ({ img }) => {
  return (
    <div className={styles.cardOfManufactureContainer}>
      <LazyLoadImage src={img} alt="car" />
    </div>
  )
}

export default CardOfManufacture
