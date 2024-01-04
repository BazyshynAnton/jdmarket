import {
  NavLink,
  CSSTransition,
  LazyLoadImage,
} from '../../shared/utils/reactImports'

import jdmSports from '../../../pictures/jdmSports.jpg'
import jdmClassic from '../../../pictures/jdmClassic.jpg'
import nonJdm from '../../../pictures/nonJdm.jpg'

import styles from '../Header.module.scss'

const CssTransitionForSmallScreenVehicleInventoryBtn = ({
  nodeRef,
  state,
  setOpen,
}) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={state.isOpen}
      timeout={300}
      classNames="dropdown"
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={`${
          state.isOpen
            ? styles.dropVehicleInventory
            : styles.notOpenVehicleInventory
        }`}
      >
        <NavLink
          to="/vehicle-inventory/:jdm-sports"
          onClick={() => {
            window.scrollTo(0, 0)
            setOpen(false)
          }}
        >
          <div className={styles.jdmSectionInBurger}>
            <p>JDM SPORTS</p>
            <LazyLoadImage src={jdmSports} alt="jdm-sports" />
          </div>
        </NavLink>
        <NavLink
          to="/vehicle-inventory/:jdm-classic"
          onClick={() => {
            window.scrollTo(0, 0)
            setOpen(false)
          }}
        >
          <div className={styles.jdmSectionInBurger}>
            <p>JDM CLASSIC</p>
            <LazyLoadImage src={jdmClassic} alt="jdm-classic" />
          </div>
        </NavLink>
        <NavLink
          to="/vehicle-inventory/:non-jdm"
          onClick={() => {
            window.scrollTo(0, 0)
            setOpen(false)
          }}
        >
          <div className={styles.jdmSectionInBurger}>
            <p>NON JDM</p>
            <LazyLoadImage src={nonJdm} alt="non-jdm" />
          </div>
        </NavLink>
      </div>
    </CSSTransition>
  )
}

export default CssTransitionForSmallScreenVehicleInventoryBtn
