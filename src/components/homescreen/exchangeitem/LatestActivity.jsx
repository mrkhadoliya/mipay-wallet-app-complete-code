import { View, Text, SafeAreaView, FlatList, StyleSheet, TextInput, Pressable, Image } from "react-native";
import React from "react";
import CryptoList from "./CryptoList";
import cryptocurrencies from "../../../assets/data/cryptocurrencies.json";
import Ionicons from "react-native-vector-icons/Ionicons";
import receive from '../../../assets/images/receive.png'
import send from '../../../assets/images/send.png'
import buy from '../../../assets/images/buy.png'
import history from '../../../assets/images/history.png'

const LatestActivity =  (props) => {
    const { navigation } = props;
  return (
    <View style={styles.ScrollContainerHome}>
        <SafeAreaView> 
                <View style={styles.BTCContainer}>
                    <View style={styles.cryptoTExt}>
                        <View style={styles.ViewContainerBEB}>
                            <Text style={styles.balanceusd}>0.12 USDT</Text>
                            <Text style={styles.userAddress}>0x198d33fb8f75a9689626cca6</Text>
                        </View> 
                    </View> 
                    <View style={styles.ReceiveRow}>
                        <View>
                            <Pressable onPress={() => navigation.navigate('receive')}>
                                <Image source={receive} style={styles.tokenreceiveImage} />
                                <Text style={styles.btnText}>Receive</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable onPress={() => navigation.navigate('receive')}>
                                <Image source={send} style={styles.tokenreceiveImage} />
                                <Text style={styles.btnText}>Send</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable onPress={() => navigation.navigate('receive')}>
                                <Image source={buy} style={styles.tokenreceiveImage} />
                                <Text style={styles.btnText}>Buy</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable onPress={() => navigation.navigate('history')}>
                                <Image source={history} style={styles.tokenreceiveImage} />
                                <Text style={styles.btnText}>History</Text>
                            </Pressable>
                        </View>
                    </View>
                </View> 
        </SafeAreaView>
        {/* Price to tokens */}
        <SafeAreaView style={styles.totalPricesContainers}>
            <View style={{paddingVertical:10}}>
                <View style={{position:'relative'}}>
                    <TextInput placeholder="Search...." style={styles.input} />
                    <View style={styles.searchicon}>
                        <Ionicons name='search' size={22}  />
                    </View>
                </View>
            </View>

            {/* cyrpto assets View Start */}

            <FlatList data={cryptocurrencies} renderItem={({ item }) => <CryptoList {...props} marketCoin={item} />} />
        </SafeAreaView>
    </View>
  )
}

export default LatestActivity;

const styles = StyleSheet.create({
    ScrollContainerHome: { 
        backgroundColor: "#1A1532",
        height: "100%",
        overflow: "hidden",
    },
    BTCContainer: {
        padding: 15,
    },
    cryptoTExt: {}, 
    balanceusd:{
      textAlign:'center',
      fontSize:25,
      color:'#fff',
      fontWeight:'500',
      paddingBottom:10,
    },
    userAddress:{
      textAlign:'center',
      color:'#fff',
    }, 
    btnText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'500',
        fontSize:16
    },
    ReceiveRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:30,
        paddingVertical:15
    },
    tokenreceiveImage:{
        width:50,
        height:50
    },
    totalPricesContainers: {
        padding: 10, 
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    }, 
    input:{
      backgroundColor:'#ECEBEB',
      borderWidth:1,
      borderColor:'#ddd',
      borderRadius:8,
      paddingHorizontal:15,
      fontSize:18
    },
    searchicon:{
      position:'absolute',
      top:0, 
      bottom:0,
      right:10,
      flexDirection:'row',
      alignItems:'center',
    }
});
