import { LazyLoadImage } from '../../../../shared/utils/reactImports'

import styles from '../../../carSale/cardSale/CardSale.module.scss'

const CardSale = ({ card }) => {
  return (
    <div className={styles.mainCardContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.imgAvailableSoldContainer}>
          <LazyLoadImage src={card.imgTwo} alt="available/sold" />
        </div>
        <LazyLoadImage src={card.img} alt={card.text} />
      </div>
      <div className={styles.textContainer}>
        <p>{card.text}</p>
        <div className={styles.btnContainer}>
          <button>learn more</button>
        </div>
      </div>
    </div>
  )
}

export default CardSale
