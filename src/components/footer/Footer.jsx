import { Box, Container } from '@mui/material'
import styles from './Footer.module.css'
import { useState } from 'react'
import facebookIconTwo from '../../pictures/facebookIconTwo.png'
import twitterIcon from '../../pictures/twitterIcon.png'
import instIcon from '../../pictures/instIcon.png'
import gPlusIcon from '../../pictures/gPlusIcon.png'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Box className={styles.footerContainerOverflow}>
      <Container>
        <Box className={styles.footerContainer}>
          <Box className={styles.mediaContainer}>
            <Box className={styles.facebookContainer}>
              <img src={facebookIconTwo} alt="facebook" />
            </Box>
            <Box className={styles.twitterContainer}>
              <img src={twitterIcon} alt="twitter" />
            </Box>
            <Box className={styles.instagramContainer}>
              <img src={instIcon} alt="instagram" />
            </Box>
            <Box className={styles.googlePlusContainer}>
              <img src={gPlusIcon} alt="gPlusIcon" />
            </Box>
          </Box>
          <Box className={styles.siteMapContainer}>
            <h4>SITE MAP</h4>
            <Box className={styles.siteMapNestedMain}>
              <Box className={styles.siteMapNestedOne}>
                <p>Vehicle inventory</p>
                <p>How to buy?</p>
                <p>Importing JDM cars to USA</p>
                <p>Shipment cost from Japan</p>
              </Box>
              <Box className={styles.siteMapNestedTwo}>
                <p>About us</p>
                <p>Why choose us?</p>
                <p>Testimonials</p>
                <p>FAQ</p>
              </Box>
            </Box>
          </Box>
          <Box className={styles.newsLetterContainer}>
            <h4>NEWSLETTER</h4>
            <p>
              Sign up to be the first to know about our operation news, newly
              arrived vehicles and other great deals!
            </p>
            <form onSubmit={handleSubmit} className={styles.newsLetterForm}>
              <input
                type="text"
                placeholder="Name*"
                name="name"
                value={formData.name}
                id="name"
                autoComplete="name"
                onChange={handleChange}></input>
              <input
                type="email"
                placeholder="Email*"
                name="email"
                value={formData.email}
                id="email"
                autoComplete="email"
                onChange={handleChange}></input>
              <button type="submit">sign up</button>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
