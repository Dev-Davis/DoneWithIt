import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row', // main axis is row or column
      alignItems: 'center', // secondary axis
      alignContent: 'center',
      flexWrap: 'wrap',
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        flexBasis: 100, // can map to width or height
        flex: 1,
        // flexGrow: 1, // covers the rest of the available space
        // flexShrink: 1, // fixes overflow of an element's space
        // width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'grey',
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'greenyellow',
        width: 100,
        height: 100
      }} />
    </View>
  );
}
