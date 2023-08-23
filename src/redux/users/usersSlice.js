import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://randomuser.me/api/?results=5';

export const fetchRandomUser = createAsyncThunk(
  'users/fetchRandomUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Something went wrong',
      );
    }
  },
);

const initialState = {
  users: {},
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRandomUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchRandomUser.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default usersSlice.reducer;
