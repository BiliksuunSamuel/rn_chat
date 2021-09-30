import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from '../stack/HomeTabNavigator';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  ChatScreen,
  ContactsScreen,
  LoginScreen,
  SplashScreen,
  UserInfoScreen,
} from '../screens';
import Register from '../screens/Register';
const Stack = createStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="HomeTab" component={TabNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Info" component={Register} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="UserInfo" component={UserInfoScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
