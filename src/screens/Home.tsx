import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import navigationBar, {
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import colors from '../constants/colors';
import {HomeNavProps, userType} from '../types/types';
import {homeStyles as styles} from '../styles';
import {Contact, FriendCard, HomeHeader} from '../components';
import {initial_user} from '../types/intials';
import {FAB} from 'react-native-paper';
import {ContactsThunk} from '../controller/functions';
///////////////////
export default function Home({route, navigation}: HomeNavProps<'Home'>) {
  const dispatch = useAppDispatch();
  const {user, error, loading} = useAppSelector((state) => state.UserReducer);
  const [info, setInfo] = useState<userType | null>(null);
  const handleChatNavigation = () => {
    navigation.navigate('Chat');
  };
  useEffect(() => {
    showNavigationBar();
    navigationBar(colors.white, true, true);
    setInfo(user);
    return () => {};
  }, [user]);
  return (
    <View style={styles.root}>
      <FAB
        color={colors.white}
        icon="account"
        style={{
          backgroundColor: colors.fav_bg,
          position: 'absolute',
          bottom: 30,
          right: 10,
          zIndex: 1001,
        }}
        onPress={() => navigation.navigate('Contacts')}
      />
      <HomeHeader info={info ? info : initial_user} />
      <ScrollView>
        <Contact handleNavigation={handleChatNavigation} />
        <Contact handleNavigation={handleChatNavigation} />
        <Contact handleNavigation={handleChatNavigation} />
        <Contact handleNavigation={handleChatNavigation} />
        <Contact handleNavigation={handleChatNavigation} />
        <Contact handleNavigation={handleChatNavigation} />
        <Contact handleNavigation={handleChatNavigation} />
        <Contact handleNavigation={handleChatNavigation} />
        <Contact handleNavigation={handleChatNavigation} />
        <Contact handleNavigation={handleChatNavigation} />
        <Contact handleNavigation={handleChatNavigation} />
      </ScrollView>
    </View>
  );
}
