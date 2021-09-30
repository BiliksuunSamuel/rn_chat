import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Header} from 'react-native-elements';
import {homeStyles as styles} from '../styles';
import {EvilIcons, Entypo, FontAwesome} from '../constants/icons';
import colors from '../constants/colors';
import {Title} from 'react-native-paper';
import {male_avatar} from '../resources/assets';
import {server_route} from '../config/config';
import {userType} from '../types/types';
type props = {
  info: userType;
};
export default function HomeHeader({info}: props) {
  return (
    <Header
      barStyle="dark-content"
      statusBarProps={{hidden: false, backgroundColor: colors.white}}
      backgroundColor={colors.white}
      leftComponent={
        info.image ? (
          <Avatar
            rounded
            source={{uri: server_route + info.image}}
            size="medium"
          />
        ) : (
          <Avatar rounded source={male_avatar} size="medium" />
        )
      }
      elevated
      leftContainerStyle={{
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 10,
      }}
      containerStyle={{alignItems: 'center'}}
      centerComponent={
        <View style={styles.account_info}>
          <Title>{info.username}</Title>
          <Text>{info.status}</Text>
        </View>
      }
      rightContainerStyle={{
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
      rightComponent={
        <Entypo style={styles.menu_item} name="dots-three-vertical" size={22} />
      }
    />
  );
}
