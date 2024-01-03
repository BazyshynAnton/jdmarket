import { CSSTransition } from 'react-transition-group'

import styles from '../Header.module.scss'

const CssTransitionForCompanyProfileBtn = ({
  nodeRef,
  state,
  handleMouseEnterTwo,
  handleMouseLeaveTwo,
}) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={state.isMenuTwoOpen}
      timeout={300}
      classNames="companyProfile"
      mountOnEnter
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={styles.companyProfile}
        onMouseEnter={handleMouseEnterTwo}
        onMouseLeave={handleMouseLeaveTwo}
      >
        <div className={styles.companySection}>
          <p className={styles.textInCompany}>ABOUT US</p>
        </div>
        <div
          className={`${styles.companySection} ${styles.borderCompanySectionOne}`}
        >
          <p className={styles.textInCompany}>OUR SERVICES</p>
        </div>
        <div
          className={`${styles.companySection} ${styles.borderCompanySectionTwo}`}
        >
          <p className={styles.textInCompany}>WHY CHOOSE US</p>
        </div>
        <div className={styles.companySection}>
          <p className={styles.textInCompany}>TESTIMONIALS</p>
        </div>
      </div>
    </CSSTransition>
  )
}

export default CssTransitionForCompanyProfileBtn
