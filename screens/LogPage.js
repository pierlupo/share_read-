import { StyleSheet, Text, View, Animated } from 'react-native';
import React from 'react';
import AnimatedTyping from '../components/AnimatedTyping';
import { useState } from 'react';
export default function LogPage() {

  const [greetingsCompleted, setGreetingsCompleted] = useState(false)
  const [nextPressed, setNextPressed] = useState(false)


  return (
    <View style={styles.animationContainer}>
      <AnimatedTyping text={["Welcome on Read and Share...", "dear readers"]} onComplete={() => setGreetingsCompleted(true) }/>
        {greetingsCompleted ? <Button title="Next" onPress={() => setNextPressed(true)} /> : undefined}
        {nextPressed ? <AnimatedTyping text={["un autre texte à définir"]} /> : undefined}
        {/* {nextPressed ? <AnimatedTyping text={["un autre texte à définir"]} /> : undefined} */}
    </View>
  )
}

const styles = StyleSheet.create({

  animationContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:16,
    backgroundColor:"#2C2B3C",
  },
})