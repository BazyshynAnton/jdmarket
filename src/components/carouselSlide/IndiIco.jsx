import { Box } from '@mui/material'
import React from 'react'
import styles from './CarouselSlide.module.css'

const IndiIco = ({ slide }) => {
  return (
    <Box className={styles.borderContainerIco}>
      <Box className={styles.containerIco}>
        <img src={slide.img} alt={slide.title} />
      </Box>
    </Box>
  )
}

export default IndiIco
