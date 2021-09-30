import {initial_user} from './intials';
import {chatsStateType, constactsState, userStateType} from './types';

export const userState: userStateType = {
  user: null,
  error: null,
  loading: false,
};

export const messagesState: chatsStateType = {
  messages: [],
  error: null,
  loading: false,
};

export const contactsState: constactsState = {
  contacts: [],
  error: null,
  loading: false,
};
