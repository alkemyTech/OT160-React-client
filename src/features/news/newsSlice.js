import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getNews } from '../../Services/homeApiService';
import { errorAlert } from '../../Services/alertsService';

const getAllNews = createAsyncThunk('news/getAll', async () => {
    return await getNews();
  });

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
      news: [],
    },
    reducers: {
      getAll: async (state) => {
        const { data, error } = await getAllNews();
        if (error) {
          errorAlert(
            'Error',
            'Hubo un error al realizar la petición de novedades.'
          );
        } else {
          state.news = data;
        }
      },
    },
  });
  
  export const { getAll } = newsSlice.actions;
  export default newsSlice.reducer;
