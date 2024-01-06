import styles from '../reusableComponents/InfoAndVideoAboutCar.module.scss'

const dummyTextArray = [
  'Nissan Skyline GTR R34 V spec',
  'Factory stock bayside blue color',
  'Upgraded Oil Cooler',
  'Upgraded, larger Intercooler',
  'Exhaust silencer included',
  'NISMO 320km/h Gauge Cluster',
  'IMPUL CPU upgrade',
  'IMPUL Front Pipe',
  "Apex'i AVC-R Boost Controller",
  'Ohlins Shocks Installed',
  'NISMO Front and Rear Stabilizer Bars',
  'Enkei 18 inches wheels',
  'Accident free! Rust Free! Constantly maintained!',
  'NISMO speedometer installed in 1999 when the car was brand new.',
  'True, verified mileage',
  'Papers confirm there have been only two private owners and the fist one had owned the car for only 8 months.',
  'So it is almost one owner car with low mileage.',
  'Ownership papers are available upon the request.',
  'NEGOTIATE THE BEST PRICE',
]

const Description = () => {
  return (
    <div className={styles.descrip}>
      {dummyTextArray.map((dummy) => {
        return <p key={dummy}>{dummy}</p>
      })}
    </div>
  )
}

export default Description
