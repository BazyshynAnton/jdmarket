import { useEffect, useState } from '../../../shared/utils/reactImports'
import { useParams } from 'react-router-dom'

import OrderSheet from '../orderSheet/OrderSheet'
import Description from '../description/Description'
import InfoAboutCar from '../infoAboutCar/InfoAboutCar'

import sms from '../../../../pictures/sms.png'

import vehiclePageCars from '../../../../data/vehiclePageCars'

import styles from './ImageInformationDesk.module.scss'

const ImageInformationDesk = () => {
  const { id } = useParams()
  const currId = '8f22002c-8568-4e5b-829c-84cebeea1130'

  const selectedCarId = '8f22002c-8568-4e5b-829c-84cebeea1130'
  const selectedCar = vehiclePageCars.find((car) => car.id === selectedCarId)
  const [image, setImage] = useState(selectedCar.img1)

  //Controll window size
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

  return (
    <>
      {!!isDesktop && (
        <>
          {id === currId ? (
            <>
              <div className={styles.containerInfoAndSlider}>
                <div className={styles.mainContainer}>
                  <div className={styles.imgSlider}>
                    <img src={image} alt="gtr" />
                  </div>
                  <div className={styles.smallImgs}>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img1)}
                        src={selectedCar.smallImg1}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img2)}
                        src={selectedCar.smallImg2}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img3)}
                        src={selectedCar.smallImg3}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img4)}
                        src={selectedCar.smallImg4}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img5)}
                        src={selectedCar.smallImg5}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img6)}
                        src={selectedCar.smallImg6}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img7)}
                        src={selectedCar.smallImg7}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img8)}
                        src={selectedCar.smallImg8}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img9)}
                        src={selectedCar.smallImg9}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img10)}
                        src={selectedCar.smallImg10}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img11)}
                        src={selectedCar.smallImg11}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img12)}
                        src={selectedCar.smallImg12}
                        alt="product"
                      />
                    </div>
                  </div>
                </div>
                <InfoAboutCar />
              </div>
              <div className={styles.otherBlock}>
                <Description />
              </div>
              <OrderSheet />
            </>
          ) : (
            <div className={styles.containerNotFoundCar}>
              <img src={sms} alt="not-found" />
            </div>
          )}
        </>
      )}

      {!isDesktop && (
        <>
          {id === currId ? (
            <>
              <div className={styles.containerInfoAndSlider}>
                <InfoAboutCar />

                <div className={styles.mainContainer}>
                  <div className={styles.imgSlider}>
                    <img src={image} alt="gtr" />
                  </div>
                  <div className={styles.smallImgs}>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img1)}
                        src={selectedCar.smallImg1}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img2)}
                        src={selectedCar.smallImg2}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img3)}
                        src={selectedCar.smallImg3}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img4)}
                        src={selectedCar.smallImg4}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img5)}
                        src={selectedCar.smallImg5}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img6)}
                        src={selectedCar.smallImg6}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img7)}
                        src={selectedCar.smallImg7}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img8)}
                        src={selectedCar.smallImg8}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img9)}
                        src={selectedCar.smallImg9}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img10)}
                        src={selectedCar.smallImg10}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img11)}
                        src={selectedCar.smallImg11}
                        alt="product"
                      />
                    </div>
                    <div className={styles.imgsSmallBlock}>
                      <img
                        className={styles.imgClick}
                        onClick={() => setImage(selectedCar.img12)}
                        src={selectedCar.smallImg12}
                        alt="product"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.otherBlock}>
                <Description />
              </div>
              <OrderSheet />
            </>
          ) : (
            <div className={styles.containerNotFoundCar}>
              <img src={sms} alt="not-found" />
            </div>
          )}
        </>
      )}
    </>
  )
}

export default ImageInformationDesk
