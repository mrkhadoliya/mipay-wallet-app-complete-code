import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'  

const TransactionHistory = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
         
            <View style={[styles.flexDirection, {padding:10, backgroundColor:'#E4082D', borderTopLeftRadius:12, borderTopRightRadius:12}]}>
                <View>
                    <Text style={{color:'#fff', fontWeight:'500', fontSize:18}}>Date: 21-07-2023  6:10:32 PM</Text>
                </View>
            </View>
            <View style={[styles.mainContainer, { borderTopLeftRadius:0, borderTopRightRadius:0}]}>
                <View style={[styles.flexDirection, {paddingBottom:10}]}>
                    <View>
                        <Text style={styles.heading}>Address</Text>
                    </View>
                    <View>
                        <Text style={styles.deatils}>0xa2959eFdd</Text>
                    </View>
                </View>
                <View style={[styles.flexDirection, {paddingBottom:10}]}>
                    <View>
                        <Text style={styles.heading}>Amount MGA</Text>
                    </View>
                    <View>
                        <Text style={styles.deatils}>10.00</Text>
                    </View>
                </View>
                <View style={[styles.flexDirection, {paddingBottom:10}]}>
                    <View>
                        <Text style={styles.heading}>Tokens</Text>
                    </View>
                    <View>
                        <Text style={styles.deatils}>0.212</Text>
                    </View>
                </View>
                <View style={[styles.flexDirection, {paddingBottom:10}]}>
                    <View>
                        <Text style={styles.heading}>Hash</Text>
                    </View>
                    <View>
                        <Text style={styles.deatils}>0xa2959eFdd....59eFdd</Text>
                    </View>
                </View>
                <View style={[styles.flexDirection, {paddingBottom:10}]}>
                    <View>
                        <Text style={styles.heading}>Token Type</Text>
                    </View>
                    <View>
                        <Text style={styles.deatils}>MGA</Text>
                    </View>
                </View>
                <View style={[styles.flexDirection, {paddingBottom:10}]}>
                    <View>
                        <Text style={styles.heading}>Date</Text>
                    </View>
                    <View>
                        <Text style={styles.deatils}>21-07-2023</Text>
                    </View>
                </View>
                <View style={[styles.flexDirection, {paddingBottom:10}]}>
                    <View>
                        <Text style={styles.heading}>Status</Text>
                    </View>
                    <View>
                        <Text style={[styles.deatils, {color:'#008726', fontSize:20}]}>Deposit</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default TransactionHistory

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1,
        backgroundColor:'#fff'
    },
    mainContainer:{ 
        paddingVertical: 12,
        backgroundColor:'#F5F5F5',
        marginBottom:10,
        paddingHorizontal:10,
        borderRadius:8
    },
    flexDirection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    heading:{
        fontSize:16,
        fontWeight:'500',
        color:'#000'
    },
    deatils:{
        fontSize:16,
        fontWeight:'400',
    },
})