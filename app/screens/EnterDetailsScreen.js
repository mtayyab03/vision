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
import MainHeader from '../components/MainHeader';
import TitleCirlcle from '../components/TitleCirlcle';
import AppButton from '../components/AppButton';

export default function EnterDetailsScreen(props) {
  const [secmodalVisible, setSecModalVisible] = useState(false);

  return (
    <Screen style={{ flex: 1, justifyContent:'flex-start',alignItems:'center', }}>
        <ScrollView contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false} style={{width:'100%'}}>
         
      {/* //header */}
      <View style={{width:'100%',height:'10%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
           <MainHeader onpress={() => { props.navigation.navigate('MapScreen')}} title='Proof of Pick-up' color="#FF6600"/>
        </View>
        
        {/* image */}
        <View style={{width:'100%',alignItems:'center',
               backgroundColor:Colors.purewhite,borderTopLeftRadius:RFPercentage(3),borderTopRightRadius:RFPercentage(3)}}>
                <View style={{marginTop:RFPercentage(3)}}/>
                 <TitleCirlcle title='Enter Details' num='1' color={Colors.primary}/>

                 {/* line */}
                 <View style={{width:'80%',marginTop:RFPercentage(2),marginBottom:RFPercentage(2),marginLeft:RFPercentage(4),
                      height:RFPercentage(0.2),backgroundColor:Colors.white,borderRadius:RFPercentage(1)}}/>
                
                <TitleCirlcle title='Add Proof' num='2' color={Colors.subtextcolor} />

                 {/* line */}
                 <View style={{width:'80%',marginTop:RFPercentage(2),marginBottom:RFPercentage(2),marginLeft:RFPercentage(4),
                      height:RFPercentage(0.2),backgroundColor:Colors.white,borderRadius:RFPercentage(1)}}/>
                
                <TitleCirlcle title='Signature (Optional)' num='3' color={Colors.subtextcolor} />
                
                {/* line */}
                <View style={{width:'90%',marginTop:RFPercentage(2),marginBottom:RFPercentage(2),
                      height:RFPercentage(0.2),backgroundColor:Colors.white,borderRadius:RFPercentage(1)}}/>

              {/* detail input title */}
              <View style={{width:'90%',justifyContent:'center'}}>
            
               <Text style={{ fontWeight: '400', fontSize: RFPercentage(2.3), 
                                   color: Colors.textcolor,marginTop:RFPercentage(1),marginBottom:RFPercentage(2),fontFamily:FontFamily.regular  }}>
                       Please fill the information below...
                </Text>    
            
           </View>

            {/* Documents */}
            <View style={{width:'90%',justifyContent:'center',marginTop:RFPercentage(2.5)}}>
            
            <Text style={{ fontWeight: '400', fontSize: RFPercentage(2), 
                                color: Colors.subtextcolor,marginBottom:RFPercentage(1.5),fontFamily:FontFamily.regular  }}>
                     DO No.
             </Text>    
         </View>

        
             <View style={{width:'90%',flexDirection:'row',height:RFPercentage(7),alignItems:'center',justifyContent:'center',
                    borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite}}>
                     <View style={{width:'90%',justifyContent:'center'}}>
               <Text style={{ fontWeight: '400', fontSize: RFPercentage(2.5), 
                                color: Colors.textcolor,fontFamily:FontFamily.regular  }}>
                     MAH 6952
               </Text> 
              </View>
            </View>
             
             {/* shipmentfield */}
            <View style={{marginTop:RFPercentage(3.5)}}/>
            <TitleFfield title='Type of shipment' subtitle='Palletized'/>

            {/* shipmentfield */}
            <View style={{marginTop:RFPercentage(3.5)}}/>
             <TitleFfield title='Total Pallets' subtitle='10 Pallets'/>

           {/* packages */}
           <View style={{width:'90%',justifyContent:'center',marginTop:RFPercentage(3.5)}}>
            
            <Text style={{ fontWeight: '400', fontSize: RFPercentage(2), 
                                color: Colors.textcolor,fontFamily:FontFamily.regular  }}>
                    Packages
             </Text> 
            
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginTop:RFPercentage(1.5)}}>
             <View style={{width:'48%',flexDirection:'row',alignItems:'center'}}>
               <View style={{width:RFPercentage(7),height:RFPercentage(7),borderColor:Colors.green,borderWidth:RFPercentage(0.2),
                        borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'600',fontSize:RFPercentage(2), color:Colors.third,fontFamily:FontFamily.medium}}>
                      08
                    </Text>
                </View>
                <View style={{marginLeft:RFPercentage(3)}}/>
                <Text style={{fontWeight:'600',fontSize:RFPercentage(2.4), color:Colors.third,fontFamily:FontFamily.regular}}>
                      Picked-up
                </Text>
             </View>   
             <View style={{width:'48%',flexDirection:'row',alignItems:'center',position:'absolute',right:0}}>
               <View style={{width:RFPercentage(7),height:RFPercentage(7),borderColor:Colors.primary,borderWidth:RFPercentage(0.2),
                        borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'600',fontSize:RFPercentage(2), color:Colors.third,fontFamily:FontFamily.medium}}>
                      02
                    </Text>
                </View>
                <View style={{marginLeft:RFPercentage(3)}}/>
                <Text style={{fontWeight:'600',fontSize:RFPercentage(2.4), color:Colors.third,fontFamily:FontFamily.regular}}>
                      Pending
                </Text>
             </View>   
             </View>
        </View>

        {/* button */}
        <TouchableOpacity onPress={() => { props.navigation.navigate('AddProofScreen')}} 
                   style={{width:'100%',justifyContent:'center',alignItems:'center',
                          marginTop:RFPercentage(3),marginBottom:RFPercentage(10)}} activeOpacity={0.7} >
                    <AppButton title='Next' />
        </TouchableOpacity>

        </View>
  </ScrollView>
  
    </Screen>
  )
}