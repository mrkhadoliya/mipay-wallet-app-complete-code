import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'
import logo from '../../assets/images/mipay-wallet-logo.png'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ForgotPassword = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logocontainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.wlcmcontainer}>
        <Text style={styles.wlcmtext}>Forgot Password</Text>
        <Text style={styles.continuetext}>Enter the email address associated with your account</Text>
      </View>
      <View style={styles.textInputContainer}>
            <View style={styles.outinputview}>
                <View style={styles.lableouter}>
                    <Text style={styles.lable}>Email ID</Text>
                </View>
                <TextInput style={styles.input} placeholder='Enter your email..' />
            </View> 
            <View style={{justifyContent:'flex-end', flexDirection:'row'}}>
                <Pressable style={[styles.ResetButton]} activeOpacity={0.8} onPress={() => navigation.navigate("otp")}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 17, fontWeight:'500' }}>Reset Password</Text>
                    <AntDesign name='right' size={20} color="#fff" />
                </Pressable> 
            </View>
      </View> 
    </ScrollView>
  )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1A1532',
        padding:15, 
    },
    logocontainer:{
        paddingVertical:20,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:120,
        height:120,
        resizeMode:'contain'
    },
    wlcmcontainer:{
        paddingBottom:20
    },
    wlcmtext:{
        fontSize:28,
        fontWeight:'500',
        color:'#fff',
        paddingBottom:10
    },
    continuetext:{
        fontSize:15,
        color:'#fff'
    },
    textInputContainer:{
        paddingHorizontal:15,
        paddingVertical:25,
        backgroundColor:'#fff',
        borderRadius:12
    },
    outinputview:{
        paddingVertical:15,
        position:'relative'
    },
    lableouter:{
        position:'absolute',
        left:20,
        top:5,
        zIndex:1,
        backgroundColor:'#fff',
        paddingHorizontal:5
    },
    lable:{
        fontWeight:'500'
    },
    input:{
        borderRadius:12,
        borderWidth:1,
        borderColor:'#ccc',
        paddingHorizontal:15,
        fontWeight:'500'
    }, 
    ResetButton: {
        paddingVertical: 13,
        width: "auto",
        backgroundColor:'#E4082D',
        borderTopEndRadius: 100,
        borderBottomEndRadius: 100,
        alignItems:'center',
        justifyContent:'flex-end',
        flexDirection:'row',
        paddingHorizontal:20
    },  
})