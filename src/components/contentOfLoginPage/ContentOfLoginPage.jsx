import { Container } from '@mui/material'
import NavigationMenu from './navigationMenu/NavigationMenu'
import CreateAccountAndRegisteredAccount from './createAccountAndRegisteredAccount/CreateAccountAndRegisteredAccount'
import InformationDesk from '../contentOfHomePage/homePageComponents/informationDesk/InformationDesk'
import LatestArrivals from '../contentOfHomePage/homePageComponents/carouselsOfCars/latestArrivals/LatestArrivals'

const ContentOfLoginPage = () => {
  return (
    <Container>
      <NavigationMenu />
      <CreateAccountAndRegisteredAccount />
      <LatestArrivals />
      <InformationDesk />
    </Container>
  )
}

export default ContentOfLoginPage
