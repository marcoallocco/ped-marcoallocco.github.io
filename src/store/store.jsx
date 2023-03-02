import { configureStore } from '@reduxjs/toolkit';
import courcesReducer from '../components/features/cources/courcesSlice';
import authReducer from '../components/features/auth/authSlice';

const store = configureStore({
  reducer: {
    cources: courcesReducer,
    auth: authReducer
  },
})

export default store
