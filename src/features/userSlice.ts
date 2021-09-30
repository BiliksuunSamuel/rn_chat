import {createSlice} from '@reduxjs/toolkit';
import {UserInfoThunk, UserThunk} from '../controller/functions';
import {userState} from '../types/states';

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: userState,
  reducers: {
    UserLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    UserSuccess: (state, action) => {
      (state.loading = false),
        (state.user = action.payload),
        (state.error = null);
    },
    UserFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        //console.log(action.payload);
        state.user = action.payload;
      })
      .addCase(UserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(UserInfoThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UserInfoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // console.log(action.payload);
        state.user = action.payload;
      })
      .addCase(UserInfoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default UserSlice.reducer;
export const {UserLoading, UserSuccess, UserFail} = UserSlice.actions;
