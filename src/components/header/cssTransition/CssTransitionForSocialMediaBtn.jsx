import React from 'react'
import { CSSTransition } from 'react-transition-group'

import styles from '../Header.module.scss'

const CssTransitionForSocialMediaBtn = ({
  nodeRef,
  state,
  handleMouseEnterThree,
  handleMouseLeaveThree,
}) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={state.isMenuThreeOpen}
      timeout={300}
      classNames="companyProfile"
      mountOnEnter
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={styles.mediaProfile}
        onMouseEnter={handleMouseEnterThree}
        onMouseLeave={handleMouseLeaveThree}
      >
        <div className={styles.mediaSection}>
          <p className={styles.textInMedia}>MEDIA</p>
        </div>
        <div
          className={`${styles.mediaSection} ${styles.borderMediaSectionOne}`}
        >
          <p className={styles.textInMedia}>BLOG</p>
        </div>
        <div
          className={`${styles.mediaSection} ${styles.borderMediaSectionTwo}`}
        >
          <p className={styles.textInMedia}>FACEBOOK</p>
        </div>
        <div className={styles.mediaSection}>
          <p className={styles.textInMedia}>FORUM</p>
        </div>
      </div>
    </CSSTransition>
  )
}

export default CssTransitionForSocialMediaBtn
