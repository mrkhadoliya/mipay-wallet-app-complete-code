import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import barcode from '../../../assets/images/barcode-openkm.png'

const Receive = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.barcodecontainer}>
                <View>
                    <Text style={[styles.miText, {paddingBottom:10}]}>MGA</Text>
                </View>
            <View style={styles.codebarrow}>
                <Image source={barcode} style={styles.imagecode} />
                <View style={styles.codeDtl}>
                    <Text style={styles.miText}>MiPay</Text>
                    <Text style={styles.miText}>MIpay-01xc02</Text> 
                </View>
                <View>
                    <Pressable onPress={() => navigation.navigate("topsup")}>
                        <Text style={[styles.miText, {color:'#E4082D', }]}>Tap to Copy</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.CreateWallet}>
                <Pressable style={styles.ShareBtn}>
                    <Text style={styles.btnText}>Share</Text>
                </Pressable>
                <Pressable style={styles.CopyBtn}>
                    <Text style={styles.btnText}>Copy</Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default Receive

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#1A1532'
    },
    barcodecontainer:{
        backgroundColor:'#fff',
        padding:15,
        width:'100%',
        flex:1,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },
    codebarrow:{
        borderWidth: 1,
        borderColor: '#ECEBEB',
        paddingVertical: 13,
        backgroundColor:'#F5F5F5',
        borderRadius:12
    },
    imagecode:{
        width:'100%',
        height:300,
        resizeMode:'contain'
    },
    codeDtl:{
        paddingVertical:20
    },
    miText:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'500',
        paddingTop:5,
        color:'#000'
    },
    CreateWallet:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:15,
        paddingVertical:15
    },
    ShareBtn:{
        width:'50%',
        backgroundColor:'#E4082D',
        paddingVertical:15,
        textAlign:'center',
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
    },
    CopyBtn:{
        width:'50%',
        backgroundColor:'#E4082D',
        paddingVertical:15,
        textAlign:'center',
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
    },
    btnText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'500',
        fontSize:16
    },
})