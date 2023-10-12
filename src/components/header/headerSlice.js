import { createSlice } from '@reduxjs/toolkit'

const searchInputState = {
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
  },
})

export const { setSelectForm, setSearchInput } = headerSlice.actions

export default headerSlice.reducer
