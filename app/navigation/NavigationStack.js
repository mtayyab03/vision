import React  from 'react';
import { StyleSheet, View, Text } from 'react-native'

import { createStackNavigator } from "@react-navigation/stack";


//screens
import SplashScreen from '../screens/SplashScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen'
import LoginScreen from '../screens/LoginScreen'
import BottomTab from './BottomTab';
import LoadingTruckStartTime from '../screens/LoadingTruckStartTime';
import MapScreen from '../screens/MapScreen';
import OrderDetails from '../screens/OrderDetails';
import CreateCustomBooking from '../screens/CreateCustomBooking';
import EnterDetailsScreen from '../screens/EnterDetailsScreen';
import AddProofScreen from '../screens/AddProofScreen';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator screenOptions={{headerMode:"false"}} initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LoadingTruckStartTime" component={LoadingTruckStartTime} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="CreateCustomBooking" component={CreateCustomBooking} />
        <Stack.Screen name="EnterDetailsScreen" component={EnterDetailsScreen} />
        <Stack.Screen name="AddProofScreen" component={AddProofScreen} />

        <Stack.Screen name="BottomTab" component={BottomTab} />

      </Stack.Navigator>
  )
}