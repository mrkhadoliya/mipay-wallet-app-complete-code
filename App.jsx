import React, { useEffect } from "react";
import { View } from "react-native";
import { Platform, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LoadingSplash from "./src/components/loginscreen/LoadingSplash";
import Login from "./src/components/loginscreen/Index";
import LoginMain from "./src/components/loginscreen/LoginMain";
import SignUp from "./src/components/loginscreen/SignUp";
import SplashScreen from "react-native-splash-screen";
import MainSplash from "./src/components/splashscreen/MainSplash";
import ForgotPassword from "./src/components/loginscreen/ForgotPassword";
import OTP from "./src/components/loginscreen/OTP";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";
import LatestActivity from "./src/components/homescreen/exchangeitem/LatestActivity";
import Receive from "./src/components/homescreen/exchangeitem/Receive";
import HistoryRS from "./src/components/homescreen/exchangeitem/history/HistoryRS";
import SendToken from "./src/components/homescreen/exchangeitem/SendToken";
import KYCVerifications from "./src/components/homescreen/kycverification/KYCVerifications";
import AccountDetails from "./src/components/homescreen/accountdetail/AccountDetails";
import Notifications from "./src/components/homescreen/notification/Notifications";
import Transactions from "./src/components/homescreen/transaction/Transactions";
import Languages from "./src/components/homescreen/language/Languages";
import AddTokens from "./src/components/homescreen/addtoken/AddTokens";
import TokenBalance from "./src/components/homescreen/addtoken/TokenBalance";
import Ratings from "./src/components/homescreen/rating/Ratings";
import SendMoney from "./src/components/homescreen/sendmoney/SendMoney";
import MipaySendMoney from "./src/components/homescreen/sendmoney/MipaySendMoney";
import MobileMoneyAccount from "./src/components/homescreen/sendmoney/MobileMoneyAccount";
import NewsDetail from "./src/components/homescreen/newsd/NewsDetail";
import Services from "./src/components/homescreen/Services";
import TopsUp from "./src/components/homescreen/TopUps/TopsUp"; 
// import TopUpsDetail from "./src/components/homescreen/topups/TopUpsDetail";
import TransactionHistory from "./src/components/homescreen/exchangeitem/history/TransactionHistory";
import Quieres from "./src/components/homescreen/quieres/Quieres";

const Stack = createNativeStackNavigator();

const App = (props) => {
    const { navigation } = props;

    useEffect(() => {
        if (Platform.OS === "android") SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#141113" />
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    // headerShown: false,
                    headerStyle: { backgroundColor: "#1A1532" },
                    headerTintColor: "#fff",
                    headerBackTitleVisible: false,
                    headerTitleAlign: "center",
                    headerTransparent: ArrayBuffer,
                    headerShadowVisible: false,
                    headerTitleStyle: { fontSize: 16 },
                }}
            >
                <Stack.Screen name="loading splash" options={{ headerShown: false }}>
                    {(props) => <MainSplash {...props} />}
                </Stack.Screen>
                <Stack.Screen name="login screen" options={{ headerShown: false }}>
                    {(props) => <Login {...props} />}
                </Stack.Screen>
                <Stack.Screen name="login main" options={{ headerShown: false }}>
                    {(props) => <LoginMain {...props} />}
                </Stack.Screen>
                <Stack.Screen name="sign up" options={{ headerShown: false }}>
                    {(props) => <SignUp {...props} />}
                </Stack.Screen>
                <Stack.Screen name="forget password" options={{ headerShown: false }}>
                    {(props) => <ForgotPassword {...props} />}
                </Stack.Screen>
                <Stack.Screen name="otp" options={{ headerShown: false }}>
                    {(props) => <OTP {...props} />}
                </Stack.Screen>

                {/* MAIN SCREEN WORK START AREA */}

                <Stack.Screen name="home" options={{ headerShown: false }}>
                    {(props) => <BottomTabNavigation {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="latest activity"
                    options={{
                        headerShown: true,
                        title: "Latest Activity",
                        headerRight: () => (
                            <View>
                                {/* <FilterIconModal/>  */}
                                <FontAwesome name="bars" style={{ fontSize: 20 }} color="#fff" />
                            </View>
                        ),
                    }}
                >
                    {(props) => <LatestActivity {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="receive"
                    options={{
                        headerShown: true,
                        title: "Receive",
                        headerRight: () => (
                            <View>
                                {/* <FilterIconModal/>  */}
                                <FontAwesome name="bars" style={{ fontSize: 20 }} color="#fff" />
                            </View>
                        ),
                    }}
                >
                    {(props) => <Receive {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="history"
                    options={{
                        headerShown: true,
                        title: "History Receive/Send",
                    }}
                >
                    {(props) => <HistoryRS {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="service"
                    options={{
                        headerShown: true,
                        title: "Support",
                    }}
                >
                    {(props) => <Services {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="send"
                    options={{
                        headerShown: true,
                        title: "Send Token",
                    }}
                >
                    {(props) => <SendToken {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="kyc"
                    options={{
                        headerShown: true,
                        title: "KYC Verification",
                    }}
                >
                    {(props) => <KYCVerifications {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="accouunt"
                    options={{
                        headerShown: true,
                        title: "Account Details",
                    }}
                >
                    {(props) => <AccountDetails {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="notifications"
                    options={{
                        headerShown: true,
                        title: "Notifications",
                    }}
                >
                    {(props) => <Notifications {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="transaction"
                    options={{
                        headerShown: true,
                        title: "Transactions",
                    }}
                >
                    {(props) => <Transactions {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="language"
                    options={{
                        headerShown: true,
                        title: "Languages",
                    }}
                >
                    {(props) => <Languages {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name="addtoken"
                    options={{
                        headerShown: true,
                        title: "Add Tokens",
                    }}
                >
                    {(props) => <AddTokens {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name="tokenblance"
                    options={{
                        headerShown: true,
                        title: "Token Balance",
                    }}
                >
                    {(props) => <TokenBalance {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name="rating"
                    options={{
                        headerShown: true,
                        title: "Rating our App",
                    }}
                >
                    {(props) => <Ratings {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name="send money"
                    options={{
                        headerShown: true,
                        title: "Send Money",
                    }}
                >
                    {(props) => <SendMoney {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name="Mipay Send Money"
                    options={{
                        headerShown: true,
                        title: "Mipay Send Money",
                    }}
                >
                    {(props) => <MipaySendMoney {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name="mobile money account"
                    options={{
                        headerShown: true,
                        title: "Mobile Money Account",
                    }}
                >
                    {(props) => <MobileMoneyAccount {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    name="newsdetails"
                    options={{
                        headerShown: true,
                        title: "News Deatils",
                    }}
                >
                    {(props) => <NewsDetail {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="topsup"
                    options={{
                        headerShown: true,
                        title: "Top Up",
                    }}
                >
                    {(props) => <TopsUp {...props} />}
                </Stack.Screen>

                {/* <Stack.Screen
                    name="topupdetail"
                    options={{
                        headerShown: true,
                        title: "Top Up",
                    }}
                >
                    {(props) => <TopUpsDetail {...props} />}
                </Stack.Screen> */}
                <Stack.Screen
                    name="transactionhistory"
                    options={{
                        headerShown: true,
                        title: "MGA Transaction History",
                    }}
                >
                    {(props) => <TransactionHistory {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="quieres"
                    options={{
                        headerShown: true,
                        title: "Quieres",
                    }}
                >
                    {(props) => <Quieres {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
