import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React, { useState } from "react";  
import {Picker} from '@react-native-picker/picker'; 

const TopUp = ({navigation}) => { 
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.kycrow}>
                <View style={{ paddingTop: 15 }}> 
                    <View style={styles.paddingBottomView}>
                        <Text style={[styles.menuText, {paddingBottom:10}]}>From</Text> 
                            <View>
                            <Picker  
                                style={styles.textinput}
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedLanguage(itemValue)
                                    }>
                                    <Picker.Item label="Money" value="Money" color='#393246' />
                                    <Picker.Item label="Ariary" value="Ariary" />
                                </Picker>
                            </View> 
                        </View>
                        <View style={styles.paddingBottomView}>
                            <Text style={[styles.menuText, {paddingBottom:10}]}>Amount</Text>
                            <View style={styles.dFlex}>
                                <View style={{width:'40%'}}>
                                <Picker  
                                    style={[styles.textinput,{borderRadius:12}]}
                                        selectedValue={selectedLanguage}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedLanguage(itemValue)
                                        }>
                                        <Picker.Item label="MGA" value="MGA" color='#393246' />
                                        <Picker.Item label="BNB" value="BNB" />
                                    </Picker>
                                </View>
                                <View style={{width:'60%', position:'relative'}}>
                                    <TextInput style={styles.textinput} placeholder="25000" /> 
                                </View>
                            </View>
                        </View> 
                        <View style={{paddingTop:20}}> 
                        <Pressable style={styles.reviewBtn} onPress={() => navigation.navigate("topupdetail")}>
                            <Text style={{textAlign:'center', fontSize:18, fontWeight:'500' ,color:'#fff'}}>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default TopUp;

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
    paddingBottomView:{
        paddingBottom:15
    },
    textinput:{
        width:'100%',
        backgroundColor: "#F5F5F5",
        borderWidth:1,
        borderColor:'#0000001a',
        borderRadius:12,
        paddingHorizontal:15
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
 reviewBtn:{
    backgroundColor:'#E4082D',
    width:'100%',
    padding:12, 
    borderRadius:50, 
  }
});
