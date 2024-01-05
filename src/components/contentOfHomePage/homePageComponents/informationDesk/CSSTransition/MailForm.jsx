import { CSSTransition } from '../../../../shared/utils/reactImports'
import styles from '../InformationDesk.module.scss'

const MailForm = ({
  nodeRef,
  isOpenTwo,
  handleMouseEnterTwo,
  handleMouseLeaveTwo,
  handleSubmit,
  formData,
  handleChange,
}) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpenTwo}
      timeout={300}
      classNames="help"
      mountOnEnter
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={styles.helpContent}
        onMouseEnter={handleMouseEnterTwo}
        onMouseLeave={handleMouseLeaveTwo}
      >
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Name*"
              name="name"
              value={formData.name}
              id="name"
              autoComplete="name"
              onChange={handleChange}
            ></input>
            <input
              type="email"
              placeholder="Email*"
              name="email"
              value={formData.email}
              id="email"
              autoComplete="email"
              onChange={handleChange}
            ></input>
          </div>
          <textarea
            placeholder="Comment*"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
          <div className={styles.btnContainer}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </CSSTransition>
  )
}

export default MailForm
