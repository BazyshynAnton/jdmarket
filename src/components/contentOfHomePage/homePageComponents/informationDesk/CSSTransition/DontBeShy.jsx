import { CSSTransition } from '../../../../shared/utils/reactImports'
import styles from '../InformationDesk.module.scss'

const DontBeShy = ({ nodeRef, isOpen, handleMouseEnter, handleMouseLeave }) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={300}
      classNames="modal"
      mountOnEnter
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={styles.modalContent}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className={styles.shyText}>Don't be shy!</p>
        <p>We are always here to help you.</p>
      </div>
    </CSSTransition>
  )
}

export default DontBeShy
