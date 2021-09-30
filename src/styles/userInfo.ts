import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

const useStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    fontSize: 36,
    fontFamily: 'san-serif-medium',
    fontWeight: 'bold',
    color: colors.fav_bg,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    width: '90%',
  },
  input: {
    marginTop: 20,
    width: '90%',
  },
  photoContainer: {
    display: 'flex',
    position: 'relative',
    backgroundColor: colors.White50,
    padding: 0,
    borderRadius: 100,
  },
  photoIcon: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
});

export default useStyles;
