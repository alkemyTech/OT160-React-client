import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/authReducer';
import categoriesReducer from '../features/categories/categoriesSlice';
import userSlice from '../features/users/userSlice';

export default configureStore({
  reducer: {
    userSlide:userSlice,
    user: userReducer,
    categories: categoriesReducer,
  },
});
