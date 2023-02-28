import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

//Components
import Screen from '../components/Screen'
import AppModal from '../components/AppModal';
import MainHeader from '../components/MainHeader';



export default function LoadingTruckStartTime(props) {
  const [secmodalVisible, setSecModalVisible] = useState(false);

  return (
    <Screen style={{ flex: 1, justifyContent:'flex-start',alignItems:'center',backgroundColor: Colors.white }}>

      {/* //header */}
      <View style={{width:'100%',height:'15%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <MainHeader onpress={() => { props.navigation.navigate('MapScreen')}} title='LoadingTruckStartTime'/>
      
        </View>
        
        {/* image */}
        <View style={{justifyContent:'center',alignItems:'center',width:'100%',height:'85%',
               backgroundColor:Colors.purewhite,borderTopLeftRadius:RFPercentage(3),borderTopRightRadius:RFPercentage(3)}}>

                {/* text */}
           <View style={{width:'70%',justifyContent:'center',alignItems:'center',marginTop:RFPercentage(2),position:'absolute',top:RFPercentage(3)}}>
             <Text style={{fontWeight:'600',fontSize:RFPercentage(2), lineHeight:RFPercentage(3),
                 color:Colors.secondary,fontFamily:FontFamily.medium,textAlign:'center'}}>
                     Please start the loading time, when you are ready to load.
             </Text>
           </View>
            
        <Image
          style={{
              width: RFPercentage(35),
              height: RFPercentage(35),
          }}
          source={require('../../assets/images/truckdeliver.png')} />

          {/* time */}
          <View style={{width:'90%',marginTop:RFPercentage(5),alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:'600',fontSize:RFPercentage(2), color:Colors.third,fontFamily:FontFamily.medium}}>
                  current time
            </Text>
            <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',
                         marginTop:RFPercentage(2),alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{width:RFPercentage(6),height:RFPercentage(6),
                        borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'600',fontSize:RFPercentage(2), color:Colors.third,fontFamily:FontFamily.medium}}>
                      0
                    </Text>
                </View>
                <View style={{marginLeft:RFPercentage(1)}}/>
                <View style={{width:RFPercentage(6),height:RFPercentage(6),
                        borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'600',fontSize:RFPercentage(2), color:Colors.third,fontFamily:FontFamily.medium}}>
                      0
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{width:RFPercentage(6),height:RFPercentage(6),
                        borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'600',fontSize:RFPercentage(2), color:Colors.third,fontFamily:FontFamily.medium}}>
                      0
                    </Text>
                </View>
                <View style={{marginLeft:RFPercentage(1)}}/>
                <View style={{width:RFPercentage(6),height:RFPercentage(6),
                        borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'600',fontSize:RFPercentage(2), color:Colors.third,fontFamily:FontFamily.medium}}>
                      0
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{width:RFPercentage(6),height:RFPercentage(6),
                        borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'600',fontSize:RFPercentage(2), color:Colors.third,fontFamily:FontFamily.medium}}>
                      0
                    </Text>
                </View>
                <View style={{marginLeft:RFPercentage(1)}}/>
                <View style={{width:RFPercentage(6),height:RFPercentage(6),
                        borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'600',fontSize:RFPercentage(2), color:Colors.third,fontFamily:FontFamily.medium}}>
                      0
                    </Text>
                </View>
            </View>
            </View>
          </View>

          <View style={{width:'90%',flexDirection:'row',height:RFPercentage(8),backgroundColor:'#FFE6D6', 
                          borderRadius:RFPercentage(1),position:'absolute',bottom:RFPercentage(2),
                          borderWidth:RFPercentage(0.2),borderColor:Colors.primary,padding:RFPercentage(1),
                          alignItems:'center',justifyContent:'center',}}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => setSecModalVisible(true)} style={{width:'12%',height:RFPercentage(6),position:'absolute',left:RFPercentage(1),
                    alignItems:'center',justifyContent:'center',backgroundColor:Colors.primary,borderRadius:RFPercentage(1)}}>
                 <Image
                    style={{
                        width: RFPercentage(1.5),
                        height: RFPercentage(2),
                    }}
                    source={require('../../assets/images/frontarrowicon.png')} />
              </TouchableOpacity>
              <View style={{height:RFPercentage(6),alignItems:'center',justifyContent:'center'}}>
                   <Text style={{fontWeight:'600',fontSize:RFPercentage(2.5), color:Colors.primary,fontFamily:FontFamily.medium}}>
                          Start Loading Time
                    </Text>
              </View>
          </View>
        </View>
  
  {/* modal */}
  <AppModal modalVisible={secmodalVisible} setModalVisible={setSecModalVisible} style={{justifyContent:'center'}} >
             <Image
                 style={{
                     width: RFPercentage(12),
                     height: RFPercentage(12),
                 }}
                 source={require('../../assets/images/loadpicmodal.png')} />
                  <View style={{alignItems:'center',justifyContent:'center',marginTop:RFPercentage(4)}}>
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontWeight:'700',fontFamily:FontFamily.semiBold }}>
                           Are you sure?
                     </Text>
                    <View style={{width:'100%',marginTop:RFPercentage(2),alignContent:'center',justifyContent:'center'}}>
                     <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontWeight:'500',fontFamily:FontFamily.regular,
                                textAlign:'center',lineHeight:RFPercentage(3) }}>
                             This means that you are obliged to load the items in the turck. Please note that this cannot be changed later. 
                     </Text>
                     </View>
                </View>

                   {/* button */} 
                   
                   <View style={{width:'90%',flexDirection:'row',marginTop:RFPercentage(5)}}>
                          <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center',justifyContent:'center',width:RFPercentage(15),
                                           height:RFPercentage(7),borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite}}>
                              <Text style={{color:Colors.secondary,fontFamily:FontFamily.bold,fontSize:RFPercentage(2.2)}}>Cancel</Text>
                          </TouchableOpacity>
                          <View style={{marginLeft:RFPercentage(3)}}/>
                          <TouchableOpacity onPress={() => setSecModalVisible(false)} activeOpacity={0.7} style={{alignItems:'center',justifyContent:'center',width:RFPercentage(15),
                                           height:RFPercentage(7),borderRadius:RFPercentage(1),backgroundColor:Colors.primary,position:'absolute',right:0}}>
                              <Text style={{color:Colors.white,fontFamily:FontFamily.bold,fontSize:RFPercentage(2.2)}}>Yes</Text>
                          </TouchableOpacity>
                       </View>
                   

         </AppModal>
    </Screen>
  )
}