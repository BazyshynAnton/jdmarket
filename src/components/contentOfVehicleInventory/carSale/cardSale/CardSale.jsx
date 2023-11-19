import styles from './CardSale.module.css'

const CardSale = ({ card }) => {
  return (
    <div className={styles.mainCardContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.imgAvailableSoldContainer}>
          <img src={card.imgTwo} alt="available/sold" />
        </div>
        <img src={card.img} alt={card.text} />
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
