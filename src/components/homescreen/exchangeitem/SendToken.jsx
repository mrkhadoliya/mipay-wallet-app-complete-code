import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'

const SendToken = () => {
  return (
    <View style={styles.container}>
        <View style={styles.AvailableRow}> 
            <Text style={styles.Available}>0.10 MGA</Text>
            <Text style={[styles.Available, {fontSize:15, paddingVertical:8}]}>Available 0ETH</Text>
        </View>
        <View style={styles.RecipientAddress}>
            <View style={styles.outinputview}>
                <View style={styles.lableouter}>
                    <Text style={styles.lable}>Recipient Address</Text>
                </View>
                <TextInput style={styles.input} placeholder='' />
            </View>
            <View style={styles.outinputview}>
                <View style={styles.lableouter}>
                    <Text style={styles.lable}>Amount to send</Text>
                </View>
                <TextInput style={styles.input} placeholder='' />
            </View>
            
            <View style={styles.lableouter}>
                <Text style={[styles.lable,{color:'#E4082D'}]}>Fee is applicable to this send crypto</Text>
            </View>
            <View style={styles.btnsendcontainer}>
                <Pressable style={styles.sendbutton}>
                    <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Send</Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default SendToken;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#1A1532'
    },
    AvailableRow:{
        paddingVertical:15
    },
    Available:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'500',
        fontSize:25
    },
    RecipientAddress: {
        paddingHorizontal: 15, 
        paddingTop: 25, 
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        flex:1,
        width:'100%'
    }, 
    outinputview:{
        paddingVertical:10
    },
    lableouter:{},
    lable:{
        paddingBottom:8,
        fontSize:16,
        color:'#000'
    },
    input:{
        borderRadius:12,
        borderWidth:1,
        borderColor:'#ccc',
        paddingHorizontal:15,
        fontWeight:'500'
    },
    btnsendcontainer:{
        paddingVertical:20
    },
    sendbutton:{
        width:'100%',
        backgroundColor:'#E4082D',
        paddingVertical:15,
        borderRadius:100
    }
})