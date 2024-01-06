import styles from './InfoAndVideoAboutCar.module.scss'

const colorForInformation = {
  color: '#800000',
}

const TextInfoSmallScreens = ({
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
        <p style={colorForInformation}>{stockNumber}</p>
        <p>Mileage:</p>
        <p style={colorForInformation}>{mileage}</p>
        <p>Year:</p>
        <p style={colorForInformation}>{year}</p>
        <p>Fuel:</p>
        <p style={colorForInformation}>{fuel}</p>
        <p>Chassis number:</p>
        <p style={colorForInformation}>{chassisNumber}</p>
        <p>Transmission:</p>
        <p style={colorForInformation}>{transmission}</p>
      </div>
    </div>
  )
}

export default TextInfoSmallScreens
