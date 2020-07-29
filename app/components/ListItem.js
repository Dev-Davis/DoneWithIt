import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AppText from './AppText/AppText'
import Colors from '../config/colors'

export default function ListItem({ title, subTitle, image }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
    },
    image: {
       width: 70,
       height: 70,
       borderRadius: 35,
       marginRight: 10, 
    },
    subTitle: {
        color: Colors.medium,
    },
    title: {
       fontWeight: '500', 
    },
})