import {
  useState,
  React,
  lazy,
  Suspense,
  LazyLoadImage,
} from '../../../shared/utils/reactImports'

import phoneForInfoDesk from '../../../../assets/pictures/app-icons/phoneForInfoDesk.png'
import clockIcon from '../../../../assets/pictures/app-icons/clockIcon.png'
import mailFOrInfoDesk from '../../../../assets/pictures/app-icons/mailForInfoDesk.png'
import whatsIcon from '../../../../assets/pictures/app-icons/whatsIcon.png'

import styles from './InformationDesk.module.scss'

const DontBeShy = lazy(() => import('./CSSTransition/DontBeShy'))
const MailForm = lazy(() => import('./CSSTransition/MailForm'))

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
      <Suspense>
        <DontBeShy
          nodeRef={nodeRef}
          isOpen={isOpen}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </Suspense>
      <Suspense>
        <MailForm
          nodeRef={nodeRef}
          isOpenTwo={isOpenTwo}
          handleMouseEnterTwo={handleMouseEnterTwo}
          handleMouseLeaveTwo={handleMouseLeaveTwo}
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      </Suspense>
      <div className={styles.contentTextInfo}>
        <div className={styles.containerText}>
          <h5 className={styles.header}>CONTACT US</h5>
        </div>
        <div
          className={styles.containerTextModal}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            style={{
              width: '32px',
              height: '30px',
              background: '#5a5a5a',
              borderRadius: '5px',
            }}
          >
            <LazyLoadImage
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              src={phoneForInfoDesk}
              alt="whatsApp"
            />
          </div>
          <p>+81-573-66-5670</p>
        </div>

        <div className={styles.containerText}>
          <div
            style={{
              width: '43px',
              height: '40px',
              background: '#5a5a5a',
              borderRadius: '5px',
            }}
          >
            <LazyLoadImage
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              src={clockIcon}
              alt="whatsApp"
            />
          </div>
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
          <div
            style={{
              width: '35px',
              height: '27px',
              background: '#5a5a5a',
              borderRadius: '5px',
            }}
          >
            <LazyLoadImage
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              src={mailFOrInfoDesk}
              alt="whatsApp"
            />
          </div>
          <p>info@jdm.com</p>
        </div>
        <div className={styles.containerText}>
          <div style={{ width: '40px', height: '40px', background: '#5a5a5a' }}>
            <LazyLoadImage
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              src={whatsIcon}
              alt="whatsApp"
            />
          </div>
          <div>
            <p>WhatsApp: +818045457447</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformationDesk
