import { Box } from '@mui/material'

const NotFound = () => {
  return (
    <div className="wrapper">
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          color: 'black',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '100px',
        }}
      >
        404-NotFound🫨
      </Box>
    </div>
  )
}

export default NotFound
