import { CSSTransition } from 'react-transition-group'
import styles from '../Header.module.css'

const CssTransitionForSmallScreenCompanyProfileBtn = ({ nodeRef, state }) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={state.isOpenTwo}
      timeout={300}
      classNames="dropdown"
      unmountOnExit>
      <div
        ref={nodeRef}
        className={`${
          state.isOpenTwo
            ? styles.dropVehicleInventory
            : styles.notOpenVehicleInventory
        }`}>
        <div className={styles.jdmSectionInBurger}>
          <p> ABOUT US</p>
        </div>
        <div className={styles.jdmSectionInBurger}>
          <p>OUR SERVICES</p>
        </div>
        <div className={styles.jdmSectionInBurger}>
          <p>WHY CHOOSE US</p>
        </div>
        <div className={styles.jdmSectionInBurger}>
          <p> TESTIMONIALS</p>
        </div>
      </div>
    </CSSTransition>
  )
}

export default CssTransitionForSmallScreenCompanyProfileBtn
