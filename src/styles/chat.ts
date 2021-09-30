import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
const useStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: colors.white,
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  infoContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  menu_item: {
    marginRight: 5,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default useStyles;
