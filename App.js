import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginAnimated from './src/app/loginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/app/Home/Home'
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }}
          name="LoginScreen" component={LoginAnimated} />
        <Stack.Screen
          options={{
            title: 'Hober Chat',
            headerStyle: {
              backgroundColor: '#fcb900',
              fontFamily: "Avengero"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => null,
            headerLeft: () => null
          }}
          name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HoberText: {
    fontFamily: "Avengero"
  }
});
