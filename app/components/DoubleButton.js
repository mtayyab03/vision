import React from 'react'
import { View, Text ,Image, TouchableOpacity} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function DoubleButton({title,subtitle,onpress}) {
  return (
    <View style={{width:'80%',flexDirection:'row',position:'absolute',bottom:RFPercentage(3)}}>
             <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center',justifyContent:'center',width:'48%',
                              height:RFPercentage(6),borderRadius:RFPercentage(1),borderColor:Colors.primary,borderWidth:RFPercentage(0.3)}}>
                 <Text style={{color:Colors.third,fontFamily:FontFamily.bold,fontSize:RFPercentage(2.2)}}>{title}</Text>
             </TouchableOpacity>
             <View style={{marginLeft:'4%'}}/>
             <TouchableOpacity onPress={onpress} activeOpacity={0.7} style={{alignItems:'center',justifyContent:'center',width:'48%',
                              height:RFPercentage(6),borderRadius:RFPercentage(1),backgroundColor:Colors.primary,position:'absolute',right:0}}>
                 <Text style={{color:Colors.white,fontFamily:FontFamily.bold,fontSize:RFPercentage(2.2)}}>{subtitle}</Text>
             </TouchableOpacity>
       </View>
  )
}