import Axios from 'axios';
import {registerInfoType} from '../types/types';
import {formatRoute} from '../utils/formatURL';
type props = {
  user: registerInfoType;
};
async function userInfoController({user}: props) {
  try {
    const response = await Axios.post(formatRoute('update'), user);
    return response.data;
  } catch (error: any) {
    throw error?.response.data || error?.message;
  }
}

export default userInfoController;
