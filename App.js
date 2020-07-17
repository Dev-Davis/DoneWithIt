import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  Alert,
  Button
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button 
        color="orange"
        title="Click Me"
        onPress={() => Alert.alert("My title", "My Message", [
          { text: "Yes", onPress: () => console.log("you pressed yes") }, 
          { text: "No", onPress: () => console.log("you pressed no") }
        ])}
      />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
