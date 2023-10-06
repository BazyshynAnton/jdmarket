import { Box, Container } from '@mui/material'
import UserInfo from './userInfo/UserInfo'

import styles from './ContentOfUserPage.module.css'
import FavoriteCars from './favoriteCars/FavoriteCars'
import ForumBanner from '../../contentOfHomePage/homePageComponents/forumBanner/ForumBanner'
import InformationDesk from '../../contentOfHomePage/homePageComponents/informationDesk/InformationDesk'
import NavMenuOfUserPage from '../contentOfUserPage/navMenuOfUserPage/NavMenuOfUserPage'
import { useSelector } from 'react-redux'
import EditProfile from './editProfile/EditProfile'
const ContentOfUserPage = () => {
  const { edit } = useSelector((store) => store.registeredAccount)

  return (
    <Container>
      <NavMenuOfUserPage />
      {edit ? (
        <EditProfile />
      ) : (
        <Box className={styles.mainCOntainerOfUserPage}>
          <UserInfo />
          <FavoriteCars />
        </Box>
      )}

      <ForumBanner />
      <InformationDesk />
    </Container>
  )
}

export default ContentOfUserPage
