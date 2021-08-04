import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

const register = createAsyncThunk('user/register', async (payload) => {
  const data = await userApi.register(payload);
  
  //save data to local storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', data.user);
  
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    settings:{},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    
  },
});

const { reducer } = userSlice;
export default reducer;