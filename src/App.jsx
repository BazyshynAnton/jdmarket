import { lazy } from './components/shared/utils/reactImports'
import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const VehicleInventory = lazy(() =>
  import('./pages/vehicleInventory/VehicleInventory')
)
const JdmSportsPage = lazy(() =>
  import('./pages/vehicleInventory/JdmSportsPage')
)
const JdmClassicPage = lazy(() =>
  import('./pages/vehicleInventory/JdmClassicPage')
)
const NonJdmPage = lazy(() => import('./pages/vehicleInventory/NonJdmPage'))
const HowToBuyPage = lazy(() => import('./pages/HowToBuyPage'))
const CarPurchasePage = lazy(() => import('./pages/CarPurchasePage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const UserPage = lazy(() => import('./pages/UserPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<HomePage />} index />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="vehicle-inventory" element={<VehicleInventory />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="vehicle-inventory/:jdm-sports"
          element={<JdmSportsPage />}
        />
        <Route
          path="vehicle-inventory/:jdm-classic"
          element={<JdmClassicPage />}
        />
        <Route path="vehicle-inventory/:non-jdm" element={<NonJdmPage />} />
        <Route path="how-to-buy" element={<HowToBuyPage />} />
        <Route path="vehicle-inventory/:id" element={<CarPurchasePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
