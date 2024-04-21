import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native';

const ListOfMovies = ({ navigation }) => {

    const startingDataSource = [
        { "title": "Elf", "releaseYear": "2003" },
        { "title": "The Grinch", "releaseYear": "1966" },
        { "title": "Die Hard", "releaseYear": "1988" },
        { "title": "Home Alone", "releaseYear": "1990" },
        { "title": "A Christmas Story", "releaseYear": "1983" }
    ];

    const [movies, setMovies] = useState(startingDataSource);


    const handleMoviePress = (movie) => {
        // Navigate to a new screen or perform some action
        //console.log('Movie selected:', movie.title);

        navigation.navigate('MovieDetails', { title: movie.title, releaseYear: movie.releaseYear });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleMoviePress(item)}>
            <View style={[styles.item, styles.border]}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.releaseYear}>Release Year: {item.releaseYear}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>     
            <Text>Use a FlatList and display the list of movies</Text>
            <FlatList
                data={movies}
                //renderItem={renderItem}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MovieDetails', {
                            title: item.title,
                            releaseYear: item.releaseYear
                        })}
                    >
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
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
