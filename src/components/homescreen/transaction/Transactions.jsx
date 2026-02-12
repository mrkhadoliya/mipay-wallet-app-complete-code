import { StyleSheet, Text, View, Pressable, Switch, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MGA from '../../../assets/icons/MGA.png'
import USDT from '../../../assets/icons/usdt.png'
import BNB from '../../../assets/icons/binance.png'
import TRX from '../../../assets/icons/tron-trx-logo.png'

const Transactions = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.kycrow}>
                <View style={{ paddingTop: 15 }}>
                    <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("")}>
                        <View style={{ width: "80%" }}>
                            <Text style={styles.menuText}>Allow transaction Notifications from this wallet</Text>
                        </View>
                        <View>
                            <Switch trackColor={{ false: "#1A1532", true: "#2D991B" }} thumbColor={isEnabled ? "#2D991B" : "#f4f3f4"} ios_backgroundColor="#1A1532" onValueChange={toggleSwitch} value={isEnabled} />
                        </View>
                    </Pressable>
                    <View>
                        <Text style={styles.mainheading}>Options</Text>
                    </View>
                    <Pressable style={styles.buttonsMenu}>
                        <View style={styles.dFlex}>
                            <Image source={MGA} style={{width:35, height:35, resizeMode:'contain'}} />
                            <Text style={styles.menuText}>MGA</Text>
                        </View>
                        <View>
                            <Switch trackColor={{ false: "#1A1532", true: "#2D991B" }} thumbColor={isEnabled ? "#2D991B" : "#f4f3f4"} ios_backgroundColor="#1A1532" onValueChange={toggleSwitch} value={isEnabled} />
                        </View>
                    </Pressable>
                    <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("")}>
                        <View style={styles.dFlex}>
                            <Image source={USDT} style={{width:35, height:35, resizeMode:'contain'}} />
                            <Text style={styles.menuText}>USDT</Text>
                        </View>
                        <View>
                        <Switch trackColor={{ false: "#1A1532", true: "#2D991B" }} thumbColor={isEnabled ? "#2D991B" : "#f4f3f4"} ios_backgroundColor="#1A1532" onValueChange={toggleSwitch} value={isEnabled} />
                        </View>
                    </Pressable>
                    <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("")}>
                        <View style={styles.dFlex}>
                            <Image source={BNB} style={{width:35, height:35, resizeMode:'contain'}} />
                            <Text style={styles.menuText}>Binance-pre BUSD</Text>
                        </View>
                        <View>
                        <Switch trackColor={{ false: "#1A1532", true: "#2D991B" }} thumbColor={isEnabled ? "#2D991B" : "#f4f3f4"} ios_backgroundColor="#1A1532" onValueChange={toggleSwitch} value={isEnabled} />
                        </View>
                    </Pressable>
                    <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("")}>
                        <View style={styles.dFlex}>
                            <Image source={TRX} style={{width:35, height:35, resizeMode:'contain'}} />
                            <Text style={styles.menuText}>TRX</Text>
                        </View>
                        <View>
                        <Switch trackColor={{ false: "#1A1532", true: "#2D991B" }} thumbColor={isEnabled ? "#2D991B" : "#f4f3f4"} ios_backgroundColor="#1A1532" onValueChange={toggleSwitch} value={isEnabled} />
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
    mainheading: {
        color: "#000",
        fontSize: 17,
        fontWeight: "500",
        paddingBottom:20
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
