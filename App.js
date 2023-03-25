import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import HomePage from './screens/HomePage';
import LogPage from './screens/LogPage';
import CategoriesScreen from './screens/CategoriesScreen';
import AnimatedTyping from './components/AnimatedTyping';

const Stack = createNativeStackNavigator();


function App() {
  
  
  return (
//  <View style={styles.animationContainer}>

//   <AnimatedTyping text={["Welcome on Read and Share...", "dear readers"]} />
//  </View>

    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
      <Stack.Screen name="Log" component={LogPage} options={{title: "Register or LogIn"}} />
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{title: "All Categories"}} />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({

  animationContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:16,
    backgroundColor:"#2C2B3C",
    color:'White',
  },

});

export default App;
