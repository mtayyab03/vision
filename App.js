import React  from 'react';
import { StyleSheet, View, Text } from 'react-native'
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from "@react-navigation/native";

//navigation
import NavigationStack from './app/navigation/NavigationStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    
    Roboto_300Light,

    Roboto_400Regular,
    
    Roboto_500Medium,
    
    Roboto_700Bold,
  });
  
  return (
     <NavigationContainer>
       <NavigationStack/>  
     </NavigationContainer>
 
  );
}
