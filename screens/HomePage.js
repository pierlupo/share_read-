import {Button, ImageBackground, Pressable, StyleSheet, Text, View, Icon} from 'react-native';
import AnimatedTyping from '../components/AnimatedTyping.js';
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'

export default function HomePage({navigation}) {

  const [greetingsCompleted, setGreetingsCompleted] = useState(false)
  const [nextPressed, setNextPressed] = useState(false)


  return (
    <View style={styles.container}>
    {/* <FontAwesomeIcon icon={faUsers} /> */}
     <ImageBackground source={require('../assets/bnf-2021-140128md.webp')}
         resizeMode="cover" 
         style={styles.img}> 
        <View style={styles.animationContainer}>
        <AnimatedTyping text={["Welcome on Read and Share..."/*, "dear readers"*/]} onComplete={() => setGreetingsCompleted(true) }/>
        {/* <Pressable  style={styles.animationContainer}>                     
        {greetingsCompleted ? <Button title="next" onPress={() => setNextPressed(true)}/> : undefined}
        {greetingsCompleted ? <Text  style={styles.animationContainer} onPress={() => setNextPressed(true)}>Press me</Text> : undefined}
        </Pressable>   */}
        {/* {nextPressed ? <AnimatedTyping text={["un autre texte à définir"]} /> : undefined} */}
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

const styles = StyleSheet.create({

  container: {
    flex:1,

  },
  img: {
    flex:1,
  },
  animationContainer: {
    flex:1,
    position: "relative",
    bottom: 20,
  }




})