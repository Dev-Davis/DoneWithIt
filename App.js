import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      // flexDirection: 'row' - to make it lay out horizontally
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100
      }}>
        
      </View>
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100
      }}>
        
      </View>
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }}>
        
      </View>
    </View>
  );
}
