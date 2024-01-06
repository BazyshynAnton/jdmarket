import {
  useEffect,
  useState,
  LazyLoadImage,
} from '../../../shared/utils/reactImports'
import { useParams } from 'react-router-dom'

import OrderSheet from '../orderSheet/OrderSheet'
import Description from '../description/Description'
import InfoAboutCar from '../infoAboutCar/InfoAboutCar'

import sms from '../../../../pictures/sms.png'

import vehiclePageCars from '../../../../data/vehiclePageCars'

import styles from './ImageInformationDesk.module.scss'

const SmallImage = ({ img, smallImg, setImage }) => (
  <div className={styles.imgsSmallBlock}>
    <LazyLoadImage
      className={styles.imgClick}
      onClick={() => setImage(img)}
      src={smallImg}
      alt="product"
    />
  </div>
)

const ImageInformationDesk = () => {
  const { id } = useParams()
  const currId = '8f22002c-8568-4e5b-829c-84cebeea1130'

  const selectedCar = vehiclePageCars.find((car) => car.id === currId)
  const [image, setImage] = useState(selectedCar.img1)

  //Control window size
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 741)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 741)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const smallImages = Array.from({ length: 12 }, (_, i) => (
    <SmallImage
      key={i}
      img={selectedCar[`img${i + 1}`]}
      smallImg={selectedCar[`smallImg${i + 1}`]}
      setImage={setImage}
    />
  ))

  return (
    <>
      {(!!isDesktop || !isDesktop) && (
        <>
          {id === currId ? (
            <>
              <div className={styles.containerInfoAndSlider}>
                {!isDesktop && <InfoAboutCar />}
                <div className={styles.mainContainer}>
                  <div className={styles.imgSlider}>
                    <LazyLoadImage src={image} alt="gtr" />
                  </div>
                  <div className={styles.smallImgs}>{smallImages}</div>
                </div>
                {isDesktop && <InfoAboutCar />}
              </div>
              <div className={styles.otherBlock}>
                <Description />
              </div>
              <OrderSheet />
            </>
          ) : (
            <div className={styles.containerNotFoundCar}>
              <LazyLoadImage src={sms} alt="not-found" />
            </div>
          )}
        </>
      )}
    </>
  )
}

export default ImageInformationDesk
