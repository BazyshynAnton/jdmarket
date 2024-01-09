import CarSearchSale from './carSearchSale/CarSearchSale'
import InformationDesk from '../../contentOfHomePage/homePageComponents/informationDesk/InformationDesk'
const ContentOfVehicleInventory = () => {
  return (
    <div className="my-container">
      <CarSearchSale />
      <InformationDesk />
    </div>
  )
}

export default ContentOfVehicleInventory
