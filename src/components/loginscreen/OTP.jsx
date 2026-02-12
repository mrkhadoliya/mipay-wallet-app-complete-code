import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import passcord from '../../assets/images/Enter-OTP.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import success from '../../assets/images/success.png'

const OTP = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logocontainer}>
        <Image source={passcord} style={styles.passcordimg} />
      </View>
      <View style={styles.wlcmcontainer}>
        <Text style={styles.wlcmtext}>Enter your Passcode</Text>
        <Text style={styles.continuetext}>
          For the security of your account, please enter the security code
        </Text>
      </View>
      <View style={styles.textInputContainer}>
        <View style={styles.outinputview}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#ccc"
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#ccc"
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#ccc"
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#ccc"
            maxLength={1}
            keyboardType="numeric"
          />
        </View>
        <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
          <Pressable
            style={[styles.ResetButton]}
            activeOpacity={0.8}
            onPress={() => setModalVisible(true)}
            // onPress={() => navigation.navigate("sign up")}
          >
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 17,
                fontWeight: '500',
              }}>
              Submit
            </Text>
            <AntDesign name="right" size={20} color="#fff" />
          </Pressable>
        </View>

        <View>
          <Text style={styles.sign}>
            Didn't receive the code?{' '}
            <Text style={{color: '#E4082D', fontWeight: '600'}}>Resend</Text>{' '}
          </Text>
        </View>
      </View>

      {/* MODA AREA */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={{backgroundColor:'#000000CC', flex:1, alignItems:'center', justifyContent:'center', padding:15}}>
            <View style={styles.modalView}>
                <View>
                    <View style={{justifyContent:'center', alignItems:'center', paddingVertical:30}}>
                        <Image source={success} style={styles.successimage} />
                    </View>
                    <Text style={styles.Verification}>Verification Successfully</Text>
                </View>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="close" size={30} color="#fff" />
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1532',
    padding: 15,
  },
  logocontainer: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  passcordimg: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
  },
  wlcmcontainer: {
    paddingBottom: 20,
  },
  wlcmtext: {
    fontSize: 28,
    fontWeight: '500',
    color: '#fff',
    paddingBottom: 10,
    textAlign: 'center',
  },
  continuetext: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
  textInputContainer: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  outinputview: {
    paddingVertical: 15,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 15,
    fontWeight: '500',
    fontSize: 25,
    backgroundColor: '#1A1532',
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    width: '21%',
    color: '#fff',
    textAlign: 'center',
  },
  ResetButton: {
    paddingVertical: 13,
    width: '100%',
    backgroundColor: '#E4082D',
    borderTopEndRadius: 100,
    borderBottomEndRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 20,
  },
  sign: {
    textAlign: 'center',
    paddingVertical: 15,
    color: '#000',
    fontWeight: '500',
  },
  // Modal Css
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  modalView: {
    width: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent:'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position:'relative',
  },
  successimage:{
    width:150,
    height:150,
    alignItems:'center',
    justifyContent:'center',
    resizeMode:'contain'
  },
  Verification: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize:22,
    fontWeight:'600', 
    color:'#000'
  },
  buttonClose:{
    position:'absolute',
    top:-10,
    right:-10,
    backgroundColor:'#E4082D',
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
  }
});
