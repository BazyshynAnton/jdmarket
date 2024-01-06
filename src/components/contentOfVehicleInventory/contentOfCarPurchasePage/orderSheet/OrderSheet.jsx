import { useState, LazyLoadImage } from '../../../shared/utils/reactImports'

import stockSearch from '../../../../pictures/stockSearch.png'

import styles from './OrderSheet.module.scss'

const OrderSheet = () => {
  const [values, setValues] = useState({
    name: '',
    country: '',
    email: '',
    phone: '',
    inquiry: '',
  })

  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <div className={styles.orderSheet}>ORDER SHEET</div>
      <hr className={styles.lineUnderOrderSheet} />

      <div className={styles.containerOfForm}>
        <p>
          If you are interested in purchasing this car, fill out the contact
          form below and we will get back to you within 1-2 business days.
        </p>

        <form onSubmit={handleFormSubmit} className={styles.formStyles}>
          <input
            id="name"
            placeholder="Name"
            value={values.name}
            autoComplete="name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <input
            id="country"
            placeholder="Country"
            value={values.country}
            autoComplete="name"
            onChange={(e) => setValues({ ...values, country: e.target.value })}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={values.email}
            autoComplete="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            type="tel"
            id="phone"
            placeholder="Phone"
            value={values.phone}
            autoComplete="phone"
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
          <input id="postIndex" defaultValue={'3408'} disabled />
          <textarea
            id="inquiry"
            placeholder="Inquiry"
            value={values.inquiry}
            onChange={(e) => setValues({ ...values, inquiry: e.target.value })}
          />

          <button type="submit">send</button>
        </form>

        <LazyLoadImage src={stockSearch} alt="search-other-than-stock" />
      </div>
    </>
  )
}

export default OrderSheet
