import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React from "react"; 

const Quieres = ({ navigation }) => { 

    return (
        <View style={styles.container}>
            <View style={styles.kycrow}>
                <View style={{ paddingTop: 15 }}> 
                    <View style={styles.paddingBottomView}>
                        <Text style={[styles.menuText, { paddingBottom: 10 }]}>Title</Text>
                        <View>
                            <TextInput style={styles.textinput} />
                        </View>
                    </View>
                    <View style={styles.paddingBottomView}>
                        <Text style={[styles.menuText, { paddingBottom: 10 }]}>Description</Text>
                        <View>
                            <TextInput style={styles.textinput} />
                        </View>
                    </View>
                    <View style={styles.paddingBottomView}>
                        <Text style={[styles.menuText, { paddingBottom: 10 }]}>Attachment</Text>
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

export default Quieres;

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
