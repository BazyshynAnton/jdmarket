import { Outlet } from 'react-router-dom'
import BackToTopBtn from '../components/backToTopBtn/BackToTopBtn'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
const MainLayout = () => {
  return (
    <>
      <Header />
      <BackToTopBtn />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
