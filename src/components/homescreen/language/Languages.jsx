import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import english from '../../../assets/icons/english-icon.png'
import french from '../../../assets/icons/french.png' 

const Transactions = () => {
 
    return (
        <View style={styles.container}>
            <View style={styles.kycrow}>
                <View style={{ paddingTop: 15 }}> 
                    <Pressable style={styles.buttonsMenu}>
                        <View style={styles.dFlex}>
                            <Image source={english} style={{width:35, height:35, resizeMode:'contain'}} />
                            <Text style={styles.menuText}>English</Text>
                        </View>
                        <View>
                            <Ionicons name="checkmark-outline" size={25} color="#000" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.buttonsMenu}>
                        <View style={styles.dFlex}>
                            <Image source={french} style={{width:35, height:35, resizeMode:'contain'}} />
                            <Text style={styles.menuText}>French</Text>
                        </View>
                        <View>
                            {/* <Ionicons name="checkmark-outline" size={25} color="#000" /> */}
                        </View>
                    </Pressable>
                     
                </View>
            </View>
        </View>
    );
};

export default Transactions;

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
        paddingVertical: 12,
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
