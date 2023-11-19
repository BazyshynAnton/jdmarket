import { useState } from 'react'
import { useSwiper } from 'swiper/react'

import buttonNext from '../../../../../pictures/button-next.png'
import buttonPrevious from '../../../../../pictures/button-previous.png'
import buttonNextRed from '../../../../../pictures/button-next-red.png'
import buttonPreviousRed from '../../../../../pictures/button-previous-red.png'

const SwiperManufactureNavBtns = () => {
  const [arrow, setArrow] = useState(false)
  const [arrowTwo, setArrowTwo] = useState(false)
  const swiper = useSwiper()

  const handleMouseEnter = () => {
    setArrow(true)
  }

  const handleMouseLeave = () => {
    setArrow(false)
  }
  const handleMouseEnterTwo = () => {
    setArrowTwo(true)
  }

  const handleMouseLeaveTwo = () => {
    setArrowTwo(false)
  }
  return (
    <>
      <div
        style={{
          position: 'absolute',
          zIndex: '9999',
          top: '45%',
          left: '10px',
          cursor: 'pointer',
        }}
        onClick={() => swiper.slidePrev()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {arrow ? (
          <img src={buttonPreviousRed} alt="prev" />
        ) : (
          <img src={buttonPrevious} alt="prev" />
        )}
      </div>
      <div
        style={{
          position: 'absolute',
          zIndex: '9999',
          top: '45%',
          right: '10px',
          cursor: 'pointer',
        }}
        onClick={() => swiper.slideNext()}
        onMouseEnter={handleMouseEnterTwo}
        onMouseLeave={handleMouseLeaveTwo}>
        {arrowTwo ? (
          <img src={buttonNextRed} alt="next" />
        ) : (
          <img src={buttonNext} alt="next" />
        )}
      </div>
    </>
  )
}

export default SwiperManufactureNavBtns
