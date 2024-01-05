import { useState, LazyLoadImage } from '../../../../shared/utils/reactImports'
import { useSwiper } from '../../../../shared/utils/swiperImports'

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
        onMouseLeave={handleMouseLeave}
      >
        {arrow ? (
          <LazyLoadImage src={buttonPreviousRed} alt="prev" />
        ) : (
          <LazyLoadImage src={buttonPrevious} alt="prev" />
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
        onMouseLeave={handleMouseLeaveTwo}
      >
        {arrowTwo ? (
          <LazyLoadImage src={buttonNextRed} alt="next" />
        ) : (
          <LazyLoadImage src={buttonNext} alt="next" />
        )}
      </div>
    </>
  )
}

export default SwiperManufactureNavBtns
