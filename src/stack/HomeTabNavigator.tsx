import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, SettingsScreen} from '../screens';
import navigationBar from 'react-native-navigation-bar-color';
import {AntDesign, Feather} from '../constants/icons';
import colors from '../constants/colors';
const Tab = createBottomTabNavigator();
export default function HomeTabNavigator() {
  useEffect(() => {
    navigationBar(colors.white, true, true);
  });
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.fav_bg,
        tabBarInactiveTintColor: colors.Black700,
      }}>
      <Tab.Screen
        options={({route}) => ({
          tabBarLabel: '',
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: (option) => (
            <Feather
              name="home"
              color={option.focused ? colors.fav_bg : colors.Black400}
              size={28}
            />
          ),
        })}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={(route) => ({
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: (options) => (
            <AntDesign
              name="user"
              size={28}
              color={options.focused ? colors.fav_bg : colors.Black400}
            />
          ),
        })}
        component={ProfileScreen}
      />
      <Tab.Screen
        options={(route) => ({
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: (options) => (
            <Feather
              name="settings"
              size={28}
              color={options.focused ? colors.fav_bg : colors.Black400}
            />
          ),
        })}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
