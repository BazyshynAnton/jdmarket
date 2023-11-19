import styles from '../CarouselsOfCars.module.css'

const CardOfManufacture = ({ img }) => {
  return (
    <div className={styles.cardOfManufactureContainer}>
      <img src={img} alt="car" />
    </div>
  )
}

export default CardOfManufacture
