import { CSSTransition } from 'react-transition-group'
import styles from '../Header.module.css'

const CssTransitionForSmallScreenSocialMediaBtn = ({ nodeRef, state }) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={state.isOpenThree}
      timeout={300}
      classNames="dropdown"
      unmountOnExit>
      <div
        ref={nodeRef}
        className={`${
          state.isOpenThree
            ? styles.dropVehicleInventory
            : styles.notOpenVehicleInventory
        }`}>
        <div className={styles.jdmSectionInBurger}>
          <p>MEDIA</p>
        </div>
        <div className={styles.jdmSectionInBurger}>
          <p>FACEBOOK</p>
        </div>
        <div className={styles.jdmSectionInBurger}>
          <p>FORUM</p>
        </div>
      </div>
    </CSSTransition>
  )
}

export default CssTransitionForSmallScreenSocialMediaBtn
