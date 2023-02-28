import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function TitleCirlcle({num,title,color}) {
  return (
    <View style={{flexDirection:'row',alignItems:'center',width:'90%',}}>
    <View style={{width:RFPercentage(4),height:RFPercentage(4),borderRadius:RFPercentage(3),
                 alignItems:'center',
                 justifyContent:'center',backgroundColor:color}}>
        <Text style={{fontWeight:'600',fontSize:RFPercentage(2), color:Colors.white,fontFamily:FontFamily.medium}}>
           {num}
        </Text>
    </View>
     <View style={{marginLeft:RFPercentage(1.5)}}/>
        <Text style={{fontWeight:'600',fontSize:RFPercentage(2.3), color:color,fontFamily:FontFamily.medium}}>
           {title}
        </Text>
   </View> 
  )
}