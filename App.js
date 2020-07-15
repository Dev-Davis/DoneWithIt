import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("App executed");
  let x =1;
  return (
    <View style={styles.container}>
      <Text>Hello, I'm Sean and I'm working on a mobile app!</Text>
      <Text>Mike Sparkman!!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
