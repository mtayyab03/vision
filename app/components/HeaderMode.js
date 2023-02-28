import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, TextInput, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'


//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function HeaderMode({title,onpress}) {
  return (
  
   <>
     <TouchableOpacity activeOpacity={0.7} onPress={onpress}
          style={{ position:'absolute',left:RFPercentage(2)}}>
         <Image
          style={{
              width: RFPercentage(1.5),
              height: RFPercentage(2),
          }}
          source={require('../../assets/images/backarrowlogo.png')} />
      </TouchableOpacity>

      <Text style={{fontWeight:'600',fontSize:RFPercentage(3.5), color:Colors.primary,fontFamily:FontFamily.bold}}>
         {title}
      </Text>

    </>

  )
}