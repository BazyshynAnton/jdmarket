import { Box, Container } from '@mui/material'
import UserInfo from './userInfo/UserInfo'

import styles from './ContentOfUserPage.module.css'
import FavoriteCars from './favoriteCars/FavoriteCars'

const ContentOfUserPage = () => {
  return (
    <Container>
      <Box className={styles.mainCOntainerOfUserPage}>
        <UserInfo />
        <FavoriteCars />
      </Box>
    </Container>
  )
}

export default ContentOfUserPage
