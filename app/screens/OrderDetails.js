import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, FlatList,ScrollView, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

//Components
import Screen from '../components/Screen'


export default function OrderDetails(props) {
    const profileList = [
        {
            id: '1',
            imageSource: require('../../assets/images/locationicon.png'),
            title: 'Distance',
            subtitle: '2.5km',
    
        },
        {
          id: '2',
          imageSource: require('../../assets/images/Usericon.png'),
          title: 'Man Power',
          subtitle: '1 Man',
      },
        {
            id: '3',
            imageSource: require('../../assets/images/warningicon.png'),
            title: 'Requirements ',
            subtitle: 'Trolley',
        },
        {
            id: '4',
            imageSource: require('../../assets/images/Package.png'),
            title: 'Packages',
            subtitle: '5 Items',
    
        },
        {
          id: '5',
          imageSource: require('../../assets/images/InfoRectangleicon.png'),
          title: 'Category',
          subtitle: 'Office',
    
      },
        {
            id: '6',
            imageSource: require('../../assets/images/Foldericon.png'),
            title: 'Package Content',
            subtitle: 'Documents',
    
        },
    ]
  return (
    <Screen style={{ flex: 1, justifyContent:'flex-start',alignItems:'center',backgroundColor: Colors.white }}>
        <ScrollView contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false} style={{width:'100%'}}>

      {/* //header */}
      <View style={{width:'100%',height:'10%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity onPress={() => { props.navigation.navigate('CreateCustomBooking')}} style={{width:RFPercentage(5),height:RFPercentage(5),borderRadius:RFPercentage(3),position:'absolute',left:RFPercentage(2),
                   borderWidth:RFPercentage(0.2),borderColor:Colors.lightgrey,alignItems:'center',justifyContent:'center',backgroundColor:Colors.purewhite}}>
          
         <Image
          style={{
              width: RFPercentage(1.5),
              height: RFPercentage(2),
          }}
          source={require('../../assets/images/backarrowlogo.png')} />
      </TouchableOpacity>

      <Text style={{fontWeight:'600',fontSize:RFPercentage(3), color:Colors.secondary,fontFamily:FontFamily.medium}}>
           OrderDetails
      </Text>
        </View>
        
        {/* image */}
        <View style={{alignItems:'center',width:'100%',
               backgroundColor:Colors.purewhite,borderTopLeftRadius:RFPercentage(3),borderTopRightRadius:RFPercentage(3)}}>

                {/* text */}
             <View style={{width:'90%',alignItems:'center',flexDirection:'row',marginTop:RFPercentage(1)}}>
                   <Text style={{ fontWeight: '300', fontSize: RFPercentage(1.5), 
                     color: Colors.textcolor,marginTop:RFPercentage(1),fontFamily:FontFamily.regular  }}>
                             Order ID : #233532
                     </Text>
                     <View style={{position:'absolute',right:0,alignItems:'flex-end'}}>
                     <Text style={{ fontWeight: '300', fontSize: RFPercentage(1.5), 
                                   color: Colors.grey,marginTop:RFPercentage(1),fontFamily:FontFamily.regular  }}>
                            04:45 PM, 29 Mar
                     </Text>
                     </View>
             </View>
          
           {/* text */}
        <View style={{flexDirection:'row',width:'90%',alignItems:'center',marginTop:RFPercentage(2)}}>
          <View style={{width:'3%',height:RFPercentage(23),alignItems:'center',justifyContent:'center'}}>
            <View style={{backgroundColor:Colors.white,borderWidth:RFPercentage(0.1),alignItems:'center',justifyContent:'center',
                       borderColor:Colors.green,width:RFPercentage(2),height:RFPercentage(2),borderRadius:RFPercentage(1),}}>
                 <View style={{backgroundColor:Colors.green,
                       width:RFPercentage(1.2),height:RFPercentage(1.5),borderRadius:RFPercentage(1),}}/>
            </View>
            <View style={{height:RFPercentage(13),borderWidth:1,borderStyle:'dashed',borderColor:Colors.lightWhite,flexDirection:'column'}}/>

           
            <View style={{backgroundColor:Colors.white,borderWidth:RFPercentage(0.1),alignItems:'center',justifyContent:'center',
                       borderColor:Colors.primary,width:RFPercentage(2),height:RFPercentage(2),borderRadius:RFPercentage(1),}}>
                 <View style={{backgroundColor:Colors.primary,
                       width:RFPercentage(1.2),height:RFPercentage(1.2),borderRadius:RFPercentage(1),}}/>
            </View>
          </View>

          
          {/* text Sender */}
          
          <View style={{width:'93%',position:'absolute',right:0}}>
              <Text style={{color:Colors.third,fontFamily:FontFamily.medium,fontSize:RFPercentage(1.5)}}>
                 Sender  #13876
              </Text>
              
                 <Text style={{color:Colors.blacki,fontFamily:FontFamily.medium,fontSize:RFPercentage(2.5),marginTop:RFPercentage(1)}}>
                     Eric Cartman
                 </Text>
                 
              
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:Colors.secondary,fontFamily:FontFamily.regular,fontSize:RFPercentage(1.8),marginTop:RFPercentage(1)}}>
                      4123 Big Green, LA, California
                 </Text>
                 <View style={{position:'absolute',right:0}}>
                  <TouchableOpacity activeOpacity={0.7} 
                         style={{width:RFPercentage(8),height:RFPercentage(4),backgroundColor:'#FFE7D8',flexDirection:'row',
                             borderRadius:RFPercentage(1),alignItems:'center',justifyContent:'center'}}>
                     <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2.5),marginRight:RFPercentage(0.5) }}
                                source={require('../../assets/images/Packageprimary.png')} />
                     <Text style={{fontFamily:FontFamily.medium,fontSize:RFPercentage(1.8),color:Colors.primary}}>
                         X5
                      </Text>
                  </TouchableOpacity>
                 </View>
                 </View>
          

          {/* line */}
                     <View style={{width:'100%',marginTop:RFPercentage(3),marginBottom:RFPercentage(2),
                      height:RFPercentage(0.2),backgroundColor:Colors.lightWhite,borderRadius:RFPercentage(1)}}/>
                      
            

          {/* text Reciever */}
          <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:Colors.third,fontFamily:FontFamily.medium,fontSize:RFPercentage(1.5)}}>
                 Recipent  #13876
              </Text>
              <View style={{marginLeft:RFPercentage(1.5)}}/>
              <TouchableOpacity activeOpacity={0.7} 
                         style={{width:RFPercentage(8),height:RFPercentage(3.5),backgroundColor:Colors.primary,
                             borderRadius:RFPercentage(1),alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontFamily:FontFamily.medium,fontSize:RFPercentage(1.8),color:Colors.white}}>
                         Urgent
                      </Text>
                  </TouchableOpacity>
            </View>

                 <Text style={{color:Colors.blacki,fontFamily:FontFamily.medium,fontSize:RFPercentage(2.5),marginTop:RFPercentage(1)}}>
                     Roger Simson
                 </Text>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:Colors.secondary,fontFamily:FontFamily.regular,fontSize:RFPercentage(1.8),marginTop:RFPercentage(1)}}>
                    3117 Doctors Drive, LA, California
                 </Text>
                 <View style={{position:'absolute',right:0}}>
                  <TouchableOpacity activeOpacity={0.7} 
                         style={{width:RFPercentage(8),height:RFPercentage(4),backgroundColor:'#FFE7D8',flexDirection:'row',
                             borderRadius:RFPercentage(1),alignItems:'center',justifyContent:'center'}}>
                     <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2.5),marginRight:RFPercentage(0.5) }}
                                source={require('../../assets/images/Packageprimary.png')} />
                     <Text style={{fontFamily:FontFamily.medium,fontSize:RFPercentage(1.8),color:Colors.primary}}>
                         X1
                      </Text>
                  </TouchableOpacity>
                 </View>
                 </View>
              </View>
          
        </View>

        {/* viewmore */}
        <View style={{width:'90%',alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:RFPercentage(3)}}>
            <Text style={{color:Colors.primary,fontFamily:FontFamily.regular,fontSize:RFPercentage(2)}}>
                    View More
              </Text>
              <View style={{marginLeft:RFPercentage(0.5)}}/>
              <Ionicons 
                name="chevron-down" 
                color={Colors.primary} 
                size={20} />
        </View>

        {/* map details flatlist */}
        <FlatList
                scrollEnabled={false}
                contentContainerStyle={{justifyContent:'center'}}
                style={{ width: '90%',marginTop: RFPercentage(1),flexGrow:0}}
                data={profileList}
                keyExtractor={profileList => profileList.id.toString()}
                showsVerticalScrollIndicator={false}
                vertical
                renderItem={({ item }) =>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop:RFPercentage(2)}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width:'70%' }}>
                           <Image style={{ width: RFPercentage(3), height: RFPercentage(3) }} source={item.imageSource} />

                          <Text style={{ fontWeight: '400', fontFamily:FontFamily.regular,fontSize: RFPercentage(2.5), marginLeft: RFPercentage(1), color: Colors.secondary }}>
                             {item.title}
                          </Text>
                    
                 </View>

                 {/* arrowicon */}
                 <View style={{position:'absolute',right:0,width:'30%',alignItems:'flex-end'}}>
                       <Text style={{ fontWeight: '500', fontFamily:FontFamily.medium,fontSize: RFPercentage(2.5), marginLeft: RFPercentage(2), color: Colors.secondary }}>
                            {item.subtitle}
                        </Text>
                  </View>
            </View>
        } />

        {/* map */}
        
        <ImageBackground source={require('../../assets/images/maptangle.png')} style={{width:'90%',height:RFPercentage(25),
             marginTop:RFPercentage(5),
        alignItems:'center',justifyContent:'center',
                   borderWidth:RFPercentage(0.3),borderColor:Colors.lightWhite,borderRadius:RFPercentage(2)}}>
                 <TouchableOpacity activeOpacity={0.7}  style={{width:RFPercentage(20),height:RFPercentage(8),borderWidth:RFPercentage(0.3),
                   borderColor:Colors.primary,backgroundColor:Colors.purewhite,
                   borderRadius:RFPercentage(1.5),alignItems:'center',justifyContent:'center'}}>
           <Text style={{fontFamily:FontFamily.bold,fontSize:RFPercentage(2.5),color:Colors.primary}}>
               View Maps
            </Text>
        </TouchableOpacity>
        </ImageBackground>

        {/* buttons */}
        <View style={{width:'90%',flexDirection:'row',marginTop:RFPercentage(5),marginBottom:RFPercentage(10)}}>
             <TouchableOpacity activeOpacity={0.7}style={{alignItems:'center',justifyContent:'center',width:'47%',
                              height:RFPercentage(7),borderRadius:RFPercentage(1),backgroundColor:Colors.lightgrey,}}>
                 <Text style={{color:'#555B6A',fontFamily:FontFamily.medium,fontSize:RFPercentage(2.2)}}>Contact</Text>
             </TouchableOpacity>
             <View style={{marginLeft:'6%'}}/>
             <TouchableOpacity  activeOpacity={0.7} style={{alignItems:'center',justifyContent:'center',width:'47%',
                              height:RFPercentage(7),borderRadius:RFPercentage(1),backgroundColor:Colors.primary,position:'absolute',right:0}}>
                 <Text style={{color:Colors.white,fontFamily:FontFamily.medium,fontSize:RFPercentage(2.2)}}>Continue</Text>
             </TouchableOpacity>
          </View>

        </View>
        </ScrollView>
    </Screen>
  )
}