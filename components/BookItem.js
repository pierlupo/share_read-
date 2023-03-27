import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import BookDetails from './BookDetails'

export default function BookItem({ id, title, imageCoverUrl, author, ReleaseDate, category, summary }) {
    const navigation = useNavigation()
    return (
        <View style={styles.bookItem}>
            <Pressable  style={({ pressed }) => (pressed ? styles.buttonPressed : null)} onPress={() => navigation.navigate("BookDetail", { BookId : id})}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageCoverUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <BookDetails
                        author={author}
                        ReleaseDate={ReleaseDate}
                        category={category}
                        summary={summary}
                    />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    bookItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
})