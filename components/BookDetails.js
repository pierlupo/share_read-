import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BookDetails({ author, releaseDate, category, summary,  }) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{author}</Text>
            <Text style={styles.detailItem}>{releaseDate}</Text>
            <Text style={styles.detailItem}>{category}</Text>
            <Text style={styles.detailItem}>{summary}</Text>

            <Text style={styles.detailItem}>
                {category.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
                {summary.toUpperCase()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: "black",
    },
})