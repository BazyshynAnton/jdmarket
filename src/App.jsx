import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VehicleInventory from './pages/vehicleInventory/VehicleInventory'
import MainLayout from './layouts/MainLayout'
import JdmSportsPage from './pages/vehicleInventory/jdmSportsPage'
import JdmClassicPage from './pages/vehicleInventory/JdmClassicPage'
import NonJdmPage from './pages/vehicleInventory/NonJdmPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<HomePage />} index />
        <Route path="vehicle-inventory" element={<VehicleInventory />} />
        <Route
          path="vehicle-inventory/:jdm-sports"
          element={<JdmSportsPage />}
        />
        <Route
          path="vehicle-inventory/:jdm-classic"
          element={<JdmClassicPage />}
        />
        <Route path="vehicle-inventory/:non-jdm" element={<NonJdmPage />} />
      </Route>
    </Routes>
  )
}

export default App
