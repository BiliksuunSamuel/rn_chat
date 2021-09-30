import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Avatar, Header} from 'react-native-elements';
import {chatStyles as styles} from '../styles';
import colors from '../constants/colors';
import {Entypo, Feather} from '../constants/icons';
import {Title} from 'react-native-paper';
import {male_avatar} from '../resources/assets';
import {HomeNavProps} from '../types/types';
import {ChatHeader, MessageInput} from '../components';
import ChatComponent from '../components/ChatComponent';
import navigationBar, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
export default function Chat({route, navigation}: HomeNavProps<'Chat'>) {
  useEffect(() => {
    showNavigationBar();
    return () => {
      navigationBar(colors.white, true, true);
    };
  }, [route.name, route]);
  const handleNavigation = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.root}>
      <ChatHeader handleNavigation={handleNavigation} />
      <ChatComponent />
    </View>
  );
}
