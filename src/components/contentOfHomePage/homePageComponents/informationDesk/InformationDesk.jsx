import {
  useState,
  React,
  CSSTransition,
} from '../../../shared/utils/reactImports'

import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import ManageHistoryIcon from '@mui/icons-material/ManageHistory'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import styles from './InformationDesk.module.scss'

const InformationDesk = () => {
  const nodeRef = React.useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTwo, setIsOpenTwo] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  })

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }
  const handleMouseEnterTwo = () => {
    setIsOpenTwo(true)
  }

  const handleMouseLeaveTwo = () => {
    setIsOpenTwo(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.containerInfo}>
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
      <div className={styles.contentTextInfo}>
        <div className={styles.containerText}>
          <h5 className={styles.header}>CONTACT US</h5>
        </div>
        <div
          className={styles.containerTextModal}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AddIcCallIcon className={styles.phone} />
          <p>+81-573-66-5670</p>
        </div>

        <div className={styles.containerText}>
          <ManageHistoryIcon className={styles.oclock} />
          <div>
            <p>Sales: 7 Days a Week</p>
            <p>Operations: Mon-Fri 9:00AM-6:00PM PST</p>
          </div>
        </div>
        <div
          className={styles.containerText}
          onMouseEnter={handleMouseEnterTwo}
          onMouseLeave={handleMouseLeaveTwo}
        >
          <EmailIcon className={styles.mail} />
          <p>info@jdm.com</p>
        </div>
        <div className={styles.containerText}>
          <WhatsAppIcon className={styles.skype} />
          <div>
            <p>WhatsApp: +818045457447</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformationDesk
