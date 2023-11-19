import styles from './CarouselSlide.module.css'

const IndiIco = ({ slide }) => {
  return (
    <div className={styles.borderContainerIco}>
      <div className={styles.containerIco}>
        <img src={slide.img} alt={slide.title} />
      </div>
    </div>
  )
}

export default IndiIco
