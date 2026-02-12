import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons"; 

const SendMoney = ({navigation}) => {
 
    return (
        <View style={styles.container}>
            <View style={styles.kycrow}>
                <View style={{ paddingTop: 15 }}> 
                    <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("Mipay Send Money")}>
                        <View>
                            <Text style={styles.menuText}>To another MiPay Wallet</Text>
                        </View>
                        <View>
                            <Ionicons name='chevron-forward-outline' size={25}  />
                        </View>
                    </Pressable>
                    <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("mobile money account")}>
                        <View>
                            <Text style={styles.menuText}>To a Mobile Money account</Text>
                        </View>
                        <View>
                            <Ionicons name='chevron-forward-outline' size={25}  />
                        </View>
                    </Pressable>
                     
                </View>
            </View>
        </View>
    );
};

export default SendMoney;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1532",
    }, 
    kycrow: {
        padding: 15,
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }, 
    buttonsMenu: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 13,
        backgroundColor: "#F5F5F5",
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    Dflex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    dFlex: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    }, 
    menuText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "500",
    },
});
