import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
import colors from '../constants/colors';
import {splashStyles as styles} from '../styles';
import {AntDesign} from '../constants/icons';
import {AccountNavProps} from '../types/types';
import {useAppSelector} from '../app/hooks';
export default function Splash({route, navigation}: AccountNavProps<'Splash'>) {
  const {user, error, loading} = useAppSelector((state) => state.UserReducer);
  useEffect(() => {
    console.log(user?.username);
    hideNavigationBar();
    const redirect = setTimeout(() => {
      navigation.replace(user && user.username ? 'HomeTab' : 'Login');
    }, 500);
    return () => {
      clearTimeout(redirect);
    };
  }, [user]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <AntDesign name="wechat" size={100} color={colors.Pink600} />
    </View>
  );
}
