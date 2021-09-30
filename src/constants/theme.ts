import {configureFonts, DefaultTheme} from 'react-native-paper';
import {fontConfig} from './fonts';
import {Platform} from 'react-native';

const getFont = (fonts: any) => {
  if (Platform.OS === 'android') {
    return fonts.android;
  }
  if (Platform.OS === 'ios') {
    return fonts.ios;
  }
  if (Platform.OS === 'web') {
    return fonts.web;
  }
};
const theme = {
  ...DefaultTheme,

  fonts: configureFonts(getFont(fontConfig)),
};

export default theme;
