import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import share from "../../assets/icons/shares.png";
import Rectangle from "../../assets/images/Rectangle.png";
import Ionicons from "react-native-vector-icons/Ionicons";

const News = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <Text>News</Text> */}
            <View style={styles.rowbtnscr}>
                <ScrollView horizontal>
                    <View style={styles.pressblebtn}>
                        <Pressable style={styles.buttons}>
                            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>Health</Text>
                        </Pressable>
                        <Pressable style={styles.buttons}>
                            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>Economy</Text>
                        </Pressable>
                        <Pressable style={styles.buttons}>
                            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>Jewellry</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
            <ScrollView style={styles.newsContainer}>
                <View style={styles.mainRowScrollView}>
                    <View style={styles.flexDirection}>
                        <View>
                            <Pressable style={[styles.buttons, { borderRadius: 8 }]}>
                                <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>Health</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable>
                                <Image source={share} style={{ width: 40, height: 40, resizeMode: "contain" }} />
                            </Pressable>
                        </View>
                    </View>
                    <Pressable onPress={() => navigation.navigate("newsdetails")}>
                        <Image source={Rectangle} style={{ width: "100%", height: 200, resizeMode: "contain" }} />
                    </Pressable>
                    <View style={styles.flexDirection}>
                        <View style={[styles.flexDirection, { justifyContent: "flex-start", gap: 8 }]}>
                            <Ionicons name="calendar" size={22} color="#E4082D" />
                            <Text style={styles.timeDate}>21 July 2023</Text>
                        </View>
                        <View style={[styles.flexDirection, { justifyContent: "flex-start", gap: 8 }]}>
                            <Ionicons name="time" size={22} color="#E4082D" />
                            <Text style={styles.timeDate}>03:02 PM</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={styles.mainTitle}>China admits hude number of deaths due to COVID</Text>
                        <Text style={styles.mainsubdiscartions}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make book.
                        </Text>
                    </View>
                </View>
                <View style={styles.mainRowScrollView}>
                    <View style={styles.flexDirection}>
                        <View>
                            <Pressable style={[styles.buttons, { borderRadius: 8 }]}>
                                <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>Health</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable>
                                <Image source={share} style={{ width: 40, height: 40, resizeMode: "contain" }} />
                            </Pressable>
                        </View>
                    </View>
                    <Pressable>
                        <Image source={Rectangle} style={{ width: "100%", height: 200, resizeMode: "contain" }} />
                    </Pressable>
                    <View style={styles.flexDirection}>
                        <View style={[styles.flexDirection, { justifyContent: "flex-start", gap: 8 }]}>
                            <Ionicons name="calendar" size={22} color="#E4082D" />
                            <Text style={styles.timeDate}>21 July 2023</Text>
                        </View>
                        <View style={[styles.flexDirection, { justifyContent: "flex-start", gap: 8 }]}>
                            <Ionicons name="time" size={22} color="#E4082D" />
                            <Text style={styles.timeDate}>03:02 PM</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={styles.mainTitle}>China admits hude number of deaths due to COVID</Text>
                        <Text style={styles.mainsubdiscartions}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make book.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default News;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    rowbtnscr: {
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    pressblebtn: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    buttons: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        // borderWidth:2,
        // borderColor:'#000',
        backgroundColor: "#E4082D",
        borderRadius: 100,
    },
    newsContainer: {
        padding: 10,
    },
    mainRowScrollView: {
        marginBottom: 15,
        backgroundColor: "#F5F5F5",
        padding: 5,
        borderRadius: 12,
    },
    flexDirection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    timeDate: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000",
    },
    mainTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000",
        paddingBottom: 10,
    },
});
