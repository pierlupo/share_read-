import { FlatList, Platform, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/data'
import CategoryGridTitle from '../components/BookCategoryGridTitle'
export default function CategoriesScreen({ navigation }) {


    
  return (
    
      <FlatList data={CATEGORIES} 
    keyExtractor={(item) => item.id}
    renderItem={(itemData) => {
        return(
            <View style={styles.container}>
            <ImageBackground source={require('../assets/livres-ouverts_shutterstock_1840804387.jpg')} resizeMode="cover" style={styles.img}>
            <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={() => navigation.navigate('BooksOverview', {categoryId : itemData.item.id})}/>
            </ImageBackground>
        </View>)
        
    }}
    numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: 'grey',
      },
})