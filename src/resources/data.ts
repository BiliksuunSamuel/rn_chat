import {IMessage, IUser} from '../types/interface';
import {male_avatar} from './assets';

export const messages: IMessage[] = [
  {
    _id: 1,
    text: 'good morning',
    createdAt: new Date(),
    quickReplies: {
      type: 'radio', // or 'checkbox',
      keepIt: true,
      values: [],
    },
    user: {
      _id: 7704,
      name: 'React Native',
    },
    sent: true,
    received: false,
  },
  {
    _id: 2,
    text: 'yeah,good morning',
    createdAt: new Date(),
    quickReplies: {
      type: 'radio', // or 'checkbox',
      keepIt: true,
      values: [],
    },
    user: {
      _id: 77045,
      name: 'Bills',
      avatar: male_avatar,
    },
    sent: true,
    received: true,
  },
];

export const user: IUser = {
  name: 'Bills@7704',
  _id: 7704,
  avatar: male_avatar,
};
