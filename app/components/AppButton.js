import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../config/colors';

export default function AppButton({title}) {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: Colors.primary,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      width: '100%',
    },
    text: {
        color: Colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
  })
