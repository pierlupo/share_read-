import {Button, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import AnimatedTyping from '../components/AnimatedTyping.js';
import React from 'react';
import { useState } from 'react';

export default function HomePage({navigation}) {

  const [greetingsCompleted, setGreetingsCompleted] = useState(false)
  const [nextPressed, setNextPressed] = useState(false)


  return (
    <View style={styles.container}>
      <ImageBackground
         source={require('../assets/bnf-2021-140128md.webp')}
         resizeMode="cover" 
         style={styles.img}> 
        <View style={styles.animationContainer}>
        <AnimatedTyping text={["Welcome on Read and Share..."/*, "dear readers"*/]} onComplete={() => setGreetingsCompleted(true) }/>
        <Pressable>                     
        {greetingsCompleted ? <Button title="next" onPress={() => setNextPressed(true)}/> : undefined}
        {greetingsCompleted ? <Text style={styles.btnNextPosition} onPress={() => setNextPressed(true)}>Press me</Text> : undefined}
        </Pressable>  
        {nextPressed ? <AnimatedTyping text={["un autre texte à définir"]} /> : undefined}
        {/* {nextPressed ? <AnimatedTyping text={["un autre texte à définir"]} /> : undefined} */}
        </View>
        {/* <Pressable
          style={[
            styles.titleposition,
            ({pressed}) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
            ],
          ]}
          onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.titlestyle}>Welcome on Read and Share...</Text>
        </Pressable> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({})