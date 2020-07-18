import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  Alert,
  Button,
  Platform
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={safeViewStyle}>
      <Button 
        color="blue"
        title="Click Me"
          onPress={() => 
          Alert.prompt("My title", "My Message", text => console.log(text))  
        }
      />
    </SafeAreaView>
  );
}

const safeViewStyle = { backgroundColor: "silver" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
