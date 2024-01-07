import {
  NavLink,
  CSSTransition,
  LazyLoadImage,
} from '../../shared/utils/reactImports'

import jdmSports from '../../../assets/pictures/jdmSports.jpg'
import jdmClassic from '../../../assets/pictures/jdmClassic.jpg'
import nonJdm from '../../../assets/pictures/nonJdm.jpg'

import styles from '../Header.module.scss'

const CssTransitionForVehicleInventoryBtn = ({
  nodeRef,
  state,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={state.isMenuOpen}
      timeout={300}
      classNames="absoluteInventory"
      mountOnEnter
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={styles.absoluteInventory}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink
          to="/vehicle-inventory/jdm-sports"
          onClick={() => window.scrollTo(0, 0)}
          className={styles.sectionInventory}
        >
          <LazyLoadImage src={jdmSports} alt="jdm-sports" />
          <p className={styles.textInSection}>JDM SPORTS</p>
        </NavLink>
        <NavLink
          to="/vehicle-inventory/jdm-classic"
          onClick={() => window.scrollTo(0, 0)}
          className={`${styles.sectionInventory} ${styles.borderSection}`}
        >
          <LazyLoadImage src={jdmClassic} alt="jdm-classic" />
          <p className={styles.textInSection}>JDM CLASSIC</p>
        </NavLink>
        <NavLink
          to="/vehicle-inventory/non-jdm"
          onClick={() => window.scrollTo(0, 0)}
          className={styles.sectionInventory}
        >
          <LazyLoadImage src={nonJdm} alt="non-jdm" />
          <p className={styles.textInSection}>NON JDM</p>
        </NavLink>
      </div>
    </CSSTransition>
  )
}

export default CssTransitionForVehicleInventoryBtn
