import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, StyleSheet, Pressable } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Exchange from "../components/homescreen/Exchange";
import BuySell from "../components/homescreen/BuySell";
import Wallet from "../components/homescreen/Wallet";
import Services from "../components/homescreen/Services";
import Settings from "../components/homescreen/Settings";
import News from "../components/homescreen/News";

// import userImage from '../assets/images/Rohit-Kumar-Saini-Front-End-Developer.jpg'
// import Chats from "../homescreen/Chats";
// import FilterIconModal from "../InnerScreen/filtermodal/FilterIconModal";


const CustomTabBarButton = ({ children, onPress }) => (
    <View
        style={{
            top: -35,
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#1A1532',
            borderWidth: 6,
            borderColor: '#fff',
            justifyContent: 'center',
            elevation:10
        }}>
            <TouchableOpacity activeOpacity={0.7}
                style={
                {
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            onPress={onPress}
        >

            <View
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: '#1A1532',
                    borderWidth: 6,
                    borderColor: '#ffffff'
                }}
            >
                {children}
            </View>
        </TouchableOpacity>
    </View>
)



const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <>
            <StatusBar backgroundColor="#1A1532" barStyle="default" />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Exchange") {
                            iconName = focused ? "swap-horizontal" : "swap-horizontal";
                        } else if (route.name === "BuySell") {
                            iconName = focused ? "card" : "card-outline";
                        } else if (route.name === "Wallet") {
                            iconName = focused ? "wallet-sharp" : "wallet-outline";
                        } else if (route.name === "News") {
                            iconName = focused ? "newspaper" : "newspaper-outline";
                        } else if (route.name === "Settings") {
                            iconName = focused ? "settings" : "settings-outline";
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "#E4082D",
                    tabBarInactiveTintColor: "#999A9E",
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                    headerTitleAlign:'center',
                    headerStyle: {
                        backgroundColor: "#1A1532"
                    },
                    headerTintColor: "#fff",
                    tabBarStyle: {
                        activeTinatColor: "#E4082D",
                        inactiveTintColor: "#999A9E",
                        showLabel: true,
                        backgroundColor: "#1A1532",
                        height: 65,
                        paddingBottom: 10,
                        // borderTopColor: "#ddd",
                    },
                    headerShown: false,
                    headerShadowVisible: false,
                    headerTitleStyle: { fontSize: 18 },
                })}
            >
                <Tab.Screen
                    name="Exchange"
                    options={{
                        headerShown: true,
                        headerTitle: true,
                        backTitle: null,
                        headerTitleAlign:'center',
                        // headerRight: () => (
                        //     <View style={{ position: "relative", right: 15 }}>
                        //         {/* <FilterIconModal/>  */}
                        //         <FontAwesome name="bars" style={{ fontSize: 20 }} color="#fff" />
                        //     </View>
                        // ),
                        // headerTitleStyle: {
                        //     display: "none",
                        // },
                    }}
                >
                    {(props) => <Exchange {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="BuySell"
                    options={{
                        title: "Buy/Sell",
                        headerShown: true,
                        // headerRight: () => (
                        //     <View style={{ position: "relative", right: 15 }}>
                        //         <Pressable>
                        //             <Feather name="search" style={{ fontSize: 20 }} color="#fff" />
                        //         </Pressable>
                        //     </View>
                        // ),
                    }}
                >
                    {(props) => <BuySell {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Wallet" 
                    options={({navigation}) => ({
                        tabBarShowLabel: true,
                        title: "Wallet",
                        headerShown: true,
                        headerLeft: () => (
                            <View
                                style={{
                                    position: "relative",
                                    left: 15, 
                                }}
                            > 
                                    <Ionicons name="scan-sharp" style={{ fontSize: 20 }} color="#fff" /> 
                            </View>
                        ),
                        
                        headerRight: () => (
                            <View style={{ position: "relative", right: 15 }} > 
                                <Ionicons name="add-circle-outline" style={{ fontSize: 25 }} color="#fff" onPress={() => navigation.navigate('addtoken') } />
                            </View>
                        ),

                        tabBarIcon: ({ focused }) => (
                            <View style={styles.IconView}>
                                    <Ionicons name='wallet-sharp' size={30} color='#fff' style={{top:6,color:focused?"#E4082D":"#fff"}} />
                                {/* <Text style={{ color: focused ? '#FFC727' : '#FFFFFF', fontSize: 12 }}>Wallet</Text> */}
                            </View>
    
    
                        ),
                        tabBarButton: (props) => (
                            <CustomTabBarButton {...props} />
                        ), 
                    })}
                >
                    {(props) => <Wallet {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="News"
                    options={({ navigation }) => ({
                        title: "News",
                        headerShown: true,
                        // headerRight: () => (
                        //     <View style={{ position: "relative", right: 15 }}>
                        //         <FontAwesome onPress={() => navigation.navigate("Contacts")} name="edit" style={{ fontSize: 20 }} color="#fff" />
                        //     </View>
                        // ),
                    })}
                >
                    {(props) => <News {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Settings"
                    options={({ navigation }) => ({
                        title: "Settings",
                        headerShown: false,
                        headerRight: () => (
                            <View style={{ right: 8 }}>
                                <Pressable>
                                    <Feather name="more-vertical" style={{ fontSize: 25 }} color="#fff" />
                                </Pressable>
                            </View>
                        ),
                    })}
                >
                    {(props) => <Settings {...props} />}
                </Tab.Screen>
            </Tab.Navigator>
        </>
    );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
    Tabs: {
        height: 200
    },
    IconView: {
        alignItems: 'center', justifyContent: 'center'
    }
})