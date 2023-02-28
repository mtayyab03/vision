import React from 'react'
import { View, Text ,Image, TouchableOpacity} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

//Components
import Screen from '../components/Screen'
import DoubleButton from '../components/DoubleButton';

export default function SplashScreen(props) {
  return (
    <Screen style={{ flex: 1, justifyContent: 'center',alignItems:'center',backgroundColor: Colors.white }}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:Colors.white}} >
          {/* vision */}
           <View style={{position:'absolute',top:RFPercentage(3)}}>
              <Text style={{color:Colors.primary,fontFamily:FontFamily.bold,fontSize:RFPercentage(3)}}>
                    Visions
               </Text>
           </View>
          {/* image */}
          <Image
                 style={{
                     width: RFPercentage(40),
                     height: RFPercentage(39),
                 }}
                 source={require('../../assets/images/vision2logo.png')} />
             
              {/* text */}
             <View style={{marginTop:RFPercentage(3),width:'80%'}}>
                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                     <Text style={{color:Colors.primary,fontFamily:FontFamily.bold,fontSize:RFPercentage(3.5)}}>Visions</Text>
                     <Text style={{color:Colors.secondary,fontFamily:FontFamily.bold,fontSize:RFPercentage(3.5)}}> Fleet Management</Text>
                </View>
                <Text style={{color:Colors.third,textAlign:'center',fontFamily:FontFamily.regular,fontSize:RFPercentage(2),marginTop:RFPercentage(1.5)}}>
                    Earn money with us regularly as youo take your time to deliver your product
                </Text>
             </View>
          </View>

          {/* button */}
          <DoubleButton title='Register' subtitle='Login' onpress={() => { props.navigation.navigate('LoginScreen')}}/>
      </Screen>
  )
}