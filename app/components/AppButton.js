import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../config/colors';

export default function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
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
