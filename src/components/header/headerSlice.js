import { createSlice } from '@reduxjs/toolkit'

const searchInputState = {
  sort: false,
  searchInput: '',
  helper: false,

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
    setHelper: (state, action) => {
      state.helper = action.payload
    },
  },
})

export const {
  setSelectForm,
  setSearchInput,
  setSort,
  setSortFalse,
  setHelper,
} = headerSlice.actions

export default headerSlice.reducer
