import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native'
import React, {useState} from 'react'
import logo from '../../assets/images/mipay-wallet-logo.png' 

const SignUp = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logocontainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.wlcmcontainer}>
        <Text style={styles.wlcmtext}>Create Account</Text>
        <Text style={styles.continuetext}>Please sign Up to continue.</Text>
      </View>
      <View style={styles.textInputContainer}>
            <View style={styles.outinputview}>
                <View style={styles.lableouter}>
                    <Text style={styles.lable}>Full Name</Text>
                </View>
                <TextInput style={styles.input} placeholder='' />
            </View>
            <View style={styles.outinputview}>
                <View style={styles.lableouter}>
                    <Text style={styles.lable}>Email</Text>
                </View>
                <TextInput style={styles.input} placeholder='' />
            </View> 
            <View style={styles.outinputview}>
                <View style={styles.lableouter}>
                    <Text style={styles.lable}>Password</Text>
                </View>
                <TextInput style={styles.input} placeholder='' />
            </View> 
            <View style={styles.outinputview}>
                <View style={styles.lableouter}>
                    <Text style={styles.lable}>Confirm Password</Text>
                </View>
                <TextInput style={styles.input} placeholder='' />
            </View> 
            <View style={{justifyContent:'flex-end', flexDirection:'row'}}>
                <Pressable style={[styles.LoginButton]} activeOpacity={0.8} onPress={() => navigation.navigate("sign up")}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 17, fontWeight:'500' }}>Register</Text>
                </Pressable> 
            </View>
      </View>
      <View>
            <Text style={styles.sign}>Already have a account? <Text style={{color:'#E4082D', fontWeight:'600'}}>Sign Up</Text> </Text>
      </View>
    </ScrollView>
  )
}

export default SignUp;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1A1532',
        padding:15, 
    },
    logocontainer:{
        paddingVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:100,
        height:100,
        resizeMode:'contain'
    },
    wlcmcontainer:{
        paddingBottom:20
    },
    wlcmtext:{
        fontSize:25,
        fontWeight:'500',
        color:'#fff',
        paddingBottom:5
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
        paddingVertical:10,
        position:'relative'
    },
    lableouter:{
        position:'absolute',
        left:15, 
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