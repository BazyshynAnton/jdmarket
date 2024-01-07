import { LazyLoadImage } from '../../../shared/utils/reactImports'
import forumBanner from '../../../../assets/pictures/forumBanner.jpg'

const ForumBanner = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        marginTop: '50px',
        cursor: 'pointer',
      }}
    >
      <LazyLoadImage
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        src={forumBanner}
        alt="forum-banner"
      />
    </div>
  )
}

export default ForumBanner
