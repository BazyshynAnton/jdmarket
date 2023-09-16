import { Box } from '@mui/material'
import forumBanner from '../../pictures/forumBanner.jpg'

const ForumBanner = () => {
  return (
    <Box
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        marginTop: '50px',
        cursor: 'pointer',
      }}>
      <img
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        src={forumBanner}
        alt="forum-banner"
      />
    </Box>
  )
}

export default ForumBanner
