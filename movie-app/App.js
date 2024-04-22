import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native';
import ListOfMovies from './ListOfMovies';
import MovieDetails from './MovieDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer> 
            <Stack.Navigator initialRouteName='ListOfMovies'>
                <Stack.Screen name="Movies" component={ListOfMovies} />
                <Stack.Screen name="Details" component={MovieDetails} />
            </Stack.Navigator>

        </NavigationContainer> 
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
