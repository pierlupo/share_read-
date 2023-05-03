import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { BOOKS } from '../data/Data';
import BookDetails from '../components/BookDetails';


export default function BooksDetailScreen({ navigation, route }) {
    const BookId = route.params.bookId;
    const myBook = BOOKS.find((book) => book.id == bookId)

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: myBook.imageUrl }} />
            <Text style={styles.title}>{myBook.title}</Text>
            <BookDetails
                author={myBook.author}
                releaseDate={myBook.releaseDate}
                category={myBook.category}
                summary={myBook.summary}
                textStyle={styles.detailText}
            />
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'black',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
})