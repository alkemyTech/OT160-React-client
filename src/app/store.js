import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/authReducer';
import categoriesReducer from '../features/categories/categoriesSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
  },
});
