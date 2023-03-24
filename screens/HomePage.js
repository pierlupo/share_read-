import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bnf-2021-140128md.webp')}
        resizeMode="cover"
        style={styles.img}>
        <Pressable
          style={[
            styles.titleposition,
            ({pressed}) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
            ],
          ]}
          onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.titlestyle}>Welcome on Read and Share...</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleposition: {
    position: 'absolute',
    bottom:55,
  },
  titlestyle: {
    fontWeight : 'bold',
    fontSize: 50,
    fontFamily: 'cursive',
    textAlign: 'center',
    color: 'black',
    padding:30,

  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  img: {
    flex: 1,
  },
});
