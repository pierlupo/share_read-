import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  DrawerLayoutAndroid,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import HomePage from './screens/HomePage';
import LogPage from './screens/LogPage';
import CategoriesScreen from './screens/CategoriesScreen';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {store} from './store/redux/store';
import {Provider, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';
import ActionBarImage from './ActionBarImage';
import Icon from 'react-native-vector-icons/FontAwesome5'
// import { DrawerContent } from './screens/DrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
   
  <View style={{flex:1}}>
    <ImageBackground style={{flex:1,justifyContent:"space-between",padding:20,backgroundColor:"rgb(0,0,0)",borderBottomWidth:2,}} imageStyle=
           {{opacity:0.8}}
          resizeMode="cover"
          source={require('./assets/books-1655783_960_720.jpg')}>
      <DrawerContentScrollView style={{flex:1}} {...props}>
        <DrawerItemList {...props} />
        <DrawerItem 
         label="Help"
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        
        />
      </DrawerContentScrollView>
      </ImageBackground>
    </View>
  
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: [{backgroundColor: '#9B9B93'}, {opacity: 0.8}],
        headerTintColor: 'black',
        headerTitleStyle: {
          fontFamily: 'cursive',
          fontWeight: 'bold',
          fontSize: 35,
        },
        headerRight: () => <ActionBarImage />,
        // headerTitle: (props) => <ImgHeader {...props} />
        headerTransparent: true,
        headerTitleAlign: 'center',
        drawerPosition: 'right',
        drawerType: 'back',
        drawerActiveBackgroundColor: 'grey',
        drawerStyle: {
          // backgroundColor: '#c6cbef',
          width: '100%',
          // drawerWidth:  Dimensions.get('window').width / 2.0,
        },
        
      }}>
      <Drawer.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: true,
        // drawerItemStyle: {backgroundColor: 'red'},
        drawerLabelStyle: {fontSize: 20},
        drawerLabelStyle: [{textAlign: "center"},]
  //       drawerIcon: () => (
  //         <Icon
  //           source={require('./assets/home.png')}
  //           style={[styles.iconStyles, { tintColor: 'black' }]}
  //         /> 
  // )
}}
      />
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{title: 'All Categories',
        drawerLabelStyle: {fontSize: 20},
      }}
      />
      <Drawer.Screen
        name="Log"
        component={LogPage}
        options={{title: 'Register or LogIn',
        drawerLabelStyle: {fontSize: 20},
      }}
      />
    </Drawer.Navigator>
  );
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

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator /*initialRouteName='Home'*/>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen name="Home" component={HomePage} options={{headerShown: true}}/> */}
          <Stack.Screen
            name="Log"
            component={LogPage}
            options={{title: 'Register or LogIn'}}
          />
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{title: 'All Categories'}}
          />
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
    padding: 16,
    backgroundColor: '#2C2B3C',
    color: 'White',
  },

  drawerContainer: {
    flex: 1,
    // height: '100%',
  },
  iconStyles: {
    width: 24,
    height: 24,

  }
});

export default App;
