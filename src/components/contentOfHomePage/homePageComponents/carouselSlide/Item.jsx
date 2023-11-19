import styles from './CarouselSlide.module.css'

const Item = ({ slide }) => {
  return (
    <div className={styles.imgContainerSlide}>
      <div className={styles.titleOnSlide}>
        <div className={styles.bgAndText}>
          <h3>{slide.header}</h3>
          <p>{slide.text}</p>
        </div>
      </div>
      <img src={slide.img} alt={slide.title} />
    </div>
  )
}

export default Item
