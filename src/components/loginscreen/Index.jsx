import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react' 
import bitcoin from '../../assets/images/man-trader-with-bitcoin-coin.png'  

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}> 
           <View style={styles.bgcolor}>
                <Image source={bitcoin} style={styles.bitcoiniman} />
           </View> 
            <View style={styles.DiscoverContainer}>
                <View>
                    <Text style={styles.Discovertext}>Discover your Dream job here</Text>
                    <Text style={styles.disdream}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. it to make a type specimen book.</Text>
                </View>
                <View style={styles.btnContainer}> 
                    <TouchableOpacity style={[styles.LoginButton]} activeOpacity={0.8} onPress={() => navigation.navigate("sign up")}>
                        <Text style={styles.logintext}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.SignButton]} activeOpacity={0.8} onPress={() => navigation.navigate("login main")}>
                        <Text style={styles.logintext}>LOGIN</Text>
                    </TouchableOpacity> 
                </View>
            </View> 
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{ 
        height:'100%',
        flex: 1, 
        backgroundColor:'#1A1532',
    }, 
    bgcolor:{  
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    bitcoiniman:{
        width:'100%',
        height:300,
        resizeMode:'contain',
        top:5
    },
    DiscoverContainer:{
        backgroundColor:'#fff',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20
    },
    Discovertext:{
        fontSize:30,
        textAlign:'center',
        fontWeight:'500',
        color:'#000',
        paddingBottom:15
    },
    disdream:{
        textAlign:'center',
        fontSize:15,
        lineHeight:25,
        fontWeight:'500'
    },
    btnContainer:{
        paddingTop:50, 
        width: "100%",
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        justifyContent:'center'
    },
    LoginButton: {
        paddingVertical: 15,
        width: "50%",
        borderTopStartRadius: 100,
        borderBottomStartRadius: 100, 
        backgroundColor:'#E4082D', 
    },
    SignButton: {
        paddingVertical: 15,
        width: "50%",  
        backgroundColor:'#E4082D',
        borderTopEndRadius: 100,
        borderBottomEndRadius: 100,
    },
    logintext:{
        textAlign: "center",
        color: "#fff",
        fontSize: 19,
        fontWeight:'500'
    }
})