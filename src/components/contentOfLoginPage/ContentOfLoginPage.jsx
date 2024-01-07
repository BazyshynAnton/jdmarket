import NavigationMenu from './navigationMenu/NavigationMenu'
import CreateAccountAndRegisteredAccount from './createAccountAndRegisteredAccount/CreateAccountAndRegisteredAccount'
import InformationDesk from '../contentOfHomePage/homePageComponents/informationDesk/InformationDesk'
import LatestArrivals from '../contentOfHomePage/homePageComponents/carouselsOfCars/latestArrivals/LatestArrivals'

const ContentOfLoginPage = () => {
  return (
    <div className="my-container">
      <NavigationMenu />
      <CreateAccountAndRegisteredAccount />
      <LatestArrivals />
      <InformationDesk />
    </div>
  )
}

export default ContentOfLoginPage
