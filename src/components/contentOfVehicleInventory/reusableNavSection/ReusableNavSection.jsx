import { LazyLoadImage } from '../../shared/utils/reactImports'

import styles from './ReusableNavSection.module.scss'

const ReusableNavSection = ({ picture, setSectionMark, carName, carMake }) => {
  return (
    <div className={styles.section} onClick={() => setSectionMark(carName)}>
      <LazyLoadImage src={picture} alt="section" />
      <p>
        <i>{carMake}</i>
      </p>
    </div>
  )
}

export default ReusableNavSection
