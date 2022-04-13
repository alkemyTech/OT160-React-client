import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'user',
  initialState: { auth: false },
  reducers: {
    login: (action) => {
      console.log(action.payload)
      //localStorage.setItem("token", action.payload.token);
      return {
        userData : action.payload,
        auth: true
      }
    },
    register: (action) => {
      //localStorage.setItem("token", action.payload.token);
      return {
        userData : action.payload,
        auth: true
      }
    },
    logout: () => {
      //localStorage.removeItem("token");
      return { auth : false }
    },
  },
});

export const { login, logout, register } = usersSlice.actions;
export default usersSlice.reducer;
