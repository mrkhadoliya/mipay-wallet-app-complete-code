import { StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";
import React from "react";
import iconlogo from "../../assets/images/mipay-wallet-logo.png";
import swapimg from "../../assets/images/swap-icon.png";

const Exchange = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Exchangecontainer}>
                <Text style={styles.ExchangeText}>Exchange</Text>
                <Text style={styles.Exchangedisc}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
            </View>
            <View style={styles.exchansenRow}>
                <View style={styles.FromRow}>
                    <View style={styles.displayflex}> 
                        <Text style={styles.textfron}>From</Text> 
                        <Text style={styles.textfron}>Bal: 100 USDT</Text> 
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8, width: "100%", justifyContent: "space-between" }}>
                        <View style={{ width: "50%" }}>
                            <TextInput placeholder="0.10" placeholderTextColor="#000" style={styles.input} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, justifyContent: "flex-start" }}>
                            <View>
                                <Pressable style={styles.maxbtn}>
                                    <Text style={{ fontWeight: "500", color: "#000" }}>MAX</Text>
                                </Pressable>
                            </View>
                            <View style={[styles.maxbtn, { flexDirection: "row", alignItems: "center", gap: 2 }]}>
                                <Image source={iconlogo} style={{ width: 25, height: 25, resizeMode: "contain" }} />
                                <Text style={{ fontWeight: "500", color: "#000" }}>MGA</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.swapiconrow}>
                    <Pressable style={{alignItems:'center'}}>
                      <Image source={swapimg} style={styles.iconSwaps} />
                    </Pressable>
                </View>
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
                <View style={styles.ExchangePresRow}>
                    <Pressable style={styles.ExchangeButton}>
                        <Text style={styles.textExchangeButton}>Exchange</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Exchange;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#fff",
    },
    Exchangecontainer: {
        paddingBottom: 20,
    },
    ExchangeText: {
        color: "#000",
        fontSize: 25,
        fontWeight: "500",
    },
    Exchangedisc: {
        color: "#000",
        paddingVertical: 10,
    },
    exchansenRow: {
        backgroundColor: "#1A1532",
        padding: 10,
        borderRadius: 12,
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
      paddingVertical:20
    },
    iconSwaps:{
      width: 45,
      height: 45,
      resizeMode: "contain",
      alignItems:'center',
      justifyContent:'center',
      margin:'auto'
    },
    ExchangePresRow:{
        paddingTop:15,
        paddingBottom:10,
    },
    ExchangeButton:{
        padding:13,
        backgroundColor:'#E4082D',
        borderRadius:100
    },
    textExchangeButton:{
        textAlign:'center',
        color:'#fff',
        fontSize:18,
    },
});
