import { Box } from '@mui/material'
import React from 'react'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import ManageHistoryIcon from '@mui/icons-material/ManageHistory'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import styles from './InformationDesk.module.css'

const InformationDesk = () => {
  return (
    <Box className={styles.containerInfo}>
      <Box className={styles.containerText}>
        <h5 className={styles.header}>CONTACT US</h5>
      </Box>
      <Box className={styles.containerText}>
        <AddIcCallIcon className={styles.phone} />
        <p>+81-573-66-5670</p>
      </Box>
      <Box className={styles.containerText}>
        <ManageHistoryIcon className={styles.oclock} />
        <Box>
          <p>Sales: 7 Days a Week</p>
          <p>Operations: Mon-Fri 9:00AM-6:00PM PST</p>
        </Box>
      </Box>
      <Box className={styles.containerText}>
        <EmailIcon className={styles.mail} />
        <p>info@jdm-expo.com</p>
      </Box>
      <Box className={styles.containerText}>
        <WhatsAppIcon className={styles.skype} />
        <Box>
          <p>Skype: Jdmexpo</p>
          <p>LINE ID: Skyliner5775</p>
          <p>WhatsApp: +818045457447</p>
        </Box>
      </Box>
    </Box>
  )
}

export default InformationDesk
