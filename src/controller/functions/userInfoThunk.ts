import {createAsyncThunk} from '@reduxjs/toolkit';
import {UserInfoController} from '..';
import {registerInfoType} from '../../types/types';

type props = {
  user: registerInfoType;
};
const handleUserInfoController = createAsyncThunk(
  'UserInfoThunk',
  async ({user}: props) => {
    try {
      const res = await UserInfoController({user});
      return res;
    } catch (error) {
      throw error;
    }
  },
);

export default handleUserInfoController;
