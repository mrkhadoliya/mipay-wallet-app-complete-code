import { StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import iconlogo from "../../assets/images/mipay-wallet-logo.png";
import mastervisa from "../../assets/images/master-visa.png";
import mga from "../../assets/images/MGA-Icon.png";
import  Ionicons from 'react-native-vector-icons/Ionicons'

const BuySell = () => {

  const [selectedTab, setSelectedTab] = useState(0);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.Buycontainer}>
                <Text style={styles.BuyText}>Buy / Sell</Text>
                <Text style={styles.Buydisc}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
            </View>
            
            <View style={{paddingBottom:8}}>
                <Pressable style={[styles.BuyButton, {borderRadius:12}]}>
                    <Text style={styles.textBuyButton}>To My Wallet</Text>
                </Pressable>
            </View>
            <View style={styles.exchansenRow}>
              <View style={styles.buysellrow}>
                <Pressable style={[styles.buywallets,{ backgroundColor:selectedTab === 0 ? '#fff' : '#1A1532'}]} onPress={() => {setSelectedTab(0);}}>
                    <Text style={[styles.textBuyButton, {color:selectedTab === 0 ? '#000' : '#fff'}]}>Buy</Text>
                    <Ionicons name='arrow-up-outline' style={{color:selectedTab === 0 ? '#000' : '#fff'}} size={20} /> 
                </Pressable>
                <Pressable style={[styles.sellwallets,{ backgroundColor : selectedTab === 1 ? '#fff' : '#00000000'}]} onPress={() => {setSelectedTab(1);}}>
                    <Text style={[styles.textBuyButton, {color:selectedTab === 1 ? '#000' : '#fff'}]}>Sell</Text>
                    <Ionicons name='arrow-down-outline' style={{color:selectedTab === 1 ? '#000' : '#fff'}} size={20} /> 
                </Pressable>
              </View>

            {selectedTab==0 ? (
              <View style={styles.buysfirstrow}>
                  <View style={styles.FromRow}>
                        <View style={styles.displayflex}> 
                            <Text style={styles.textfron}>From</Text> 
                            <Text style={styles.textfron}>Bal: 100 USDT</Text> 
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, width: "100%", justifyContent: "space-between" }}>
                            <View style={{ width: "70%" }}>
                                <TextInput placeholder="0.10" placeholderTextColor="#000" style={styles.input} />
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 8, justifyContent: "flex-start" }}> 
                                <View style={[styles.maxbtn, { flexDirection: "row", alignItems: "center", gap: 2 }]}>
                                    <Image source={iconlogo} style={{ width: 25, height: 25, resizeMode: "contain" }} />
                                    <Text style={{ fontWeight: "500", color: "#000" }}>USDT</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.swapiconrow}></View>
                    <View style={styles.FromRow}>
                        <View style={styles.displayflex}> 
                            <Text style={styles.textfron}>To</Text> 
                            <Text style={styles.textfron}>Bal: 15 TRX</Text> 
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, width: "100%", justifyContent: "space-between" }}>
                            <View style={{ width: "70%" }}>
                                <TextInput placeholder="0.10" placeholderTextColor="#000" style={styles.input} />
                            </View>
                            <View> 
                                <View style={[styles.maxbtn, { flexDirection: "row", alignItems: "center", gap: 2 }]}>
                                    <Image source={iconlogo} style={{ width: 25, height: 25, resizeMode: "contain" }} />
                                    <Text style={{ fontWeight: "500", color: "#000" }}>MGA</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.BuyPresRow}>
                        <Pressable style={styles.BuyButton}>
                            <Text style={styles.textBuyButton}>Buy</Text>
                        </Pressable>
                    </View>
                    <View style={styles.visacontainer}>
                        <Pressable style={[styles.displayflex,]}>
                            <View style={{flexDirection:'row', alignItems:'center',}}>
                              <View style={styles.dotrow}></View>
                              <View style={styles.tokenIcons}>
                                <Image source={mga} style={{width:80, resizeMode:'contain'}} />
                              </View>
                              <Text style={{color:'#fff', fontWeight:'500', fontSize:18}}>MGA</Text>
                            </View>
                            <View>
                              <Text style={{color:'#fff', fontWeight:'500', fontSize:18}}>0.15 MGA</Text>
                              <Image source={mastervisa} style={{width:80, resizeMode:'contain'}} />
                            </View>
                        </Pressable>
                        <View style={styles.line}></View>
                        <Pressable style={[styles.displayflex,]}>
                            <View style={{flexDirection:'row', alignItems:'center',}}>
                              <View style={[styles.dotrow, styles.bldot]}></View>
                              <View style={styles.tokenIcons}>
                                <Image source={mga} style={{width:80, resizeMode:'contain'}} />
                              </View>
                              <Text style={{color:'#fff', fontWeight:'500', fontSize:18}}>USDT</Text>
                            </View>
                            <View>
                              <Text style={{color:'#fff', fontWeight:'500', fontSize:18}}>0.15 MGA</Text>
                              <Image source={mastervisa} style={{width:80, resizeMode:'contain'}} />
                            </View>
                        </Pressable>
                    </View>
              </View> 
            ) : (
              <View style={styles.sellsecondrow}>
                  <View style={styles.FromRow}>
                        <View style={styles.displayflex}> 
                            <Text style={styles.textfron}>From</Text> 
                            <Text style={styles.textfron}>Bal: 100 USDT</Text> 
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, width: "100%", justifyContent: "space-between" }}>
                            <View style={{ width: "70%" }}>
                                <TextInput placeholder="0.10" placeholderTextColor="#000" style={styles.input} />
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 8, justifyContent: "flex-start" }}> 
                                <View style={[styles.maxbtn, { flexDirection: "row", alignItems: "center", gap: 2 }]}>
                                    <Image source={iconlogo} style={{ width: 25, height: 25, resizeMode: "contain" }} />
                                    <Text style={{ fontWeight: "500", color: "#000" }}>USDT</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.swapiconrow}></View>
                    <View style={styles.FromRow}>
                        <View style={styles.displayflex}> 
                            <Text style={styles.textfron}>To</Text> 
                            <Text style={styles.textfron}>Bal: 15 TRX</Text> 
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, width: "100%", justifyContent: "space-between" }}>
                            <View style={{ width: "70%" }}>
                                <TextInput placeholder="0.10" placeholderTextColor="#000" style={styles.input} />
                            </View>
                            <View> 
                                <View style={[styles.maxbtn, { flexDirection: "row", alignItems: "center", gap: 2 }]}>
                                    <Image source={iconlogo} style={{ width: 25, height: 25, resizeMode: "contain" }} />
                                    <Text style={{ fontWeight: "500", color: "#000" }}>MGA</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.BuyPresRow}>
                        <Pressable style={styles.BuyButton}>
                            <Text style={styles.textBuyButton}>Sell</Text>
                        </Pressable>
                    </View> 
              </View>
            ) }
 

              
            </View> 
        </ScrollView>
    );
};

export default BuySell;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff", 
    },
    Buycontainer: {
        paddingBottom: 15,
    },
    BuyText: {
        color: "#000",
        fontSize: 25,
        fontWeight: "500",
    },
    Buydisc: {
        color: "#000",
        paddingVertical: 10,
    },
    exchansenRow: {
        backgroundColor: "#1A1532",
        padding: 10,
        borderRadius: 12,
        marginBottom:50
    },
    buysellrow:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: 15,
      gap:10
    },
    buywallets:{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 12,
        width:'48%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'center',
        gap:10
    },
    sellwallets:{ 
      padding: 10,
      borderRadius: 12,
      width:'48%',
      borderWidth:1,
      borderColor:'#fff',
      flexDirection: "row",
      alignItems: "center",
      justifyContent:'center',
      gap:10
    },
    FromRow: {
        backgroundColor: "#E4082D",
        padding: 10,
        borderRadius: 12,
    },
    displayflex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 10,
    },
    textfron: {
        color: "#fff",
    },
    input: {
        borderRadius: 12,
        paddingHorizontal: 15,
        fontWeight: "500",
        backgroundColor: "#fff",
        width: "100%",
    },
    maxbtn: {
        backgroundColor: "#fff",
        paddingVertical: 13,
        paddingHorizontal: 10,
        borderRadius: 5, 
        height:45
    },
    swapiconrow:{
      paddingVertical:10
    },
    iconSwaps:{
      width: 45,
      height: 45,
      resizeMode: "contain",
      alignItems:'center',
      justifyContent:'center',
      margin:'auto'
    },
    BuyPresRow:{
        paddingTop:15,
        paddingBottom:10,
    },
    BuyButton:{
        padding:13,
        backgroundColor:'#E4082D',
        borderRadius:100
    },
    textBuyButton:{
        textAlign:'center',
        color:'#fff',
        fontSize:18,
    },
    visacontainer:{
      padding:10, 
      borderWidth:1,
      borderColor:'#fff',
      borderRadius:12
    },
    dotrow:{
      backgroundColor:'#E4082D',
      width:25,
      height:25,
      borderRadius:100,
      borderWidth:4,
      borderColor:'#fff'
    },
    bldot:{
      backgroundColor:'#24242C',  
    },
    line:{
      borderWidth:1,
      borderColor:'#999A9E',
      marginVertical:8
    }
});
