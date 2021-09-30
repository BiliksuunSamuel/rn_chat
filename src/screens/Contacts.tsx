import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Avatar, Header, ListItem} from 'react-native-elements';
import {contactsStyles as styles} from '../styles';
import {HomeNavProps, userType} from '../types/types';
import colors from '../constants/colors';
import {Feather} from '../constants/icons';
import {List, Title} from 'react-native-paper';
import {ContactsHeader, FriendCard} from '../components';
import {male_avatar} from '../resources/assets';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {ContactsThunk} from '../controller/functions';
export default function Contacts({
  route,
  navigation,
}: HomeNavProps<'Contacts'>) {
  const handleNavigation = () => {
    navigation.navigate('Home');
  };
  const dispatch = useAppDispatch();
  const {contacts, error, loading} = useAppSelector(
    (state) => state.ContactsReducer,
  );
  const [Friends, setFriends] = useState<userType[] | []>([]);

  useEffect(() => {
    setFriends(contacts);
  }, [contacts, loading, error]);
  const handleChatNavigation = () => {
    navigation.navigate('Chat');
  };

  const handleRefresh = () => {
    dispatch(ContactsThunk());
  };
  return (
    <View style={styles.root}>
      <ContactsHeader handleNavigation={handleNavigation} />
      <View>
        <FlatList
          onRefresh={handleRefresh}
          initialNumToRender={20}
          refreshing={loading}
          data={Friends}
          keyExtractor={(item) => item?.id || Date.now().toString()}
          renderItem={({item}: {item: userType}) => (
            <FriendCard
              handleChatNavigation={handleChatNavigation}
              info={item}
            />
          )}
        />
      </View>
    </View>
  );
}
