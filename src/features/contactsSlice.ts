import {createSlice} from '@reduxjs/toolkit';
import {ContactsThunk} from '../controller/functions';
import {contactsState} from '../types/states';

const contactsSlice = createSlice({
  name: 'ContactsReducer',
  initialState: contactsState,
  reducers: {
    ContactsLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    ContactsSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    ContactsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ContactsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
        state.error = null;
      })
      .addCase(ContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactsSlice.reducer;
export const {ContactsLoading, ContactsSuccess, ContactsFail} =
  contactsSlice.actions;
