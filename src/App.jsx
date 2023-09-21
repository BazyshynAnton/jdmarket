import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VehicleInventory from './pages/VehicleInventory'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="vehicle-inventory" element={<VehicleInventory />} />
      </Route>
    </Routes>
  )
}

export default App
