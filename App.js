import React from 'react';
import { View } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons'

// import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton'

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
      <AppButton title="Login" />
     </View>
  );
}

