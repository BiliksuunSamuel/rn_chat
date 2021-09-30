export interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: IUser;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  quickReplies?: IQuickReplies;
}
interface IReply {
  title: string;
  value: string;
  messageId?: any;
}

interface IQuickReplies {
  type: 'radio' | 'checkbox';
  values: IReply[];
  keepIt?: boolean;
}

export interface IUser {
  _id: number | string;
  name: string;
  avatar?: string;
}
