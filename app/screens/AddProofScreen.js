import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, ImageBackground} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import * as ImagePicker from 'expo-image-picker';


//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

//Components
import Screen from '../components/Screen'
import TitleFfield from '../components/TitleFfield';
import MainHeader from '../components/MainHeader';
import TitleCirlcle from '../components/TitleCirlcle';
import AppButton from '../components/AppButton';
import AppModal from '../components/AppModal';

export default function AddProofScreen(props) {
  const [secmodalVisible, setSecModalVisible] = useState(false);

  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Screen style={{ flex: 1, justifyContent:'flex-start',alignItems:'center', }}>
         
      {/* //header */}
      <View style={{width:'100%',height:'10%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
           <MainHeader onpress={() => { props.navigation.navigate('MapScreen')}} title='Proof of Pick-up' color="#FF6600"/>
        </View>
        
        {/* image */}
        <View style={{width:'100%',alignItems:'center',height:'90%',
               backgroundColor:Colors.purewhite,borderTopLeftRadius:RFPercentage(3),borderTopRightRadius:RFPercentage(3)}}>
                <View style={{marginTop:RFPercentage(3)}}/>
                <View style={{width:'90%',flexDirection:'row',alignItems:'center'}}>
                  <View style={{flexDirection:'row',alignItems:'center',}}>
                     <View style={{width:RFPercentage(4),height:RFPercentage(4),borderRadius:RFPercentage(3),
                                  alignItems:'center',
                                  justifyContent:'center',backgroundColor:Colors.green}}>
                         <Text style={{fontWeight:'600',fontSize:RFPercentage(2), color:Colors.white,fontFamily:FontFamily.medium}}>
                            1
                         </Text>
                     </View>
                      <View style={{marginLeft:RFPercentage(1.5)}}/>
                         <Text style={{fontWeight:'600',fontSize:RFPercentage(2.3), color:Colors.green,fontFamily:FontFamily.medium}}>
                            Enter Details
                         </Text>
                    </View> 

                 <TouchableOpacity activeOpacity={0.7} 
                         style={{width:RFPercentage(8),height:RFPercentage(4),backgroundColor:'#D0FFDC',position:'absolute',right:0,
                             alignItems:'center',justifyContent:'center',borderRadius:RFPercentage(0.5)}}>
                     <Text style={{fontFamily:FontFamily.regular,fontSize:RFPercentage(1.8),color:Colors.green}}>
                         Done
                      </Text>
                  </TouchableOpacity>
                 </View>
                 {/* line */}
                 <View style={{width:'80%',marginTop:RFPercentage(2),marginBottom:RFPercentage(2),marginLeft:RFPercentage(4),
                      height:RFPercentage(0.2),backgroundColor:Colors.white,borderRadius:RFPercentage(1)}}/>
                
                <TitleCirlcle title='Add Proof' num='2' color={Colors.primary} />

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
                       Please upload the receipt from your phone...
                </Text>    
            
           </View>

            {/* upload image*/}
            <View style={{marginTop:RFPercentage(2)}}/>

            {image? null :
            <ImageBackground source={require('../../assets/images/uploadbg.png')} style={{width:RFPercentage(50),height:RFPercentage(33),
             overflow:'hidden',
             alignItems:'center',justifyContent:'center',
                  borderRadius:RFPercentage(2)}}>
               <TouchableOpacity activeOpacity={0.7} onPress={pickImage} style={{width:RFPercentage(20),height:RFPercentage(7),
                   backgroundColor:Colors.primary,
                   borderRadius:RFPercentage(1.5),alignItems:'center',justifyContent:'center'}}>
                      <Text style={{fontFamily:FontFamily.medium,fontSize:RFPercentage(2),color:Colors.white}}>
                      Upload Picture
                       </Text>
               </TouchableOpacity>
            </ImageBackground>}
            {image && <Image source={{ uri: image }} style={{width:RFPercentage(50),height:RFPercentage(33),
                  borderRadius:RFPercentage(2)}} />}
           
            {/* Take picture */}
        <TouchableOpacity  
                   style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:RFPercentage(2),marginBottom:RFPercentage(2)}}
                    activeOpacity={0.7} >
                    <View style={{
                               width: '90%', height: RFPercentage(7)
                             , borderRadius: RFPercentage(1), alignItems: 'center', justifyContent: 'center'
                             ,borderColor:Colors.primary,borderWidth:RFPercentage(0.2)}}>
            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontWeight:'700',fontFamily:FontFamily.medium}}>
                Take a Picture
            </Text>
        </View>
        </TouchableOpacity>

        {/* button */}
        <TouchableOpacity   onPress={() => setSecModalVisible(true)}
                   style={{width:'100%',justifyContent:'center',alignItems:'center',position:'absolute',bottom:RFPercentage(1)}}
                    activeOpacity={0.7} >
                    <View style={{
                               width: '90%', height: RFPercentage(7)
                             , borderRadius: RFPercentage(1), alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2)
                             ,backgroundColor:Colors.grey}}>
            <Text style={{ color: Colors.white, fontSize: RFPercentage(2.4), fontWeight:'700',fontFamily:FontFamily.medium}}>
                Next
            </Text>
        </View>
        </TouchableOpacity>

        </View>
    {/* modal */}
  <AppModal modalVisible={secmodalVisible} setModalVisible={setSecModalVisible} style={{justifyContent:'center'}} >
             <Image
                 style={{
                     width: RFPercentage(12),
                     height: RFPercentage(12),
                 }}
                 source={require('../../assets/images/canceliconmodal.png')} />
                  <View style={{alignItems:'center',justifyContent:'center',marginTop:RFPercentage(4)}}>
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontWeight:'700',fontFamily:FontFamily.semiBold }}>
                         Select a reason to cancel
                     </Text>
                      
                      <View style={{marginTop:RFPercentage(4),}}/>
                     {/* radio slection */}
                    <View style={{width:RFPercentage(37),flexDirection:'row',}}>
                     <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontWeight:'500',fontFamily:FontFamily.regular }}>
                         I accidentally accepted the order 
                     </Text>
                     <View style={{width:RFPercentage(2),height:RFPercentage(2),borderRadius:RFPercentage(1),
                                borderWidth:RFPercentage(0.2),borderColor:Colors.primary,alignItems:'center',position:'absolute',right:0,
                                 justifyContent:'center',}}>
                                
                         </View>

                     </View>
                     {/* line */}
                    <View style={{width:RFPercentage(37),marginTop:RFPercentage(1.5),marginBottom:RFPercentage(1.5),
                      height:RFPercentage(0.2),backgroundColor:Colors.lightWhite,borderRadius:RFPercentage(1)}}/>

                  <View style={{width:RFPercentage(37),flexDirection:'row',}}>
                     <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontWeight:'500',fontFamily:FontFamily.regular }}>
                          Receiver is not available right now 
                     </Text>
                     <View style={{width:RFPercentage(2),height:RFPercentage(2),borderRadius:RFPercentage(1),
                                borderWidth:RFPercentage(0.2),borderColor:Colors.primary,alignItems:'center',position:'absolute',right:0,
                                 justifyContent:'center',}}>
                                <View style={{width:RFPercentage(1),height:RFPercentage(1),borderRadius:RFPercentage(1),
                                   backgroundColor:Colors.primary}}/>
                         </View>

                     </View>
                     {/* line */}
                    <View style={{width:RFPercentage(37),marginTop:RFPercentage(1.5),marginBottom:RFPercentage(1.5),
                      height:RFPercentage(0.2),backgroundColor:Colors.lightWhite,borderRadius:RFPercentage(1)}}/>

               <View style={{width:RFPercentage(37),flexDirection:'row',}}>
                     <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontWeight:'500',fontFamily:FontFamily.regular }}>
                         Something is wrong with my vehicle 
                     </Text>
                     <View style={{width:RFPercentage(2),height:RFPercentage(2),borderRadius:RFPercentage(1),
                                borderWidth:RFPercentage(0.2),borderColor:Colors.primary,alignItems:'center',position:'absolute',right:0,
                                 justifyContent:'center',}}>
                                
                         </View>

                     </View>
                     {/* line */}
                    <View style={{width:RFPercentage(37),marginTop:RFPercentage(1.5),marginBottom:RFPercentage(1.5),
                      height:RFPercentage(0.2),backgroundColor:Colors.lightWhite,borderRadius:RFPercentage(1)}}/>

              <View style={{width:RFPercentage(37),flexDirection:'row',}}>
                     <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontWeight:'500',fontFamily:FontFamily.regular }}>
                         Other reason 
                     </Text>
                     <View style={{width:RFPercentage(2),height:RFPercentage(2),borderRadius:RFPercentage(1),
                                borderWidth:RFPercentage(0.2),borderColor:Colors.primary,alignItems:'center',position:'absolute',right:0,
                                 justifyContent:'center',}}>
                                
                         </View>

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
                              <Text style={{color:Colors.white,fontFamily:FontFamily.bold,fontSize:RFPercentage(2.2)}}>Confirm</Text>
                          </TouchableOpacity>
                       </View>
                   

         </AppModal>
  
    </Screen>
  )
}