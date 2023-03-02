import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = './src/data/allCources.json'

const initialState = {
  courceItems: [],
  status: 'idle',
  error: null,
}

// Get all the posts from fake API all cources
export const getCources = createAsyncThunk('cources/getCources', async (thunkAPI) => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    // console.error(err.message)
    return thunkAPI.rejectWithValue({ error: err.message })
  }
})


const courcesSlice = createSlice({
  name: 'cources',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(getCources.pending, (state, action) => {state.status = 'loading'})
    .addCase(getCources.fulfilled, (state, action) => {state.status = 'successful', state.courceItems = action.payload;})
    .addCase(getCources.rejected, (state, action) => {state.status = 'failed',state.error = action.error.message,console.error(state.error)})
  }
})

export default courcesSlice.reducer