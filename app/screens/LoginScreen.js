import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, TouchableOpacity, StyleSheet, View, Text, TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';
import * as yup from 'yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

//Components
import Screen from '../components/Screen'
import HeaderMode from '../components/HeaderMode';
import AppButton from '../components/AppButton';

export default function LoginScreen(props) {
    const [eyeIcon, setEyeIcon] = useState(false);

    let validationSchema = yup.object().shape({
        email: yup.string().required().email().label('Email'),
        password: yup.string().required().min(4).label('Password'),
        })
  return (
    <Screen style={{ flex: 1, justifyContent:'flex-start',alignItems:'center',backgroundColor: Colors.white }}>

      {/* headerComponent */}
      <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop: RFPercentage(4)}}>
            <HeaderMode  title='Vision' onpress={() => { props.navigation.navigate('PersonalInformationScreen')}}/>
        </View>

        {/* logintext */}
        
        <View style={{width:'90%',justifyContent:'center',marginTop:RFPercentage(8)}}>
                 <Text style={{color:Colors.secondary,fontFamily:FontFamily.bold,fontSize:RFPercentage(3)}}>Login</Text>
                 <Text style={{color:Colors.third,fontFamily:FontFamily.regular,
                          fontSize:RFPercentage(2),marginTop:RFPercentage(1.5)}}>
                    Please provide your login details fo easy
                    and quick access to the app.
                 </Text>
        </View>

        {/* login inputs */}
        <Formik
                      initialValues={{ email: '', password: '' }}
                      onSubmit={() => { props.navigation.navigate('BottomTab', { screen: 'AssignTask' })}}
                      validationSchema={validationSchema}
                      >
                        {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
                            
                        <>
                        <View style={{width: '100%',alignItems:'center',justifyContent:'center',marginTop:RFPercentage(5)}}>
                        <View style={{width:'90%',justifyContent:'center'}}>
                            <Text style={{fontSize:RFPercentage(2),fontFamily:FontFamily.medium,
                                color:Colors.third,marginBottom:RFPercentage(1)}}>
                                    Email address
                             </Text>
                        </View>
                          <View style={{
                          width: '90%',
                          height: RFPercentage(7.5),
                          backgroundColor: Colors.white,
                          borderWidth:RFPercentage(0.1),
                          borderColor:Colors.lightWhite,
                          color: Colors.black,
                          paddingLeft: RFPercentage(3),
                          borderRadius: RFPercentage(1.5),
                          justifyContent: 'center'
                        }}>
                    <TextInput
                       style={{fontFamily:FontFamily.regular}}
                        keyboardType='email-address'
                        onChangeText={handleChange('email')}
                        onBlur={()=>setFieldTouched('email')}
                        // value={text}
                        placeholder='User Name or Email'
                        placeholderTextColor={Colors.placeholder}
                    />
                 </View>
                 <View style={{width:'90%'}}>
                  {touched.email && <Text style={{color:'#FF0000',fontSize:RFPercentage(1.3),marginTop:RFPercentage(0.5),fontFamily:FontFamily.regular}}>{errors.email}</Text>}
                </View>
                   
                <View style={{width:'90%',justifyContent:'center',marginTop:RFPercentage(3)}}>
                            <Text style={{fontSize:RFPercentage(2),fontFamily:FontFamily.medium,
                                color:Colors.third,marginBottom:RFPercentage(1)}}>
                                    Password
                             </Text>
                </View>
                  <View style={{
                          width: '90%',
                          height: RFPercentage(7.5),
                          backgroundColor: Colors.white,
                          borderWidth:RFPercentage(0.1),
                          borderColor:Colors.lightWhite,
                          color: Colors.black,
                          paddingLeft: RFPercentage(3),
                          borderRadius: RFPercentage(1.5),
                          justifyContent: 'center',
                        }}>
                    <TextInput
                        style={{fontFamily:FontFamily.regular}}
                        onChangeText={handleChange('password')}
                        onBlur={()=>setFieldTouched('password')}
                        // value={Password}
                        placeholder='Password'
                        placeholderTextColor={Colors.placeholder}
                        secureTextEntry={true && !eyeIcon}
                    />
                       <TouchableOpacity activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', position: "absolute", right: RFPercentage(1), width: RFPercentage(5), height: RFPercentage(5) }}>

                           <TouchableOpacity onPress={() => setEyeIcon(!eyeIcon)} style={{ position: "absolute", right: RFPercentage(1), }}>
                               <MaterialCommunityIcons
                                   color={Colors.grey}
                                   style={{ right: RFPercentage(1) }}
                                   size={RFPercentage(3)}
                                   name={eyeIcon ? "eye-outline" : "eye-off-outline"}
                               />
                           </TouchableOpacity>
                           </TouchableOpacity>
  
                    </View>
                    <View style={{width:'90%'}}>
                        {touched.password && <Text style={{color:'#FF0000',fontSize:RFPercentage(1.3),marginTop:RFPercentage(0.5),fontFamily:FontFamily.regular}}>{errors.password}</Text>}
                  </View>
                  </View>

                  {/* forget */}
                      <TouchableOpacity activeOpacity={0.7}>
                         <Text style={{fontSize:RFPercentage(2),fontFamily:FontFamily.regular,
                                color:Colors.primary,marginTop:RFPercentage(3)}}>
                                    Forgot password?
                             </Text>
                    </TouchableOpacity>

                    {/* button */}
                <TouchableOpacity  style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:RFPercentage(5)}} activeOpacity={0.7} 
                                        onPress={handleSubmit} >
                    <AppButton title='Confirm' />
                </TouchableOpacity>

                </>
                )}

                </Formik>
    </Screen>
  )
}