import { Box, FormControl } from '@mui/material'
import React, { useState } from 'react'
import stockSearch from '../../../../pictures/stockSearch.png'

import styles from './OrderSheet.module.css'

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
      <Box className={styles.orderSheet}>ORDER SHEET</Box>
      <hr className={styles.lineUnderOrderSheet} />

      <Box className={styles.containerOfForm}>
        <p>
          If you are interested in purchasing this car, fill out the contact
          form below and we will get back to you within 1-2 business days.
        </p>

        <form onSubmit={handleFormSubmit}>
          <FormControl className={styles.formStyles}>
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
              onChange={(e) =>
                setValues({ ...values, country: e.target.value })
              }
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
              type="number"
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
              onChange={(e) =>
                setValues({ ...values, inquiry: e.target.value })
              }
            />
          </FormControl>

          <button type="submit">send</button>
        </form>

        <img src={stockSearch} alt="search-other-than-stock" />
      </Box>
    </>
  )
}

export default OrderSheet
