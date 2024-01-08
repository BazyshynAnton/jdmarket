import { Outlet } from 'react-router-dom'
import { Suspense } from '../components/shared/utils/reactImports'

import BackToTopBtn from '../components/backToTopBtn/BackToTopBtn'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Spinner from '../components/spinner/Spinner'

const MainLayout = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <BackToTopBtn />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  )
}

export default MainLayout
