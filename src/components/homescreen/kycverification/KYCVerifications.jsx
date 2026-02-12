import {StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable} from 'react-native';
import React from 'react';
import panimg from '../../../assets/images/pancard.png'
import Selfie from '../../../assets/images/Selfie.png'

const KYCVerifications = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.kycHeading}>KYC Verifications</Text>
      <View style={styles.kyccontainer}>
        <View style={styles.outinputview}>
          <View style={styles.lableouter}>
            <Text style={styles.lable}>Full Name</Text>
          </View>
          <TextInput style={styles.input} placeholder="Enter your Full Name" />
        </View>
        <View style={styles.outinputview}>
          <View style={styles.lableouter}>
            <Text style={styles.lable}>Date of Birth </Text>
          </View>
          <TextInput style={styles.input} placeholder="DOB" />
        </View>
        <View style={styles.outinputview}>
          <View style={styles.lableouter}>
            <Text style={styles.lable}>Address</Text>
          </View>
          <TextInput style={styles.input} placeholder="" />
        </View>
        <View>
          <Text style={styles.goverTExt}>Govt. ID Upload</Text>
          <Image source={panimg} style={styles.PanImage} />
        </View>
        <View>
          <Text style={styles.goverTExt}>Selfie Photo Upload</Text>
          <Image source={Selfie} style={styles.PanImage} />
        </View>
        <View style={{paddingVertical:10}}>
            <Pressable style={styles.uploadButton}> 
                <Text style={{color:'#fff', fontSize:18}}>Upload</Text>
            </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default KYCVerifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  kycHeading: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    paddingBottom: 15,
  },
  kyccontainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    padding: 10,
    marginBottom:40
  },
  outinputview: {
    paddingVertical: 15,
    position: 'relative',
  },
  lableouter: {
    position: 'absolute',
    left: 20,
    top: 5,
    zIndex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  lable: {
    fontWeight: '500',
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    fontWeight: '500',
  },
  goverTExt: { 
    fontWeight: '500',
    paddingVertical:10,
  },
  PanImage:{
    width:'100%',
    height:180,
    resizeMode:'contain'
  },
  uploadButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:10,
    backgroundColor:'#E4082D',
    padding:12,
    borderRadius:100,
  }
});
