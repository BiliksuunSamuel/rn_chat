import Axios from 'axios';
import {formatRoute} from '../utils/formatURL';

const contactsController = async () => {
  try {
    const response = await Axios.post(formatRoute('contacts'));
    return response.data;
  } catch (error: any) {
    throw error?.response.data || error?.message;
  }
};

export default contactsController;
