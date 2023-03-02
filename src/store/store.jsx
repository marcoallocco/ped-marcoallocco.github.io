import { configureStore } from '@reduxjs/toolkit';
import courcesReducer from '../components/features/cources/courcesSlice';

const store = configureStore({
  reducer: {
    cources: courcesReducer,
  },
})

export default store
