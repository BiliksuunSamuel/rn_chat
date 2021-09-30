import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
const useStyles = StyleSheet.create({
  form_group: {
    padding: 15,
    height: 70,
    paddingVertical: 10,
    paddingBottom: 0,
    backgroundColor: colors.Clouds,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  },
  input_group: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.White0,
    justifyContent: 'center',
    borderRadius: 30,
    paddingHorizontal: 12,
  },
});

export default useStyles;
