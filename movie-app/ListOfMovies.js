import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';

const ListOfMovies = ({ navigation }) => {

    const startingDataSource = [
        { "title": "Elf", "releaseYear": "2003" },
        { "title": "The Grinch", "releaseYear": "1966" },
        { "title": "Die Hard", "releaseYear": "1988" },
        { "title": "Home Alone", "releaseYear": "1990" },
        { "title": "A Christmas Story", "releaseYear": "1983" }
    ];

    const [movies, setMovies] = useState(startingDataSource);


    return (
        <View style={styles.container}>     
            <Text>Use a FlatList and display the list of movies</Text>
            <FlatList
data={startingDataSource}
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 54,
    },
    border: {
        borderWidth: 1,
        borderColor: "gray",
    }
});  

export default ListOfMovies;
