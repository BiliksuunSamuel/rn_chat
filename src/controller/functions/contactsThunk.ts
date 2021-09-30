import {createAsyncThunk} from '@reduxjs/toolkit';
import {ContactsController} from '..';

const handleUserController = createAsyncThunk('api/register', async () => {
  try {
    const res = await ContactsController();
    return res;
  } catch (error) {
    throw error;
  }
});

export default handleUserController;
