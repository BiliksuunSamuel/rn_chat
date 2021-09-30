import {AccountStackParams, HomeStackParams} from './params';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type AccountNavProps<T extends keyof AccountStackParams> = {
  navigation: StackNavigationProp<AccountStackParams, T>;
  route: RouteProp<AccountStackParams, T>;
};

export type HomeNavProps<T extends keyof HomeStackParams> = {
  navigation: StackNavigationProp<HomeStackParams, T>;
  route: RouteProp<HomeStackParams, T>;
};

export type userType = {
  id: string;
  username: string;
  dateCreated: string;
  status: string;
  image: string | null;
  email: string;
  phone: string;
  password: string;
  role: number;
  online: boolean;
  login: boolean;
  lastSeen: string;
};

export type messageType = {
  info: {
    category: string | null;
    body: string | null;
    id: string | null;
    time: string | null;
  };
  status: {
    delivered: boolean | null;
    seen: boolean | null;
    deleted: boolean | null;
  };
  sender: string | null;
  receiver: string | null;
  user: {
    id: string | null;
    name: string | null;
    avatar: string | null;
  };
};

export type userStateType = {
  user: userType | null;
  loading: boolean;
  error: any;
};

export type chatsStateType = {
  messages: messageType[] | [];
  error: any;
  loading: boolean;
};

export type constactsState = {
  contacts: userType[] | [];
  error: any;
  loading: boolean;
};

export type registerInfoType = {
  username: string;
  phone: string;
  password: string;
  photo: any;
  valid: boolean;
  error: any;
};
