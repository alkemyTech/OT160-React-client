import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'user',
  initialState: { userAuth: false },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      return {
        userData : action.payload,
        userAuth: true
      }
    },
    register: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      return {
        userData : action.payload,
        userAuth: true
      }
    },
    logout: () => {
      localStorage.removeItem("token");
      return { userAuth : false }
    },
  },
});

export const { login, logout, register } = usersSlice.actions;
export default usersSlice.reducer;
