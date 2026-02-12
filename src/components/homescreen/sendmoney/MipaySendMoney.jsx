import { StyleSheet, Text, View, Pressable, TextInput, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons"; 
import Textarea from 'react-native-textarea'  
import {Picker} from '@react-native-picker/picker';
import mga from '../../../assets/icons/MGA.png'

const MipaySendMoney = ({navigation}) => { 
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.kycrow}>
                <View style={{ paddingTop: 15 }}> 
                     <View style={styles.paddingBottomView}>
                        <Text style={[styles.menuText, {paddingBottom:10}]}>Amount</Text>
                        <View style={styles.dFlex}>
                            <View style={{width:'40%'}}>
                            <Picker  
                                style={styles.textinput}
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedLanguage(itemValue)
                                    }>
                                    <Picker.Item label="Ariary" value="Ariary" color='#393246' />
                                    <Picker.Item label="Ariary" value="Ariary" />
                                </Picker>
                            </View>
                            <View style={{width:'60%', position:'relative'}}>
                                <TextInput style={styles.textinput} />
                                <Pressable style={[styles.scanIcons, {left:1}]}>
                                    <Image source={mga} style={{width:30, resizeMode:'contain', height:30}} />
                                </Pressable>
                            </View>
                        </View>
                     </View>
                     <View style={styles.paddingBottomView}>
                        <Text style={[styles.menuText, {paddingBottom:10}]}>Mipay Wallet Id</Text>
                         <View style={{position:'relative'}}>
                            <TextInput style={styles.textinput} />
                            <Pressable style={styles.scanIcons}>
                                <Ionicons name="scan-outline" size={25}  />
                            </Pressable>
                        </View> 
                     </View>
                     <View style={styles.paddingBottomView}>
                        <Text style={[styles.menuText, {paddingBottom:10}]}>Passcode</Text>
                        <View style={{position:'relative'}}>
                            <TextInput style={styles.textinput} />
                            <Pressable style={styles.scanIcons}>
                                <Ionicons name="eye-outline" size={25}  />
                            </Pressable>
                        </View> 
                     </View>
                     <View>
                        <Text style={[styles.menuText, {paddingBottom:10}]}>Message</Text>
                        <Textarea
                            containerStyle={styles.textareaContainer}
                            style={styles.textarea}
                            onChangeText={this.onChange}
                            defaultValue={this.state.text}
                            maxLength={80} 
                            placeholderTextColor={'#000'}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                     <View style={{paddingTop:20}}> 
                        <Pressable style={styles.reviewBtn} onPress={() => navigation.navigate("Mipay Send Money")}>
                            <Text style={{textAlign:'center', fontSize:18, fontWeight:'500' ,color:'#fff'}}>Submit</Text>
                        </Pressable>
                     </View>
                </View>
            </View>
        </View>
    );
};

export default MipaySendMoney;

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
  textareaContainer: {
    height: 150,
    padding: 5,
    backgroundColor: '#F5F5F5',
    borderRadius:12,
    borderWidth:1,
    borderColor:'#0000001a'
  },
  textarea: {
    textAlignVertical: 'top', 
    height: 150,
    fontSize: 14,
    color: '#000',
  },
  scanIcons:{
    position:'absolute',
    right:0,
    top:0,
    bottom:0,
    flexDirection:'row',
    alignItems:'center',
    padding:13
  }, reviewBtn:{
    backgroundColor:'#E4082D',
    width:'100%',
    padding:12, 
    borderRadius:50, 
  }
});
