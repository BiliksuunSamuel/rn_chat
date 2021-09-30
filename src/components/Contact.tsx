import React from 'react';
import {ListItem, Avatar} from 'react-native-elements';
import {male_avatar} from '../resources/assets';
import {StyleSheet, Text, View} from 'react-native';
import {userType} from '../types/types';
const styles = StyleSheet.create({
  messageInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
type props = {
  handleNavigation: () => void;
};
export default function Contact({handleNavigation}: props) {
  return (
    <ListItem bottomDivider onPress={handleNavigation}>
      <Avatar size="small" rounded source={male_avatar} />
      <ListItem.Content>
        <View style={styles.messageInfo}>
          <ListItem.Title numberOfLines={1}>friend name</ListItem.Title>
          <Text style={{fontFamily: 'san-serif-light'}} numberOfLines={1}>
            00.00pm
          </Text>
        </View>
        <View style={styles.messageInfo}>
          <ListItem.Subtitle numberOfLines={1}>
            last message here
          </ListItem.Subtitle>
          <Text
            style={{fontFamily: 'san-serif-thin', fontSize: 12}}
            numberOfLines={1}>
            00.00pm
          </Text>
        </View>
      </ListItem.Content>
    </ListItem>
  );
}
