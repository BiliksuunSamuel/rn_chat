import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
const useStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    padding: 0,
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 36,
    fontWeight: '600',
    color: colors.fav_bg,
    fontFamily: 'sans-serif-medium',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  continueButton: {
    width: '90%',
    marginTop: 10,
  },
});

export default useStyles;
