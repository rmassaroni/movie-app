import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListOfMovies from './ListOfMovies';
import MovieDetails from './MovieDetails';

export default function App() {
  return (
    //Use the NavigationContainer and the Stack to display your app
    //ListOfMovies is just here as a place holder.
    <ListOfMovies />
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
