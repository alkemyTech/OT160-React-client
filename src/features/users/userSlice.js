import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../Services/privateApiService';

export const getUsers = createAsyncThunk('user/getUser', async () => {
    return  get('https://ongapi.alkemy.org/public/api/users')   
});

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        status: null
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = "Loading";
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = "Succes";
            state.list = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.status = "Failed"
        },
    }
});

export default usersSlice.reducer;