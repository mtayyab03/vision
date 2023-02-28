import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView ,{Marker,Polyline}from 'react-native-maps';

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function MapScreen(props) {

  const [origin, setOrigin] = useState({
    latitude: 33.640411,
    longitude: -84.419853,
  });

  const [destination, setDestination] = useState({
    latitude: 33.753746,
    longitude: -84.386330,
  });
  return (
    <View style={styles.container}>
    <View style={{width:'100%',height:'56%'}}>
      <MapView style={styles.map} initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      
      <Marker
        
        coordinate={origin}>
          <View  style={{width:RFPercentage(6),height:RFPercentage(6),borderRadius:RFPercentage(3),position:'absolute',right:0,
                            alignItems:'center',
                              justifyContent:'center',backgroundColor:Colors.green}}>
            <Image
            style={{
            width: RFPercentage(2),
            height: RFPercentage(2.5),
            }}
            source={require('../../assets/images/directionlogo.png')} />
            </View>
          </Marker>
      <Marker
          
         coordinate={destination}>
               <View style={{backgroundColor:Colors.white,borderWidth:RFPercentage(0.1),alignItems:'center',justifyContent:'center',
                       borderColor:Colors.green,width:RFPercentage(3),height:RFPercentage(3),borderRadius:RFPercentage(2),}}>
                 <View style={{backgroundColor:Colors.green,
                       width:RFPercentage(2),height:RFPercentage(2),borderRadius:RFPercentage(1),}}/>
            </View>
         </Marker>
      <Polyline 
         coordinates={[origin,destination]}
         strokeWidth={2}
         strokeColor={Colors.primary}
         />

          {/* //header */}
         <View style={{width:'90%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:RFPercentage(5)}}>
            <View style={{width:RFPercentage(5),height:RFPercentage(5),borderRadius:RFPercentage(3),position:'absolute',left:0,
                         borderWidth:RFPercentage(0.2),borderColor:Colors.lightgrey,
                           alignItems:'center',justifyContent:'center',backgroundColor:Colors.purewhite}}>
                
               <Image
                style={{
                    width: RFPercentage(1.5),
                    height: RFPercentage(2),
                }}
                source={require('../../assets/images/backarrowlogo.png')} />
            </View>
              
              {/* center text */}
            <View style={{alignItems:'center',justifyContent:'center',width:RFPercentage(15),
                              height:RFPercentage(5),borderRadius:RFPercentage(1),backgroundColor:Colors.primary}}>
                 <Text style={{color:Colors.white,fontFamily:FontFamily.medium,fontSize:RFPercentage(1.7)}}>Order #34456</Text>
             </View>

             <View  style={{width:RFPercentage(5),height:RFPercentage(5),borderRadius:RFPercentage(3),position:'absolute',right:0,
                         borderWidth:RFPercentage(0.2),borderColor:Colors.lightgrey,alignItems:'center',
                           justifyContent:'center',backgroundColor:Colors.purewhite}}>
                
               <Image
                style={{
                    width: RFPercentage(2),
                    height: RFPercentage(3),
                }}
                source={require('../../assets/images/threedoticon.png')} />
            </View>
        </View>

        {/* directionicon */}
        <View style={{width:'90%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:RFPercentage(5),position:'absolute',bottom:30}}>
            <View  style={{width:RFPercentage(6),height:RFPercentage(6),borderRadius:RFPercentage(3),position:'absolute',right:0,
                             alignItems:'center',
                           justifyContent:'center',backgroundColor:Colors.primary}}>
                
               <Image
                style={{
                    width: RFPercentage(2.5),
                    height: RFPercentage(3),
                }}
                source={require('../../assets/images/directionlogo.png')} />
            </View>
        </View>
      </MapView>
     </View>
      {/* accept order text */}
      <View style={{width:'100%',height:'3%',backgroundColor:'#D0FFDC',alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:Colors.green,fontFamily:FontFamily.medium,fontSize:RFPercentage(1.5)}}>
                • You accepted this order.
          </Text>
      </View>
      {/* bottomsheet */}
      <View style={{width:'100%',height:'41%',backgroundColor:Colors.white,alignItems:'center',justifyContent:'flex-start',}}>

        {/* text */}
        <View style={{flexDirection:'row',width:'90%',alignItems:'center',justifyContent:'center'}}>
          <View style={{width:'10%',height:'77%',alignItems:'center',justifyContent:'center',}}>
            <View style={{backgroundColor:Colors.white,borderWidth:RFPercentage(0.1),alignItems:'center',justifyContent:'center',
                       borderColor:Colors.green,width:RFPercentage(2),height:RFPercentage(2),borderRadius:RFPercentage(1),}}>
                 <View style={{backgroundColor:Colors.green,
                       width:RFPercentage(1.2),height:RFPercentage(1.2),borderRadius:RFPercentage(1),}}/>
            </View>
            <View style={{height:RFPercentage(10.5),borderWidth:1,borderStyle:'dashed',borderColor:Colors.lightWhite,flexDirection:'column'}}></View>
           
            <View style={{backgroundColor:Colors.white,borderWidth:RFPercentage(0.1),alignItems:'center',justifyContent:'center',
                       borderColor:Colors.primary,width:RFPercentage(2),height:RFPercentage(2),borderRadius:RFPercentage(1),}}>
                 <View style={{backgroundColor:Colors.primary,
                       width:RFPercentage(1.2),height:RFPercentage(1.2),borderRadius:RFPercentage(1),}}/>
            </View>
          </View>

          {/* text Sender */}
          
          <View style={{width:'90%',height:'77%',justifyContent:'center'}}>
              <Text style={{color:Colors.third,fontFamily:FontFamily.medium,fontSize:RFPercentage(1.5)}}>
                 Sender  #13876
              </Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Text style={{color:Colors.blacki,fontFamily:FontFamily.medium,fontSize:RFPercentage(2.5),marginTop:RFPercentage(1)}}>
                     Eric Cartman
                 </Text>
                 <View style={{position:'absolute',right:0}}>
                  <TouchableOpacity activeOpacity={0.7} 
                         style={{width:RFPercentage(8),height:RFPercentage(4),borderWidth:RFPercentage(0.2),
                             borderColor:Colors.primary,borderRadius:RFPercentage(1),alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontFamily:FontFamily.medium,fontSize:RFPercentage(2),color:Colors.primary}}>
                         Call
                      </Text>
                  </TouchableOpacity>
                 </View>
                 
              </View>
              <Text style={{color:Colors.secondary,fontFamily:FontFamily.regular,fontSize:RFPercentage(1.8),marginTop:RFPercentage(1)}}>
                      4123 Big Green, LA, California
                 </Text>

          

          {/* line */}
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:RFPercentage(1),marginBottom:RFPercentage(1)}}>
                     <View style={{width:'88%',
                      height:RFPercentage(0.2),backgroundColor:Colors.lightgrey,borderRadius:RFPercentage(1)}}/>
                      <Text style={{color:Colors.third,fontFamily:FontFamily.medium,fontSize:RFPercentage(1.5),marginLeft:RFPercentage(1)}}>
                            2.5km
                       </Text>
            </View>

          {/* text Reciever */}
          
              <Text style={{color:Colors.third,fontFamily:FontFamily.medium,fontSize:RFPercentage(1.5)}}>
                 Recipent  #13876
              </Text>
              
                 <Text style={{color:Colors.blacki,fontFamily:FontFamily.medium,fontSize:RFPercentage(2.5),marginTop:RFPercentage(1)}}>
                     Roger Simson
                 </Text>
              <Text style={{color:Colors.secondary,fontFamily:FontFamily.regular,fontSize:RFPercentage(1.8),marginTop:RFPercentage(1)}}>
                    3117 Doctors Drive, LA, California
                 </Text>
              </View>
          
        </View>

        {/* viewmore */}
        <View style={{width:'90%',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <Text style={{color:Colors.primary,fontFamily:FontFamily.regular,fontSize:RFPercentage(2)}}>
                    View More
              </Text>
              <View style={{marginLeft:RFPercentage(0.5)}}/>
              <Ionicons 
                name="chevron-down" 
                color={Colors.primary} 
                size={20} />
        </View>
        
        {/* buttons */}
        <View style={{width:'80%',flexDirection:'row',position:'absolute',bottom:RFPercentage(2)}}>
             <TouchableOpacity onPress={() => { props.navigation.navigate('EnterDetailsScreen')}} activeOpacity={0.7} 
                  style={{alignItems:'center',justifyContent:'center',width:'48%',
                              height:RFPercentage(7),borderRadius:RFPercentage(1),backgroundColor:Colors.lightgrey,}}>
                 <Text style={{color:Colors.third,fontFamily:FontFamily.medium,fontSize:RFPercentage(2.2)}}>Cancel Order</Text>
             </TouchableOpacity>
             <View style={{marginLeft:RFPercentage(3)}}/>
             <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center',justifyContent:'center',width:'48%',
                              height:RFPercentage(7),borderRadius:RFPercentage(1),backgroundColor:'#8C8C8C',position:'absolute',right:0}}>
                 <Text style={{color:Colors.white,fontFamily:FontFamily.medium,fontSize:RFPercentage(2.2)}}>Reached Site</Text>
             </TouchableOpacity>
          </View>
      </View>

     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    
    alignItems:'center',

    width: '100%',
    height: '100%',
  },
});