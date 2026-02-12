import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'
import logo from '../../assets/images/mipay-wallet-logo.png'

const LoginMain = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logocontainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.wlcmcontainer}>
        <Text style={styles.wlcmtext}>Login</Text>
        <Text style={styles.continuetext}>Please sign in to continue.</Text>
      </View>
      <View style={styles.textInputContainer}>
            <View style={styles.outinputview}>
                <View style={styles.lableouter}>
                    <Text style={styles.lable}>Email</Text>
                </View>
                <TextInput style={styles.input} placeholder='Enter your email..' />
            </View>
            <View style={styles.outinputview}>
                <View style={styles.lableouter}>
                    <Text style={styles.lable}>Password</Text>
                </View>
                <TextInput style={styles.input} placeholder='Enter your password..' />
            </View>
            <View style={{justifyContent:'flex-end', flexDirection:'row', paddingBottom:10}}>
                <Pressable activeOpacity={0.8} onPress={() => navigation.navigate("forget password")}>
                    <Text style={styles.forgot}>Forgot Password</Text>
                </Pressable> 
            </View>
            <View style={{justifyContent:'flex-end', flexDirection:'row'}}>
                <Pressable style={[styles.LoginButton]} activeOpacity={0.8} onPress={() => navigation.navigate("home")}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 17, fontWeight:'500' }}>Login</Text>
                </Pressable> 
            </View>
      </View>
      <View>
            <Text style={styles.sign}>Don't have an account? <Text style={{color:'#E4082D', fontWeight:'600'}}>Sign Up</Text> </Text>
      </View>
    </ScrollView>
  )
}

export default LoginMain;

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
    forgot :{ 
        color: "#000",
        fontSize: 17,
        fontWeight:'400',
        right:10
    },
    LoginButton: {
        paddingVertical: 13,
        width: "50%",
        backgroundColor:'#E4082D',
        borderTopEndRadius: 100,
        borderBottomEndRadius: 100,
        alignItems:'center',
        justifyContent:'flex-end'
    },  
    sign:{
        textAlign:'center',
        paddingVertical:15,
        color:'#fff',
        fontWeight:'500'
    }
})