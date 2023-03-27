import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, DrawerLayoutAndroid, ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Image, ImageBackground, Dimensions} from 'react-native';
import HomePage from './screens/HomePage';
import LogPage from './screens/LogPage';
import CategoriesScreen from './screens/CategoriesScreen';
import { createDrawerNavigator, DrawerItems } from '@react-navigation/drawer';
import { store } from './store/redux/store';
import { Provider, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import ActionBarImage from './ActionBarImage'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <ImageBackground source={require("./assets/prateek-katyal-yzgqvasemk-unsplash-60ed9af66d911810283255.webp")}  style={styles.Backgroundcontainer}>
    {/* <Image
      source={require("./assets/images/logo.png")}
      style={{ height: 120, width: 120, borderRadius: 0 , marginTop:20 }}
    /> */}
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    </ImageBackground>
  </SafeAreaView>
);

function DrawerNavigator() {
  return (
      <Drawer.Navigator screenOptions={{
        headerStyle: [{backgroundColor: '#9B9B93'},{opacity: 0.8}],
        headerTintColor: '#39393A',
        headerTitleStyle: {fontFamily: 'cursive', fontWeight: 'bold', fontSize: 30},
        headerRight: ()=> <ActionBarImage />,
        // headerTitle: (props) => <ImgHeader {...props} />
        headerTransparent: true,
        headerTitleAlign: "center",
        drawerPosition :'left',
        drawerWidth:  '100%'/*Dimensions.get('window').width / 2.0*/,
        drawerBackgroundColor : 'grey',
        contentOptions: {
          activeTintColor: 'black',
          activeBackgroundColor : 'transparent',
          inactiveTintColor : 'black',
          itemsContainerStyle: {
            marginVertical: 0,
          },
          iconContainerStyle: {
            opacity: 1
          },
          itemStyle :{
            height : 50,
          }
        }
      }}>
          <Drawer.Screen name="Home" component={HomePage}  options={{headerShown: true,  }} />
          <Drawer.Screen name="Categories" component={CategoriesScreen} options={{ title: 'All Categories' }} />
          <Drawer.Screen name="Log" component={LogPage} options={{ title: 'Register or LogIn' }} />
      </Drawer.Navigator>
  )

}

// function ImgHeader() {
//   return (
//     <Image
//       style={{ flex:1, width:50 }}
//       source={require('./assets/livres-ouverts_shutterstock_1840804387.jpg')}
//     />
//   );
// }

function App() {

  //const drawerrr = useRef(null)

  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator /*initialRouteName='Home'*/>
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }}/>
      {/* <Stack.Screen name="Home" component={HomePage} options={{headerShown: true}}/> */}
      <Stack.Screen name="Log" component={LogPage} options={{title: "Register or LogIn"}} />
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{title: "All Categories"}} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
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
