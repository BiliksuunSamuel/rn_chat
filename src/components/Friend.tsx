import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import {male_avatar} from '../resources/assets';
import {userType} from '../types/types';

type props = {
  handleChatNavigation: () => void;
  info: userType;
};
export default function Friend({handleChatNavigation, info}: props) {
  return (
    <ListItem bottomDivider onPress={handleChatNavigation}>
      <Avatar rounded size="medium" source={male_avatar} />
      <ListItem.Content>
        <ListItem.Title numberOfLines={1}>Contact UserName</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}>
          contact status messag
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
}
