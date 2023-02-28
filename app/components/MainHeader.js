import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';



export default function MainHeader({onpress,title}) {
  return (
    <>
      <TouchableOpacity onPress={onpress} style={{width:RFPercentage(5),height:RFPercentage(5),borderRadius:RFPercentage(3),position:'absolute',left:RFPercentage(2),
                   borderWidth:RFPercentage(0.2),borderColor:Colors.lightgrey,alignItems:'center',justifyContent:'center',backgroundColor:Colors.purewhite}}>
          
         <Image
          style={{
              width: RFPercentage(1.5),
              height: RFPercentage(2),
          }}
          source={require('../../assets/images/backarrowlogo.png')} />
      </TouchableOpacity>

      <Text style={{fontWeight:'600',fontSize:RFPercentage(3), color:Colors.secondary,fontFamily:FontFamily.medium}}>
          {title}
      </Text>
    </>
  )
}