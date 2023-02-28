import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function AppHeader(props) {
  return (
    <View style={{flexDirection:'row',alignItems:'center',width:'90%',marginTop:RFPercentage(4)}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <View style={{width:RFPercentage(1),height:RFPercentage(1),borderRadius:RFPercentage(1),backgroundColor:Colors.green}}>
      </View> 
      <Text style={{color:Colors.primary,fontFamily:FontFamily.bold,fontSize:RFPercentage(3),marginLeft:RFPercentage(1)}}>
         Visions app
      </Text>
    </View>
    <View style={{flexDirection:'row',position:'absolute',right:0}}>
        <View style={{width:RFPercentage(5),height:RFPercentage(5),borderRadius:RFPercentage(3),
               borderWidth:RFPercentage(0.2),borderColor:Colors.lightgrey,alignItems:'center',justifyContent:'center',backgroundColor:Colors.purewhite}}>
               <Image
             style={{
                 width: RFPercentage(3.5),
                 height: RFPercentage(3.5),
             }}
             source={require('../../assets/images/searchicon.png')} />
        </View>
        <View style={{marginLeft:RFPercentage(1.5)}}/>
        <TouchableOpacity activeOpacity={0.7}  style={{width:RFPercentage(5),height:RFPercentage(5),borderRadius:RFPercentage(3),
               borderWidth:RFPercentage(0.2),borderColor:Colors.lightgrey,alignItems:'center',
                justifyContent:'center',backgroundColor:Colors.purewhite}}>
               <Image
             style={{
                 width: RFPercentage(3.5),
                 height: RFPercentage(3.5),
             }}
             source={require('../../assets/images/threedoticon.png')} />
        </TouchableOpacity>
    </View>
  </View>
  )
}