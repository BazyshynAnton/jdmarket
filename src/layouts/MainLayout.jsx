import { Outlet } from 'react-router-dom'
import BackToTopBtn from '../components/backToTopBtn/BackToTopBtn'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Suspense } from 'react'
const MainLayout = () => {
  return (
    <>
      <Header />
      <BackToTopBtn />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default MainLayout
