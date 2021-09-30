import Axios from 'axios';
import {initial_user} from '../types/intials';
import {registerInfoType, userType} from '../types/types';
import {formatRoute} from '../utils/formatURL';

type props = {
  user: registerInfoType;
};
async function userController({user}: props) {
  try {
    const res = await Axios.post(formatRoute('register'), user);
    return res.data;
  } catch (error: any) {
    throw error.response.data || error?.message;
  }
}

export default userController;
