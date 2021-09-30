import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
const useStyles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: colors.white,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  chats_container: {
    backgroundColor: colors.white,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 5,
  },
  chat_form: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  message_input: {
    flex: 1,
    color: colors.white,
    paddingHorizontal: 5,
  },
  form_group: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 1,
    backgroundColor: colors.White200,
    borderRadius: 10,
  },
  home_menu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 5,
  },
  account_info: {
    width: '100%',
    marginLeft: -10,
  },
  menu_item: {
    marginHorizontal: 5,
  },
});

export default useStyles;
