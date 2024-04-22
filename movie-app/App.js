import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListOfMovies from './ListOfMovies';
import MovieDetails from './MovieDetails';

//const Stack = createStackNavigator();

export default function App() {
  return (
    //Use the NavigationContainer and the Stack to display your app
    //ListOfMovies is just here as a place holder.

    <ListOfMovies />
    //<NavigationContainer>
    //  <Stack.Navigator>
    //    <Stack.Screen name="Home" component={ListOfMovies} />
    //    <Stack.Screen name="MovieDetails" component={MovieDetails} />
    //  </Stack.Navigator>
    //         <StatusBar style="auto" />
    //</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
