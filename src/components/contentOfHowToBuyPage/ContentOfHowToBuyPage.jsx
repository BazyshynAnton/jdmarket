import { NavLink, LazyLoadImage } from '../shared/utils/reactImports'

import selectCar from '../../assets/pictures/selectCar.png'
import order from '../../assets/pictures/order.png'
import invoice from '../../assets/pictures/invoice.png'
import payment from '../../assets/pictures/payment.png'
import shipment from '../../assets/pictures/shipment.png'
import paperwork from '../../assets/pictures/paperwork.png'
import drive from '../../assets/pictures/drive.png'
import arrowDownHowToBuy from '../../assets/pictures/arrowDownHowToBuy.png'
import stockSearch from '../../assets/pictures/stockSearch.png'

import styles from './ContentOfHowToBuyPage.module.scss'

const ContentOfHowToBuyPage = () => {
  return (
    <div className="my-container">
      <div className={styles.navigationBoxContainer}>
        <NavLink to="/" className={styles.navTextLink}>
          <p>HOME</p>
        </NavLink>
        <p>{'>'}</p>
        <p>How to buy?</p>
      </div>

      <div className={styles.wrapperInfoContainer}>
        <div
          style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '13.5px' }}
          className={styles.infoContainer}
        >
          <h1>How to Buy JDM Inventory Vehicles?</h1>
          <h3>
            Importing your dream vehicle from Japan is not as difficult as you
            think! Here are 7 easy steps of purchasing process of JDM Co., Ltd.
            inventory cars
          </h3>
          <div>
            <LazyLoadImage
              src={selectCar}
              alt="select-car-instructions"
              className={styles.coverImg}
            />
            <LazyLoadImage src={arrowDownHowToBuy} alt="down-arrow" />
            <LazyLoadImage
              src={order}
              alt="order-instructions"
              className={styles.coverImg}
            />
            <LazyLoadImage src={arrowDownHowToBuy} alt="down-arrow" />
            <LazyLoadImage
              src={invoice}
              alt="invoice-instructions"
              className={styles.coverImg}
            />
            <LazyLoadImage src={arrowDownHowToBuy} alt="down-arrow" />
            <LazyLoadImage
              src={payment}
              alt="payment-instructions"
              className={styles.coverImg}
            />
            <LazyLoadImage src={arrowDownHowToBuy} alt="down-arrow" />
            <LazyLoadImage
              src={shipment}
              alt="shipment-instructions"
              className={styles.coverImg}
            />
            <LazyLoadImage src={arrowDownHowToBuy} alt="down-arrow" />
            <LazyLoadImage
              src={paperwork}
              alt="paperwork-instructions"
              className={styles.coverImg}
            />
            <LazyLoadImage src={arrowDownHowToBuy} alt="down-arrow" />
            <LazyLoadImage
              src={drive}
              alt="drive-instructions"
              className={styles.coverImg}
            />
          </div>

          <h4>
            *If you would like to have any sort of assistance in regards with
            above specified procedures, please feel free to contact us!
          </h4>

          <h2>Non-stock special purchase</h2>
          <h4>
            * JDM Co. Ltd is exclusive exporting agent of high performance and
            classic vehicles in Japan. If the vehicle that you want is not
            available in our current stock, send us an inquiry and we will find
            it for you in Japan.
          </h4>
          <LazyLoadImage
            src={stockSearch}
            alt="stock"
            className={styles.coverImg}
          />
        </div>
      </div>
    </div>
  )
}

export default ContentOfHowToBuyPage
