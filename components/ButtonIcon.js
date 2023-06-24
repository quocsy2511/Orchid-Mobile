import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import COLORS from '../consts/colors';

const ButtonIcon = ({ onPress, icon, color, styleButton, size }) => {
    return (
        <Pressable
            style={({ pressed }) => [styleButton, pressed ? styles.iconPressed : null]}
            onPress={onPress}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    iconPressed: {
        opacity: 0.75,
    }
})