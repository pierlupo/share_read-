import { FlatList, Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/Data'
import CategoryGridTitle from '../components/BookCategoryGridTitle'
export default function CategoriesScreen({ navigation }) {


    
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.containerimg} source={require('../assets/8e28da_e9682dda7b2a4d928192ff6a3fafdf6d~mv2.webp')} resizeMode="cover">
      <FlatList data={CATEGORIES} 
    keyExtractor={(item) => item.id}
    renderItem={(itemData) => {
      return(
        <View style={styles.container}>
         {/* <TouchableOpacity> */}
            <CategoryGridTitle title={itemData.item.title} /*color={itemData.item.color}*/ onPress={() => navigation.navigate('BooksOverview', {categoryId : itemData.item.id})}/>
          {/* </TouchableOpacity> */}
        </View>)
        
      }}
      numColumns={2}
      />
      </ImageBackground>
    </View>
  )
  
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        /*backgroundColor: 'grey',*/
      },
    containerimg : {
      flex: 1,
    }

})