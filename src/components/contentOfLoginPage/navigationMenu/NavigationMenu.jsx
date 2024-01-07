import {
  NavLink,
  useDispatch,
  useSelector,
} from '../../shared/utils/reactImports'

import { backToLoginPage } from '../createAccountAndRegisteredAccount/createAccountSlice'

import styles from '../ContentOfLoginPage.module.scss'

const NavigationMenu = () => {
  const dispatch = useDispatch()
  const { registration } = useSelector((store) => store.formRegister)

  const backToLoginPageLink = () => {
    dispatch(backToLoginPage())
  }

  return (
    <div className={styles.mainNavContainer}>
      <div className={styles.navContainer}>
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
          <p className={styles.linkNav}>HOME</p>
        </NavLink>
        <p>{'>'}</p>
        <p
          className={registration ? styles.linkNav : ''}
          onClick={registration ? backToLoginPageLink : () => {}}
        >
          Authentication
        </p>
        {registration && (
          <>
            <p>{'>'}</p>
            <p>Create your account</p>
          </>
        )}
      </div>

      {!registration ? (
        <p className={styles.headerOfPage}>Authentication</p>
      ) : (
        <p className={styles.headerOfPage}>Create an account</p>
      )}
    </div>
  )
}

export default NavigationMenu
