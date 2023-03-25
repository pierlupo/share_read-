import {Button, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import AnimatedTyping from '../components/AnimatedTyping';
import React from 'react';
import { useState } from 'react';

export default function HomePage({navigation}) {

  const [greetingsCompleted, setGreetingsCompleted] = useState(false)
  const [nextPressed, setNextPressed] = useState(false)


  return (
    <View style={styles.container}>
      {/* <ImageBackground */}
        {/* source={require('../assets/bnf-2021-140128md.webp')} */}
        {/* resizeMode="cover" */}
        {/* style={styles.img}> */}
        <View style={styles.animationContainer}>
        <AnimatedTyping text={["Welcome on Read and Share...", "dear readers"]} onComplete={() => setGreetingsCompleted(true) }/>
        {greetingsCompleted ? <Button title="Next" onPress={() => setNextPressed(true)} /> : undefined}
        {nextPressed ? <AnimatedTyping text={["un autre texte à définir"]} /> : undefined}
        {/* {nextPressed ? <AnimatedTyping text={["un autre texte à définir"]} /> : undefined} */}
        </View>
        <Pressable
          style={[
            styles.titleposition,
            ({pressed}) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
            ],
          ]}
          onPress={() => navigation.navigate('Log')}>
          <Text style={styles.titlestyle}>Welcome on Read and Share...</Text>
        </Pressable>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animationContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:16,
    backgroundColor:"#2C2B3C",
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
