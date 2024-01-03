import {
  setSelectForm,
  setSearchInput,
  setSort,
  setHelper,
} from '../headerSlice'
import {
  useDispatch,
  useSelector,
  React,
} from '../../shared/utils/reactImports'
import { CSSTransition } from 'react-transition-group'

import HelperForSearch from './HelperForSearch'

import vehiclePageCars from '../../../data/vehiclePageCars'

import styles from '../Header.module.scss'

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
      <select
        className={styles.selectionOpt}
        name="filter_type"
        value={selectForm.searchCategory}
        onChange={handleCategoryChange}
      >
        <option value="Maker">Maker</option>
        <option value="honda">HONDA</option>
        <option value="mazda">MAZDA</option>
        <option value="mitsubishi">MITSUBISHI</option>
        <option value="nissan">NISSAN</option>
        <option value="subaru">SUBARU</option>
        <option value="toyota">TOYOTA</option>
      </select>
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
        unmountOnExit={true}
      >
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
