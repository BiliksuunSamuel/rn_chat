import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Animated,
  TextInput,
  ImagePickerResult,
  ImageCropData,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {homeStyles as styles} from '../styles';
import colors from '../constants/colors';
import {messages, user} from '../resources/data';
import navigationColor from 'react-native-navigation-bar-color';
import {IMessage} from '../types/interface';
import {Entypo, EvilIcons} from '../constants/icons';
import {chatComponentStyles as classes} from '../styles';
import ImageCropPicker from 'react-native-image-crop-picker';
export default function ChatComponent() {
  const [msgs, setMessages] = useState<IMessage[] | []>([]);
  const [file, setFile] = useState<any | null>(null);
  useEffect(() => {
    setMessages(messages);
    navigationColor(colors.Clouds, false, true);
  });

  const handleImagePicker = () => {
    ImageCropPicker.openPicker({
      width: 400,
      height: 300,
      multiple: false,
      mediaType: 'any',
      includeBase64: true,
    })
      .then((response) => {
        setFile(response);
        console.log(response.path);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <GiftedChat
      onSend={(messages) => onSend(messages)}
      messages={messages}
      user={user}
      placeholder="message........"
      messagesContainerStyle={{backgroundColor: colors.white}}
      timeFormat="h:m a"
      minInputToolbarHeight={70}
      isCustomViewBottom
      renderInputToolbar={() => (
        <View style={classes.form_group}>
          <View style={classes.input_group}>
            <EvilIcons
              onPress={handleImagePicker}
              name="paperclip"
              size={22}
              color={colors.fav_bg}
            />
            <TextInput
              style={{flex: 1, color: colors.fav_bg}}
              placeholderTextColor={colors.fav_bg}
              multiline
              placeholder="message......."></TextInput>
            <Entypo name="paper-plane" size={24} color={colors.Gradient0041} />
          </View>
        </View>
      )}
    />
  );
}
