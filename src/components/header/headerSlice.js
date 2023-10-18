import { createSlice } from '@reduxjs/toolkit'

const searchInputState = {
  sort: false,
  searchInput: '',

  selectForm: {
    searchCategory: 'Maker',
  },
}

const headerSlice = createSlice({
  initialState: searchInputState,
  name: 'headerSlice',
  reducers: {
    setSelectForm: (state, action) => {
      state.selectForm = action.payload
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload
    },
    setSort: (state) => {
      state.sort = true
    },
    setSortFalse: (state) => {
      state.sort = false
    },
  },
})

export const { setSelectForm, setSearchInput, setSort, setSortFalse } =
  headerSlice.actions

export default headerSlice.reducer
