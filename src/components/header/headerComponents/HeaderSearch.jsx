import React from 'react'
import HelperForSearch from './HelperForSearch'

import { FormControl, MenuItem, Select } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import {
  setSelectForm,
  setSearchInput,
  setSort,
  setHelper,
} from '../headerSlice'

import vehiclePageCars from '../../../data/vehiclePageCars'

import styles from '../Header.module.css'

const HeaderSearch = () => {
  const INPUTID = 'inputID'
  const nodeRef = React.useRef(null)

  const { searchInput, selectForm, helper } = useSelector(
    (store) => store.headerSlice
  )
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleCategoryChange = (e) => {
    const { value } = e.target
    dispatch(setSelectForm({ searchCategory: value }))
    dispatch(setSort(false))
  }

  const handleInputChange = (e) => {
    dispatch(setSearchInput(e.target.value))
    dispatch(setSort(false))
  }

  const handleInputHelper = () => {
    dispatch(setSearchInput(''))
    dispatch(setHelper(true))
    dispatch(setSort(false))
  }

  //search helper
  const filteredCars = vehiclePageCars.filter((car) => {
    const textMatch = car.text.toLowerCase().includes(searchInput.toLowerCase())

    return textMatch
  })

  return (
    <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
      <FormControl className={styles.formController}>
        <Select
          className="selectionOpt"
          name="filter_type"
          value={selectForm.searchCategory}
          onChange={handleCategoryChange}>
          <MenuItem value="Maker">Maker</MenuItem>
          <MenuItem value="honda">HONDA</MenuItem>
          <MenuItem value="mazda">MAZDA</MenuItem>
          <MenuItem value="mitsubishi">MITSUBISHI</MenuItem>
          <MenuItem value="nissan">NISSAN</MenuItem>
          <MenuItem value="subaru">SUBARU</MenuItem>
          <MenuItem value="toyota">TOYOTA</MenuItem>
        </Select>
      </FormControl>
      <input
        id={INPUTID}
        name="searchInput"
        type="search"
        value={searchInput}
        onChange={handleInputChange}
        onClick={handleInputHelper}
        placeholder="I am looking for..."
        autoComplete="off"
      />
      <CSSTransition
        nodeRef={nodeRef}
        in={helper}
        timeout={300}
        classNames="helper"
        unmountOnExit={true}>
        {() =>
          helper && filteredCars.length === 0 ? (
            ''
          ) : (
            <HelperForSearch filteredCars={filteredCars} />
          )
        }
      </CSSTransition>
    </form>
  )
}

export default HeaderSearch
