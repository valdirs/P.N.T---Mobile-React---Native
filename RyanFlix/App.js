// App.js
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SelectProfile from './screens/SelectProfile';
import AddProfile from './screens/AddProfile';
import ChooseCharacter from './screens/ChooseCharacter';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000000',
    card: '#1A1A1A',
    text: '#FFFFFF',
    border: '#000000',
    primary: '#FF0000',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SelectProfile" component={SelectProfile} />
        <Stack.Screen name="AddProfile" component={AddProfile} />
        <Stack.Screen name="ChooseCharacter" component={ChooseCharacter} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
