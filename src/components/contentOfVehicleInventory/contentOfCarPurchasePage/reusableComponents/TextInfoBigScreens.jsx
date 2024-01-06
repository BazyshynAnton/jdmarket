import styles from './InfoAndVideoAboutCar.module.scss'

const TextInfoBigScreens = ({
  stockNumber,
  mileage,
  year,
  fuel,
  chassisNumber,
  transmission,
}) => {
  return (
    <div className={styles.mainTxtContainer}>
      <div className={styles.info}>
        <p>Stock number:</p>
        <p>Mileage:</p>
        <p>Year:</p>
        <p>Fuel:</p>
        <p>Chassis number:</p>
        <p>Transmission:</p>
      </div>
      <div className={styles.info}>
        <p>{stockNumber}</p>
        <p>{mileage}</p>
        <p>{year}</p>
        <p>{fuel}</p>
        <p>{chassisNumber}</p>
        <p>{transmission}</p>
      </div>
    </div>
  )
}

export default TextInfoBigScreens
