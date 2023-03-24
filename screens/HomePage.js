import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/bnf-2021-140128md.webp')} resizeMode="cover" style={styles.img}>
      
      {/* <Pressable onPress={() => navigation.navigate('Log')}> */}
      <Text style={styles.title}>Welcome on Read and Share...</Text>
      {/* </Pressable> */}
      
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

  container : {
    flex:1,
  },
  title: {
    flex: 1,
    fontSize:50,
    fontFamily: 'cursive',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
  img: {
    flex:1,

  }
})