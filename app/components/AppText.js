import React from 'react';
import { Text } from 'react-native'

import styles from '../config/styles';
import defaultStyles from '../config/styles'

export default function AppText({ children, style }) {
    return (
        <Text style={[defaultStyles.text, style]}>{children}</Text>
    )
}
