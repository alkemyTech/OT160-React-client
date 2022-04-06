import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/users/usersSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
