import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

//Components
import Screen from '../components/Screen'
import TitleFfield from '../components/TitleFfield';
import AppButton from '../components/AppButton';


export default function CreateCustomBooking(props) {
  return (
    <Screen style={{ flex: 1, justifyContent:'flex-start',alignItems:'center',backgroundColor: Colors.white }}>
        <ScrollView contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false} style={{width:'100%'}}>


      {/* //header */}
      <View style={{width:'100%',height:'10%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity onPress={() => { props.navigation.navigate('LoadingTruckStartTime')}} style={{width:RFPercentage(5),height:RFPercentage(5),borderRadius:RFPercentage(3),position:'absolute',left:RFPercentage(2),
                   borderWidth:RFPercentage(0.2),borderColor:Colors.lightgrey,alignItems:'center',justifyContent:'center',backgroundColor:Colors.purewhite}}>
          
         <Image
          style={{
              width: RFPercentage(1.5),
              height: RFPercentage(2),
          }}
          source={require('../../assets/images/backarrowlogo.png')} />
      </TouchableOpacity>

      <Text style={{fontWeight:'600',fontSize:RFPercentage(3), color:Colors.secondary,fontFamily:FontFamily.medium}}>
           CreateCustomBooking
      </Text>
        </View>
        
        {/* bottom sheet */}
        <View style={{alignItems:'center',width:'100%',
               backgroundColor:Colors.purewhite,borderTopLeftRadius:RFPercentage(3),borderTopRightRadius:RFPercentage(3)}}>

           <View style={{width:'90%',justifyContent:'center'}}>
            
               <Text style={{ fontWeight: '400', fontSize: RFPercentage(2.7), 
                                   color: Colors.textcolor,marginTop:RFPercentage(3),marginBottom:RFPercentage(3),fontFamily:FontFamily.regular  }}>
                        Booking Details
                </Text>    
            
           </View>

           {/* title field */}
             <TitleFfield title='Type of shipment' subtitle='Palletized'/>
               <View style={{marginTop:RFPercentage(2.5)}}/>
             <TitleFfield title='Total Pallets' subtitle='10 Pallets'/>

             {/* double field */}
             <View style={{width:'90%',flexDirection:'row',marginTop:RFPercentage(2.5)}}>
             
             <View style={{width:'48%',justifyContent:'center'}}>
            
            <Text style={{ fontWeight: '400', fontSize: RFPercentage(2), 
                                color: Colors.subtextcolor,marginBottom:RFPercentage(1.5),fontFamily:FontFamily.regular  }}>
                     Category
             </Text>    

        
             <View style={{width:'100%',flexDirection:'row',height:RFPercentage(7),alignItems:'center',justifyContent:'center',
                    borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite}}>
                     <View style={{width:'90%',justifyContent:'center'}}>
               <Text style={{ fontWeight: '400', fontSize: RFPercentage(2.5), 
                                color: Colors.textcolor,fontFamily:FontFamily.regular  }}>
                     Office
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

        </View>

             
             
             <View style={{width:'48%',justifyContent:'center',position:'absolute',right:0}}>
            
            <Text style={{ fontWeight: '400', fontSize: RFPercentage(2), 
                                color: Colors.subtextcolor,marginBottom:RFPercentage(1.5),fontFamily:FontFamily.regular  }}>
                     Man Power
             </Text>    

        
             <View style={{width:'100%',height:RFPercentage(7),alignItems:'center',justifyContent:'center',
                    borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite}}>
                     <View style={{width:'90%',justifyContent:'center'}}>
               <Text style={{ fontWeight: '400', fontSize: RFPercentage(2.5), 
                                color: Colors.textcolor,fontFamily:FontFamily.regular  }}>
                     01
               </Text> 
               
               </View>
             </View>

        </View>
         
             </View>

             <View style={{marginTop:RFPercentage(2.5)}}/>
             <TitleFfield title='Requirements' subtitle='Trolley'/>

             {/* Documents */}
             <View style={{width:'90%',justifyContent:'center',marginTop:RFPercentage(2.5)}}>
            
            <Text style={{ fontWeight: '400', fontSize: RFPercentage(2), 
                                color: Colors.subtextcolor,marginBottom:RFPercentage(1.5),fontFamily:FontFamily.regular  }}>
                     Package Content
             </Text>    
        </View>

        
             <View style={{width:'90%',flexDirection:'row',height:RFPercentage(7),alignItems:'center',justifyContent:'center',
                    borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite}}>
                     <View style={{width:'90%',justifyContent:'center'}}>
               <Text style={{ fontWeight: '400', fontSize: RFPercentage(2.5), 
                                color: Colors.textcolor,fontFamily:FontFamily.regular  }}>
                     Documents
               </Text> 
              </View>
            </View>

{/* Remark */}
<View style={{width:'90%',justifyContent:'center',marginTop:RFPercentage(2.5)}}>
            
            <Text style={{ fontWeight: '400', fontSize: RFPercentage(2), 
                                color: Colors.subtextcolor,marginBottom:RFPercentage(1.5),fontFamily:FontFamily.regular  }}>
                     Remarks
             </Text>    
        </View>

        
             <View style={{width:'90%',height:RFPercentage(10),alignItems:'center',
                    borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite}}>
                     <View style={{width:'90%',justifyContent:'center',marginTop:RFPercentage(2),}}>
               <Text style={{ fontWeight: '400', fontSize: RFPercentage(2.5), 
                                color: Colors.textcolor,fontFamily:FontFamily.regular  }}>
                     Client called me to proceed this booking.
               </Text> 
              </View>
            </View>

            {/* button */}
            <TouchableOpacity  style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:RFPercentage(3),marginBottom:RFPercentage(10)}} activeOpacity={0.7} 
                                         >
                    <AppButton title='Create Booking' />
                </TouchableOpacity>

        </View>
      </ScrollView>
    </Screen>
  )
}