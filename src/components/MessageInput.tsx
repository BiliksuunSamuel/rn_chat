import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {EvilIcons, Entypo, MaterialCommunityIcons} from '../constants/icons';
import {homeStyles as styles} from '../styles';
import colors from '../constants/colors';
export default function MessageInput() {
  return (
    <View
      style={{
        paddingHorizontal: 25,
        padding: 5,
        height: 70,
        paddingVertical: 10,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: colors.Pink700,
          justifyContent: 'center',
          borderRadius: 25,
          paddingHorizontal: 15,
        }}>
        <EvilIcons name="paperclip" size={22} color={colors.White200} />
        <TextInput
          style={{flex: 1, color: colors.white}}
          placeholderTextColor={colors.white}
          multiline
          placeholder="message......."></TextInput>
        <Entypo name="paper-plane" size={24} color={colors.white} />
      </View>
    </View>
  );
}
