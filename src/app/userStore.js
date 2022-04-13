import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/authReducer';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
