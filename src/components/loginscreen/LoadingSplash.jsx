import { StyleSheet, View, Image, Pressable } from 'react-native'
import React from 'react' 
import logo from '../../assets/images/mipay-wallet-logo.png'

const LoadingSplash = ({ navigation }) => {
  return (
    <View style={styles.container}> 
        <Pressable style={styles.bgcolor} onPress={() => navigation.navigate("login screen")}>
            <Image source={logo} style={styles.logo} />
        </Pressable> 
    </View>
  )
}

export default LoadingSplash

const styles = StyleSheet.create({
    container:{ 
        height:'100%',
        flex:1,
        backgroundColor:'#191532',
        alignItems:'center'
    }, 
    bgcolor:{
        padding:15,
        backgroundColor:'#00000092',
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:150,
        height:150,
        resizeMode:'contain'
    }
})