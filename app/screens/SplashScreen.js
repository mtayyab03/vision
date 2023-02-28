import React from 'react'
import { View, Text ,Image, TouchableOpacity} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors'

export default function SplashScreen(props) {
  return (
    
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:Colors.secondary}} >
      <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate('OnBoardingScreen')}}>
      <Image
             style={{
                 width: RFPercentage(30),
                 height: RFPercentage(30.8),
             }}
             source={require('../../assets/images/visionlogo.png')} />
         </TouchableOpacity>
      </View>
      
  )
}