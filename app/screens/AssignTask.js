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
import AppModal from '../components/AppModal';
import AppHeader from '../components/AppHeader';

export default function AssignTask(props) {
  const[menuid,setmenuid]=useState(1)
  const [secmodalVisible, setSecModalVisible] = useState(false);
  const categoryList = [
    {
        id: 1,
        title: 'Assigned',
  
    },
    {
        id: 2,
        title: 'Charted',
  
  },
    {
        id: 3,
        title: 'History',
  
  },
]

const routeList = [
  {
      id: 1,
      title: '7th street, SDAT Cricket Ground',
      subtitle:'15th Highway Road, Ohio'
  },
  {
      id: 2,
      title: '4123 Big Green, LA, California',
      subtitle:'3117 Doctors Drive , Oklahome'
},
  {
      id: 3,
      title: '6391 Elgin St. Celina, Olivia',
      subtitle:'1901 Thornridge Cir, Candina'
},
  {
      id: 4,
      title: '4140 Parker Rd. Allentown',
      subtitle:'3517 W. Gray St. Downtown alley'

  },
  {
    id: 5,
    title: '1901 Thornridge Cir. Shiloh',
    subtitle:'2972 Westheimer, New jercey'

},
]
  return (
    <Screen style={{ flex: 1, justifyContent:'flex-start',alignItems:'center',backgroundColor: Colors.white }}>

      {/* //header */}
        <AppHeader/>

      {/* categorized */}
      <View style={{width:'90%',flexDirection:'row',borderWidth:RFPercentage(0.3),borderRadius:RFPercentage(1),marginTop:RFPercentage(3),
                   borderColor:Colors.lightgrey,backgroundColor:Colors.purewhite,alignItems:'center',padding:RFPercentage(1)}}>
          {categoryList.map((item,i) =>(
         <TouchableOpacity activeOpacity={0.7} onPress={()=>setmenuid(item.id)} key={i}
                   style={{width:'33.33%',height:RFPercentage(7),backgroundColor:menuid===item.id?Colors.secondary:null,alignItems:'center',
                         justifyContent:'center',borderRadius:RFPercentage(1)}}>
              <Text style={{fontFamily:FontFamily.medium,fontSize:RFPercentage(2.5),color:menuid===item.id?Colors.white:Colors.third}}>
                  {item.title}
              </Text>
         </TouchableOpacity>
          ))}
      </View>

      {/* //locatin details */}
      <FlatList
                   scrollEnabled={false}
                   contentContainerStyle={{justifyContent:'center'}}
                   style={{width:'90%',marginTop: RFPercentage(1),flexGrow:0}}
                   data={routeList}
                   keyExtractor={routeList=> routeList.id.toString()}
                   showsVerticalScrollIndicator={false}
                   vertical
                   renderItem={({ item }) => 
                   <>
      <View style={{width:'100%',marginTop:RFPercentage(3),flexDirection:'row'}}>
        <View style={{justifyContent:'center',width:'65%',}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{borderWidth:RFPercentage(0.7),borderColor:Colors.green,
               width:RFPercentage(2),height:RFPercentage(2),borderRadius:RFPercentage(1),backgroundColor:Colors.white}}/>
            <Text style={{fontFamily:FontFamily.regular,fontSize:RFPercentage(2),color:Colors.third,marginLeft:RFPercentage(1)}}>
               {item.title}
            </Text>

          </View>
          <View style={{marginTop:RFPercentage(2.5)}}/>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{borderWidth:RFPercentage(0.7),borderColor:Colors.primary,
               width:RFPercentage(2),height:RFPercentage(2),borderRadius:RFPercentage(1),backgroundColor:Colors.white}}/>
            <Text style={{fontFamily:FontFamily.regular,fontSize:RFPercentage(2),color:Colors.third,marginLeft:RFPercentage(1)}}>
               {item.subtitle}
            </Text>

          </View>

        </View>

        {/* accept button */}
        <View style={{position:'absolute',right:0,width:'35%',alignItems:'flex-end'}}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSecModalVisible(true)} style={{width:RFPercentage(13),height:RFPercentage(7.5),borderWidth:RFPercentage(0.3),
                   borderColor:Colors.primary,borderRadius:RFPercentage(1),alignItems:'center',justifyContent:'center'}}>
           <Text style={{fontFamily:FontFamily.medium,fontSize:RFPercentage(2.5),color:Colors.primary}}>
               Accept
            </Text>
        </TouchableOpacity>
        </View>
      </View>

      {/* line */}
        <View style={{width:'100%',marginTop:RFPercentage(3),
          height:RFPercentage(0.2),backgroundColor:Colors.lightgrey,borderRadius:RFPercentage(1)}}/>
        </>
      }/>

{/* modal */}
        <AppModal modalVisible={secmodalVisible} setModalVisible={setSecModalVisible} style={{justifyContent:'center'}} >
             <Image
                 style={{
                     width: RFPercentage(12),
                     height: RFPercentage(12),
                 }}
                 source={require('../../assets/images/modalpic.png')} />
                  <View style={{alignItems:'center',justifyContent:'center',marginTop:RFPercentage(4)}}>
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontWeight:'700',fontFamily:FontFamily.semiBold }}>
                           Want to deliver this order?
                     </Text>
                    <View style={{width:'100%',marginTop:RFPercentage(2),alignContent:'center',justifyContent:'center'}}>
                     <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontWeight:'500',fontFamily:FontFamily.regular,
                                textAlign:'center',lineHeight:RFPercentage(3) }}>
                             Please make sure that you deliver the package before the deadline.
                     </Text>
                     </View>
                </View>

                   {/* button */} 
                   
                   <View style={{width:'90%',flexDirection:'row',marginTop:RFPercentage(5)}}>
                          <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center',justifyContent:'center',width:RFPercentage(15),
                                           height:RFPercentage(7),borderRadius:RFPercentage(1),backgroundColor:Colors.lightWhite}}>
                              <Text style={{color:Colors.secondary,fontFamily:FontFamily.bold,fontSize:RFPercentage(2.2)}}>No</Text>
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