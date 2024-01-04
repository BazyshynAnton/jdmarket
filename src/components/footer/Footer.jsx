import { useState, LazyLoadImage } from '../shared/utils/reactImports'

import facebookIconTwo from '../../pictures/facebookIconTwo.png'
import twitterIcon from '../../pictures/twitterIcon.png'
import instIcon from '../../pictures/instIcon.png'
import gPlusIcon from '../../pictures/gPlusIcon.png'

import styles from './Footer.module.scss'

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
    <div className={styles.footerContainerOverflow}>
      <div className="my-container">
        <div className={styles.footerContainer}>
          <div className={styles.mediaContainer}>
            <div className={styles.facebookContainer}>
              <LazyLoadImage src={facebookIconTwo} alt="facebook" />
            </div>
            <div className={styles.twitterContainer}>
              <LazyLoadImage src={twitterIcon} alt="twitter" />
            </div>
            <div className={styles.instagramContainer}>
              <LazyLoadImage src={instIcon} alt="instagram" />
            </div>
            <div className={styles.googlePlusContainer}>
              <LazyLoadImage src={gPlusIcon} alt="gPlusIcon" />
            </div>
          </div>
          <div className={styles.siteMapContainer}>
            <h4>SITE MAP</h4>
            <div className={styles.siteMapNestedMain}>
              <div className={styles.siteMapNestedOne}>
                <p>Vehicle inventory</p>
                <p>How to buy?</p>
                <p>Importing JDM cars to USA</p>
                <p>Shipment cost from Japan</p>
              </div>
              <div className={styles.siteMapNestedTwo}>
                <p>About us</p>
                <p>Why choose us?</p>
                <p>Testimonials</p>
                <p>FAQ</p>
              </div>
            </div>
          </div>
          <div className={styles.newsLetterContainer}>
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
                onChange={handleChange}
              ></input>
              <input
                type="email"
                placeholder="Email*"
                name="email"
                value={formData.email}
                id="email"
                autoComplete="email"
                onChange={handleChange}
              ></input>
              <button
                type="submit"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
