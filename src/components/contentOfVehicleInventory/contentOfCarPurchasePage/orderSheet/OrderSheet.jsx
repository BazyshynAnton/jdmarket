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
              placeholder="Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <input
              placeholder="Country"
              value={values.country}
              onChange={(e) =>
                setValues({ ...values, country: e.target.value })
              }
            />
            <input
              placeholder="Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <input
              placeholder="Phone"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
            <input defaultValue={'3408'} disabled />
            <textarea
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
