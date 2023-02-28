import React  from 'react';
import { Image, StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//screens
import AssignTask from '../screens/AssignTask';
import InProgress from '../screens/InProgress'
import Notification from '../screens/Notification'
import Setting from '../screens/Setting'

//config
import Colors from '../config/Colors'

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (

    <Tab.Navigator
      initialRouteName="AssignTask"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#A0A3B1',
        headerShown:false,
        tabBarStyle: {
          height: wp('15%'),
          padding: 3,
          paddingBottom: RFPercentage(1)
        }
      }}
    >
      <Tab.Screen
        name="AssignTask"
        component={AssignTask}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="InProgress"
        component={InProgress}
        options={{
          tabBarLabel: 'In Progress',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="truck-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    activeIcon: {
      width:RFPercentage(6),
      height:RFPercentage(6),
      backgroundColor: Colors.third,
      borderRadius: 30,
      alignItems:'center',
      justifyContent:'center'
    },
  });