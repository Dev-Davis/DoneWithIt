import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  // Alert,
  // Button,
  View,
  Dimensions
} from 'react-native';

export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={safeViewStyle}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 70
      }}>

      </View>
    </SafeAreaView>
  );
}

const safeViewStyle = { backgroundColor: "silver" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
