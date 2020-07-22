import React from 'react';
import { View } from 'react-native';

// import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';

//<Heading> My Heading</Heading>
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
      <View
        style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        shadowColor: 'grey',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
      }}
      >
      </View>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <AppText>I love React Native!</AppText>
      </View>
    </View>
  );
}
