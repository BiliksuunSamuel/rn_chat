import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
const useStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: colors.white,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
});

export default useStyles;
