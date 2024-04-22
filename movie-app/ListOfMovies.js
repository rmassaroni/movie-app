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
    const [loading, setLoading] = useState(false);

    const handleMoviePress = (movie) => {
        console.log(movie.title);
        navigation.navigate('Details', { title: movie.title, releaseYear: movie.releaseYear });
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleMoviePress(item)}>
            <View style={[styles.item, styles.border]}>
                <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderFooter = () => (
        
        <TouchableOpacity style={styles.button} onPress={getMoreMovies} disabled={loading}>
            <Text style={styles.item}>{loading ? 'Loading...' : 'Load More'}</Text>
        </TouchableOpacity>
    );

    const getMoreMovies = async () => {
        setLoading(true);

        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const data = await response.json();
            const newMovies = data.movies.map(movie => ({
                title: movie.title,
                releaseYear: movie.releaseYear
            }));

            setMovies(prevMovies => [...prevMovies, ...newMovies]);
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>     
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={renderFooter}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    movieTitle: {
        fontSize: 30
    },
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
    },
    button: {
        padding: 10,
        borderRadius: 5,
        borderColor: "blue",
        marginVertical: 10,
        alignItems: 'center'
    }
});  

export default ListOfMovies;
