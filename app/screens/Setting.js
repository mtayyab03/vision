import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';
import * as yup from 'yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

//Components
import Screen from '../components/Screen'
import AppButton from '../components/AppButton';
import AppHeader from '../components/AppHeader';

export default function Setting(props) {
  const profileList = [
    {
        id: '1',
        imageSource: require('../../assets/images/vendor.png'),
        title: 'Vendor Trip',

    },
    {
      id: '2',
      imageSource: require('../../assets/images/Package.png'),
      title: 'Shipment Summary',

  },
    {
        id: '3',
        imageSource: require('../../assets/images/emptywallet.png'),
        title: 'Salary',
    },
    {
        id: '4',
        imageSource: require('../../assets/images/clipboardtext.png'),
        title: 'POD Report',

    },
    {
      id: '5',
      imageSource: require('../../assets/images/overspeedicon.png'),
      title: 'Overspeed Memo',

  },
    {
        id: '6',
        imageSource: require('../../assets/images/languagesquare.png'),
        title: 'Change Language',

    },
    {
        id: '7',
        imageSource: require('../../assets/images/logouticon.png'),
        title: 'Logout',

    },
]
  return (
    <Screen style={{ flex: 1, justifyContent:'flex-start',alignItems:'center',backgroundColor: Colors.white }}>

      {/* AppHeader */}
      <AppHeader/>

      {/* profile */}
      <View style={{ width: '90%', marginTop: RFPercentage(5),flexDirection: 'row', alignItems: 'center'  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center',width:'70%' }}>

                    {/* picture */}
                    
                        <Image style={{ width: RFPercentage(8),
                           height: RFPercentage(8),borderRadius: RFPercentage(5), }}
                            source={require('../../assets/images/profilepic.png')} />
                      

                    {/* text */}
                    <View style={{ marginLeft: RFPercentage(2) }}>
                        <Text style={{ fontWeight: '600', fontSize: RFPercentage(3), color: Colors.textcolor,fontFamily:FontFamily.medium }}>
                            Abdul Hafiz
                        </Text>
                        <Text style={{ fontWeight: '300', fontSize: RFPercentage(2), color: Colors.textcolor,marginTop:RFPercentage(1),fontFamily:FontFamily.regular  }}>
                             ID: EN00016
                        </Text>
                    </View>

                  </View>

                  {/* //editicon */}
                 <View style={{position:'absolute',right:0,width:'30%',alignItems:'flex-end'}}>
                   <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate('OrderDetails')}} style={{width:RFPercentage(15),height:RFPercentage(7),borderWidth:RFPercentage(0.3),
                              borderColor:Colors.primary,borderRadius:RFPercentage(1),alignItems:'center',justifyContent:'center'}}>
                      <Text style={{fontFamily:FontFamily.medium,fontSize:RFPercentage(2.5),color:Colors.primary}}>
                          Edit
                        </Text>
                    </TouchableOpacity>
                 </View>
            </View>

            {/* profile line */}
            <FlatList
                scrollEnabled={false}
                contentContainerStyle={{justifyContent:'center'}}
                style={{ width: '90%',marginTop: RFPercentage(4),flexGrow:0}}
                data={profileList}
                keyExtractor={profileList => profileList.id.toString()}
                showsVerticalScrollIndicator={false}
                vertical
                renderItem={({ item }) =>
           
            <>
             <View style={{width:'100%',height:RFPercentage(0.2),
                backgroundColor:Colors.lightWhite,borderRadius:RFPercentage(1)}}/>

              <View style={{flexDirection: 'row', alignItems: 'center', width:'100%',marginTop:RFPercentage(2.4),marginBottom:RFPercentage(2.4)}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width:'70%' }}>
                           <Image style={{ width: RFPercentage(4), height: RFPercentage(4), }} source={item.imageSource} />

                          <Text style={{ fontWeight: '500', fontFamily:FontFamily.medium,fontSize: RFPercentage(2.5), marginLeft: RFPercentage(2), color: Colors.secondary }}>
                            {item.title}
                          </Text>
                    
                 </View>

                 {/* arrowicon */}
                 <View style={{position:'absolute',right:0,width:'30%',alignItems:'flex-end'}}>
                          <Image style={{ width: RFPercentage(3), height: RFPercentage(4), }}
                                source={require('../../assets/images/arrowright.png')} />
                  </View>
                 </View>
                 </>
            } />
      </Screen>
  )
}