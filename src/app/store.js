import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories/categoriesSlice';
import userSlice from '../features/users/userSlice';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    user:userSlice
  },
});
