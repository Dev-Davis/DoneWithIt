import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, SafeAreaView, Text, Image } from 'react-native';

export default function App() {
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, I'm Sean and I'm working on a mobile app!</Text>
      <Image source={require('./assets/icon.png')} />
      <Image 
      blurRadius={3}
      source={{ 
        width: 200,
        height: 200,
        uri: "https://picsum.photos/id/237/200/300" }} 
        />
      <StatusBar style="auto" />
    </SafeAreaView>
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
