import {
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material'

import ThumbUpIcon from '@mui/icons-material/ThumbUp'

import headerLogo from '../../pictures/head-logo.png'

import styles from './Header.module.css'
import { useState } from 'react'

const Header = () => {
  const [searchCategory, setSearchCategory] = useState('Maker')
  const [searchInput, setSearchInput] = useState('')

  // Функции для обновления состояний при изменении ввода
  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value)
  }

  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
  }

  // Обработчик отправки формы (вы можете добавить свою логику)
  const handleSubmit = (e) => {
    e.preventDefault()
    // Ваши действия при отправке формы
  }

  return (
    <Box className={styles.headerOverflow}>
      <Box className={styles.headerRegisterOverflow}>
        <Container>
          <Box className={styles.registration}>
            <p>Log in</p>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box className={styles.mainHeaderBg}>
          <Box className={styles.headerLogoContainer}>
            <img src={headerLogo} alt="JDMexpoLogo" />
          </Box>

          <Box className={styles.infoAndSearchContainer}>
            <Box className={styles.facebookContainer}>
              <Button variant="contained">
                <span>
                  <ThumbUpIcon sx={{ width: 15 }} />
                </span>
                <span>Follow</span>
                <span className={styles.textInSpanFacebook}>125K</span>
              </Button>
              <Button variant="contained" className={styles.shareFacebook}>
                <span>Share</span>
              </Button>
            </Box>
            <Box className={styles.contactContainer}>
              <Box className={styles.phone}>
                <p>+81-573-66-5670</p>
              </Box>
              <Box className={styles.email}>
                <p>info@jdm-expo.com</p>
              </Box>
            </Box>
            <Box
              style={{ display: 'flex', alignItems: 'center', height: '20px' }}>
              <FormControl>
                <Select
                  name="filter_type"
                  value={searchCategory}
                  onChange={handleCategoryChange}>
                  <MenuItem value="Maker">Maker</MenuItem>
                  <MenuItem value="HONDA">HONDA</MenuItem>
                  <MenuItem value="MAZDA">MAZDA</MenuItem>
                  <MenuItem value="MITSUBISHI">MITSUBISHI</MenuItem>
                  <MenuItem value="NISSAN">NISSAN</MenuItem>
                  <MenuItem value="SUBARU">SUBARU</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="standard-basic"
                label="I am looking for..."
                variant="standard"
                value={searchInput}
                onChange={handleInputChange}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
