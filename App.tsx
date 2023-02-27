import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginAnimated from './src/app/loginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/app/Home/Home';
// import Profile from './src/app/profile/profile';
import Profile from './src/app/profile/Profile';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginAnimated}
        />
        <Stack.Screen
          options={{
            title: 'Hober Chat',
            headerStyle: {
              backgroundColor: '#fcb900',
              fontFamily: 'Avengero',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => null,
            headerLeft: () => null,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
