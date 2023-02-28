import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function TitleFfield({title,subtitle}) {
  return (
   <>
     <View style={{width:'90%',justifyContent:'center'}}>
            
            <Text style={{ fontWeight: '400', fontSize: RFPercentage(2), 
                                color: Colors.subtextcolor,marginBottom:RFPercentage(1.5),fontFamily:FontFamily.regular  }}>
                     {title}
             </Text>    
        </View>

        
             <View style={{width:'90%',flexDirection:'row',height:RFPercentage(7),alignItems:'center',justifyContent:'center',
                    borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite}}>
                     <View style={{width:'90%',justifyContent:'center'}}>
               <Text style={{ fontWeight: '400', fontSize: RFPercentage(2.5), 
                                color: Colors.textcolor,fontFamily:FontFamily.regular  }}>
                     {subtitle}
               </Text> 
               <View style={{position:'absolute',right:0}}>
               <Image
                     style={{
                         width: RFPercentage(3),
                         height: RFPercentage(3),
                     }}
                     source={require('../../assets/images/droparrowicon.png')} />
                     </View>
               </View>
             </View>
   </>
  )
}