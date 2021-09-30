import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image, Keyboard} from 'react-native';
import navbarColor, {
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import {AntDesign, MaterialCommunityIcons} from '../constants/icons';
import colors from '../constants/colors';
import {userinfoStyles as styles} from '../styles';
import {Avatar, Button, Input} from 'react-native-elements';
import {avatar, male_avatar} from '../resources/assets';
import ImagePicker from 'react-native-image-crop-picker';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {AccountNavProps, registerInfoType} from '../types/types';
import {validateNameImage} from '../services/handleValidation';
import {UserInfoThunk, UserThunk} from '../controller/functions';
export default function UserInfo({
  route,
  navigation,
}: AccountNavProps<'UserInfo'>) {
  const [pic, setPic] = useState<string | null | undefined>(null);
  const dispatch = useAppDispatch();
  const {user, error, loading} = useAppSelector((state) => state.UserReducer);
  const [form, setform] = useState<registerInfoType>({
    username: '',
    phone: user?.phone || '',
    password: '',
    valid: false,
    error: null,
    photo: null,
  });
  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: false,
      includeBase64: true,
      mediaType: 'photo',
    })
      .then((response) => {
        setform({...form, photo: response.data});
        setPic(response.path);
      })
      .catch((error) => {
        setPic(null);
        setform({...form, photo: null});
      });
  };
  type props = {
    value: string;
    label: string;
  };
  const handleForm = ({value, label}: props) => {
    setform({...form, [label]: value});
  };
  navbarColor(colors.white, true, true);
  showNavigationBar();

  const handleUpdate = () => {
    Keyboard.dismiss();
    const validform = validateNameImage(form);
    setform(validform);
    if (user && user.phone) {
      form.phone = user.phone;
      if (validform.valid) {
        dispatch(UserInfoThunk({user: form}));
      }
    }
  };
  useEffect(() => {
    if (user && user.username) {
      navigation.replace('HomeTab');
    } else {
      navigation.replace('Login');
    }
    setform({...form, error});
  }, [user, error, loading]);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={styles.infoContainer}>
        <View style={styles.photoContainer}>
          <Image
            source={{uri: pic ? pic : avatar}}
            width={180}
            height={180}
            style={{width: 180, height: 180, borderRadius: 100}}
            resizeMethod="auto"
            resizeMode="cover"
          />

          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={36}
            color={colors.Black000}
            style={styles.photoIcon}
            onPress={handleImagePicker}
          />
        </View>
        <Input
          placeholder="username"
          style={styles.input}
          value={form.username}
          onChangeText={(text) => handleForm({value: text, label: 'username'})}
          leftIcon={<AntDesign name="user" size={22} color={colors.White400} />}
        />
        <Button
          type="outline"
          title="submit"
          iconRight
          loading={loading}
          disabled={loading}
          onPress={handleUpdate}
          containerStyle={styles.submitButton}
        />
        {form.error && (
          <Text
            style={{
              color: colors.Red900,
              width: '100%',
              textAlign: 'center',
              marginTop: 10,
            }}>
            {form.error}
          </Text>
        )}
      </View>
    </View>
  );
}
