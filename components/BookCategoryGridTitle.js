import { Pressable, StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'


export default function CategoryGridTitle({ title, color, onPress, bgimage }) {
    return (
        <View style={styles.gridItem}>
            <Pressable onPress={onPress} style={({pressed}) =>  [ styles.button, pressed ? styles.buttonPressed : null] }>
                <View style={[styles.innerContainer, {backgroundColor : color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    gridItem : {
        flex : 1,
        marginLeft : "auto",
        marginRight : "auto",
        marginTop: 20,
        marginBottom: 10,
        height : 120,
        width: 120,
        borderRadius : 60,
        backgroundColor : "white",
        elevation : 10, 
        opacity: 0.5,
       // overflow : 'hidden'
    },
    button : {
        flex : 1,
    },
    buttonPressed : {
        opacity : 0.5,
    },
    innerContainer : {
        flex : 1,
        padding : 10,
        height : 120,
        width: 120,
        borderRadius : 60,
        justifyContent : "center",
        alignItems : "center",
    },
    title : {
        color: 'black',
        fontWeight : 'bold',
        fontSize : Platform.OS === 'android' ? 18 : 25,
    }
})