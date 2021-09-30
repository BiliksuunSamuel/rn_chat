import {createAsyncThunk} from '@reduxjs/toolkit';
import {UserController} from '..';
import {registerInfoType, userType} from '../../types/types';

type props = {
  user: registerInfoType;
};
const handleUserController = createAsyncThunk(
  'api/register',
  async ({user}: props) => {
    try {
      const res = await UserController({user});
      return res;
    } catch (error) {
      throw error;
    }
  },
);

export default handleUserController;
