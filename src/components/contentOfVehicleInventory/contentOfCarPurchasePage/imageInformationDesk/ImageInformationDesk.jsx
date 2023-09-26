import { useParams } from 'react-router-dom'
import vehiclePageCars from '../../../../data/vehiclePageCars'
import sms from '../../../../pictures/sms.png'

import { Box } from '@mui/material'

import styles from './ImageInformationDesk.module.css'
import { useState } from 'react'
import InfoAboutCar from '../infoAboutCar/InfoAboutCar'
import Discribtion from '../discribtion/Discribtion'

const ImageInformationDesk = () => {
  const { id } = useParams()
  const currId = '8f22002c-8568-4e5b-829c-84cebeea1130'

  const selectedCarId = '8f22002c-8568-4e5b-829c-84cebeea1130'
  const selectedCar = vehiclePageCars.find((car) => car.id === selectedCarId)
  const [image, setImage] = useState(selectedCar.img1)

  return (
    <>
      {id === currId ? (
        <Box>
          <Box className={styles.containerInfoAndSlider}>
            <Box className={styles.mainContainer}>
              <Box className={styles.imgSlider}>
                <img src={image} alt="gtr" />
              </Box>
              <Box className={styles.smallImgs}>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img1)}
                    src={selectedCar.smallImg1}
                    alt="product"
                  />
                </Box>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img2)}
                    src={selectedCar.smallImg2}
                    alt="product"
                  />
                </Box>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img3)}
                    src={selectedCar.smallImg3}
                    alt="product"
                  />
                </Box>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img4)}
                    src={selectedCar.smallImg4}
                    alt="product"
                  />
                </Box>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img5)}
                    src={selectedCar.smallImg5}
                    alt="product"
                  />
                </Box>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img6)}
                    src={selectedCar.smallImg6}
                    alt="product"
                  />
                </Box>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img7)}
                    src={selectedCar.smallImg7}
                    alt="product"
                  />
                </Box>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img8)}
                    src={selectedCar.smallImg8}
                    alt="product"
                  />
                </Box>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img9)}
                    src={selectedCar.smallImg9}
                    alt="product"
                  />
                </Box>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img10)}
                    src={selectedCar.smallImg10}
                    alt="product"
                  />
                </Box>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img11)}
                    src={selectedCar.smallImg11}
                    alt="product"
                  />
                </Box>
                <Box className={styles.imgsSmallBlock}>
                  <img
                    className={styles.imgClick}
                    onClick={() => setImage(selectedCar.img12)}
                    src={selectedCar.smallImg12}
                    alt="product"
                  />
                </Box>
              </Box>
            </Box>
            <InfoAboutCar />
          </Box>
          <Box className={styles.otherBlock}>
            <Discribtion />
          </Box>
        </Box>
      ) : (
        <Box className={styles.containerNotFoundCar}>
          <img src={sms} alt="not-found" />
        </Box>
      )}
    </>
  )
}

export default ImageInformationDesk
