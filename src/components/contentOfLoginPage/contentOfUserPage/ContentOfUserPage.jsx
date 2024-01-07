import { useSelector, Suspense, lazy } from '../../shared/utils/reactImports'

import UserInfo from './userInfo/UserInfo'
import ForumBanner from '../../contentOfHomePage/homePageComponents/forumBanner/ForumBanner'
import InformationDesk from '../../contentOfHomePage/homePageComponents/informationDesk/InformationDesk'
import NavMenuOfUserPage from '../contentOfUserPage/navMenuOfUserPage/NavMenuOfUserPage'

import styles from './ContentOfUserPage.module.scss'

const EditProfile = lazy(() => import('./editProfile/EditProfile'))
const FavoriteCars = lazy(() => import('./favoriteCars/FavoriteCars'))

const ContentOfUserPage = () => {
  const { edit } = useSelector((store) => store.registeredAccount)

  return (
    <div className="my-container">
      <NavMenuOfUserPage />
      <div className={styles.mainCOntainerOfUserPage}>
        {edit ? (
          <Suspense fallback={<div>Loading...</div>}>
            <EditProfile />
          </Suspense>
        ) : (
          <>
            <UserInfo />
            <Suspense>
              <FavoriteCars />
            </Suspense>
          </>
        )}
      </div>

      <ForumBanner />
      <InformationDesk />
    </div>
  )
}

export default ContentOfUserPage
