import { FlatList, Platform, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/data'
import CategoryGridTitle from '../components/BookCategoryGridTitle'
export default function CategoriesScreen({ navigation }) {


    
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.containerimg} source={require('../assets/books-1655783_960_720.jpg')} resizeMode="cover">
      <FlatList data={CATEGORIES} 
    keyExtractor={(item) => item.id}
    renderItem={(itemData) => {
      return(
        <View style={styles.container}>
            <CategoryGridTitle title={itemData.item.title} /*color={itemData.item.color}*/ onPress={() => navigation.navigate('BooksOverview', {categoryId : itemData.item.id})}/>
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