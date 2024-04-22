import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const MovieDetails = ({ route, navigation }) => {

return (
    <View style={styles.container}>
            
        <Text> Title: {route.params.title} </Text>    
        <Text> Release Year: {route.params.releaseYear} </Text>         
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

export default MovieDetails;
