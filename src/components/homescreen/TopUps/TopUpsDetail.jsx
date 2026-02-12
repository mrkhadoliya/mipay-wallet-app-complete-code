import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React from "react"; 

const TopUpsDetail = ({ navigation }) => { 

    return (
        <View style={styles.container}>
            <View style={styles.kycrow}>
                <View style={{ paddingTop: 15 }}>
                    <View style={{paddingVertical:15}}>
                        <Text style={styles.transaction}>Please perform the following transaction from Mvola:</Text>
                        <Text style={styles.transaction}>Transaction: Transfer</Text>
                        <Text style={styles.transaction}>To the Number: 0</Text>
                        <Text style={styles.transaction}>To the Name: Raj</Text>
                        <Text style={styles.transaction}>Amount: 25000 MGA</Text>
                        <Text style={styles.transaction}>Once the transaction has been completed, complete the form below and click on "Continue"</Text>
                    </View>
                    <View style={styles.paddingBottomView}>
                        <Text style={[styles.menuText, { paddingBottom: 10 }]}>Sender Number</Text>
                        <View>
                            <TextInput style={styles.textinput} />
                        </View>
                    </View>
                    <View style={styles.paddingBottomView}>
                        <Text style={[styles.menuText, { paddingBottom: 10 }]}>Transaction ID</Text>
                        <View>
                            <TextInput style={styles.textinput} />
                        </View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Pressable style={styles.reviewBtn} onPress={() => navigation.navigate("Mipay Send Money")}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontSize: 18,
                                    fontWeight: "500",
                                    color: "#fff",
                                }}
                            >
                                Submit
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default TopUpsDetail;

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
    paddingBottomView: {
        paddingBottom: 10,
    },
    transaction:{
        fontSize:18,
        color:'#000',
        paddingBottom:10
    },
    textinput: {
        width: "100%",
        backgroundColor: "#F5F5F5",
        borderWidth: 1,
        borderColor: "#0000001a",
        borderRadius: 12,
        paddingHorizontal: 15,
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
    reviewBtn: {
        backgroundColor: "#E4082D",
        width: "100%",
        padding: 12,
        borderRadius: 50,
    },
});
