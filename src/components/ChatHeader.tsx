import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Header} from 'react-native-elements';
import {chatStyles as styles} from '../styles';
import colors from '../constants/colors';
import {AntDesign, Entypo, Feather} from '../constants/icons';
import {Title} from 'react-native-paper';
import {male_avatar} from '../resources/assets';
import {useAppSelector} from '../app/hooks';
import {server_route} from '../config/config';

type props = {
  handleNavigation: () => void;
};
export default function ChatHeader({handleNavigation}: props) {
  return (
    <Header
      barStyle="dark-content"
      backgroundColor={colors.White0}
      containerStyle={styles.headerContainer}
      leftComponent={
        <View style={styles.leftContainer}>
          <Feather
            name="chevron-left"
            size={24}
            onPress={handleNavigation}
            color={colors.Black900}
          />

          <Avatar rounded source={male_avatar} size="medium" />
        </View>
      }
      centerComponent={
        <View style={styles.infoContainer}>
          <Title numberOfLines={1}>Username</Title>
          <Text numberOfLines={1}>online</Text>
        </View>
      }
      rightContainerStyle={styles.rightContainer}
      rightComponent={
        <Entypo style={styles.menu_item} name="dots-three-vertical" size={22} />
      }
    />
  );
}
