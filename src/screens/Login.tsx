import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Keyboard} from 'react-native';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-paper';
import {loginStyles as styles} from '../styles';
import {Feather, IonIcons} from '../constants/icons';
import colors from '../constants/colors';
import navbarColor, {
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import {AccountNavProps, registerInfoType} from '../types/types';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {validatePhonePassword} from '../services/handleValidation';
import {UserThunk} from '../controller/functions';
import {UserFail} from '../features/userSlice';
export default function Login({route, navigation}: AccountNavProps<'Login'>) {
  const dispatch = useAppDispatch();
  showNavigationBar();
  navbarColor(colors.white, true, true);
  const {user, error, loading} = useAppSelector((state) => state.UserReducer);
  const [form, setForm] = useState<registerInfoType>({
    username: '',
    phone: '',
    password: '',
    photo: null,
    valid: false,
    error: null,
  });
  useEffect(() => {
    console.log(user);
    if (user && user.phone) {
      dispatch(UserFail(null));
      navigation.replace('UserInfo');
    }
  }, [user]);

  type formprops = {
    value: string;
    label: string;
  };
  const handleForm = ({value, label}: formprops) => {
    setForm({...form, [label]: value});
  };

  const handleRegister = () => {
    Keyboard.dismiss();
    const validForm = validatePhonePassword(form);
    setForm(validForm);
    if (validForm.valid) {
      dispatch(UserThunk({user: form}));
    }
  };

  useEffect(() => {
    setForm({
      ...form,
      error,
    });
  }, [user, error, loading]);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Text style={styles.welcome}>Welcome</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="phone number"
          keyboardType="number-pad"
          style={{width: '100%'}}
          leftIcon={<Feather name="phone" size={22} color={colors.White400} />}
          onChangeText={(text) => handleForm({value: text, label: 'phone'})}
        />
        <Input
          placeholder="password"
          style={{width: '100%'}}
          secureTextEntry
          onChangeText={(text) => handleForm({value: text, label: 'password'})}
          leftIcon={
            <IonIcons name="key-outline" size={22} color={colors.White400} />
          }
        />
        <Button
          style={styles.continueButton}
          loading={loading}
          disabled={loading}
          onPress={handleRegister}
          mode="outlined"
          color={colors.fav_bg}
          icon="arrow-right">
          Submit
        </Button>
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
