//import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListOfMovies from './ListOfMovies';
import MovieDetails from './MovieDetails';

const Stack = createStackNavigator();

function MyStack() {
  return (
        //<NavigationContainer>
    <Stack.Navigator>
   //<Stack.Screen name="ListOfMovies" component={ListOfMovies} />

    </Stack.Navigator>
    //</NavigationContainer>
  );
}

export default function App() {
  return (
    //Use the NavigationContainer and the Stack to display your app
    //ListOfMovies is just here as a place holder.

    //<ListOfMovies />
        //MyStack()
        <NavigationContainer>

      //<Text>MyStack()</Text>
            <Stack.Navigator>
                <Stack.Screen name="ListOfMovies" component={ListOfMovies} />

            </Stack.Navigator>
      </NavigationContainer>
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
