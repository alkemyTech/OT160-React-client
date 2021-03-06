import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/authReducer';
import categoriesReducer from '../features/categories/categoriesSlice';
import userSlice from '../features/users/userSlice';
import newsReducer from '../features/news/newsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    user:userSlice,
    news: newsReducer
  },
});
