import React from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {Feather} from '../constants/icons';
import colors from '../constants/colors';
import {Title} from 'react-native-paper';

type props = {
  handleNavigation: () => void;
};
export default function ContactsHeader({handleNavigation}: props) {
  return (
    <Header
      backgroundColor={colors.white}
      barStyle="dark-content"
      elevated
      leftComponent={
        <Feather
          name="chevron-left"
          size={24}
          onPress={handleNavigation}
          color={colors.Black900}
        />
      }
      leftContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      containerStyle={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
      }}
      rightContainerStyle={{width: '100%', flex: 1}}
      centerComponent={
        <Title
          style={{
            fontFamily: 'san-serif-medium',
            fontWeight: 'bold',
            fontSize: 24,
            width: '100%',
          }}
          numberOfLines={1}>
          Available Friends
        </Title>
      }
    />
  );
}
