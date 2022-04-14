import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from '../../Services/categoriesService';
import { errorAlert } from '../../Services/alertsService';

const getAllCategories = createAsyncThunk('categories/getAll', async () => {
  return await getCategories();
});

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    getAll: (state) => {
      const { data, error } = getAllCategories();
      if (error) {
        errorAlert(
          'Error',
          'Hubo un error al realizar la petición de categorías.'
        );
      } else {
        state.categories = data;
      }
    },
  },
});

export const { getAll } = categoriesSlice.actions;
export default categoriesSlice.reducer;
