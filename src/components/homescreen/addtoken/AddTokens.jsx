import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'

const AddTokens = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tokenheading}>Add Tokens</Text>
        <View style={styles.kyccontainer}>
            <View style={styles.outinputview}>
            <View style={styles.lableouter}>
                <Text style={styles.lable}>Token Contract Address</Text>
            </View>
            <TextInput style={styles.input} placeholder="" />
            </View>
            <View style={styles.outinputview}>
            <View style={styles.lableouter}>
                <Text style={styles.lable}>Token Symbol </Text>
            </View>
            <TextInput style={styles.input} placeholder="" />
            </View>
            <View style={styles.outinputview}>
            <View style={styles.lableouter}>
                <Text style={styles.lable}>Token Decimal</Text>
            </View>
            <TextInput style={styles.input} placeholder="" />
            </View> 
            <View style={{paddingVertical:10}}>
                <Pressable style={styles.addTokenButton} onPress={() => navigation.navigate("tokenblance")}> 
                    <Text style={{color:'#fff', fontSize:18}}>Add Token</Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default AddTokens;

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'#fff',
        flex:1
    },
    tokenheading:{
        fontSize:20,
        fontWeight:'500',
        color:'#000',
        paddingBottom:20
    },
    kyccontainer: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#D6D6D6',
        padding: 10,
        marginBottom:40
      },
      outinputview: {
        paddingVertical: 15,
        position: 'relative',
      },
      lableouter: {
        position: 'absolute',
        left: 10,
        top: 5,
        zIndex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
      },
      lable: {
        fontWeight: '500',
      },
      input: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 15,
        fontWeight: '500',
      },
      addTokenButton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:10,
        backgroundColor:'#E4082D',
        padding:12,
        borderRadius:100,
      }
})