import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginAnimated from './src/app/loginScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <LoginAnimated/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
