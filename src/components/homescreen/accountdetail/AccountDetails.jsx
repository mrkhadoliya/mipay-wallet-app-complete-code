import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import editicon from '../../../assets/icons/edit.png'
import usericon from '../../../assets/icons/Account.png'
import share from '../../../assets/icons/share.png'

const AccountDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainheading}>Account Settings</Text>
      <View style={styles.kycrow}>
        <View style={[styles.Dflex, styles.bgColor]}>
            <View>
              <Text style={styles.Verification}>KYC Verification</Text>
            </View>
            <View>
              <Pressable>
                <Text style={styles.Verify}>
                  Verify
                </Text>
              </Pressable>
            </View>
        </View>
        <View style={[styles.Dflex, styles.bgColor]}>
            <View style={styles.dFlex}>
                <Image source={usericon} style={{width:35, height:35, resizeMode:'contain'}} />
                <Text style={styles.Verification}>abcdev@gmail.com</Text>
            </View>
            <View>
              <Pressable>
                <Image source={editicon} style={{width:35, height:35, resizeMode:'contain'}} />
              </Pressable>
            </View>
        </View>
        <View>
          <Text style={styles.Referral}>Referral Code</Text>
          <View style={[styles.Dflex,]}>
              <View> 
                  <Text style={[styles.Verification, styles.codebg]}>3A150F255G25T</Text>
              </View>
              <View>
                <Pressable>
                  <Image source={share} style={{width:35, height:35, resizeMode:'contain'}} />
                </Pressable>
              </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default AccountDetails;

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:'#fff',
    padding:15
  },
  mainheading:{
    color:'#000',
    fontSize:22,
    fontWeight:'500'
  },
  kycrow:{
    paddingVertical:15
  },
  Dflex:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  dFlex:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  bgColor:{ 
    paddingVertical: 12,
    backgroundColor:'#F5F5F5',
    marginBottom:10,
    paddingHorizontal:10,
    borderRadius:8
  },
  Verification:{
    color:'#000',
    fontWeight:'500',
    fontSize:16,
  },
  codebg:{
    backgroundColor:'#B7DDDB',
    paddingHorizontal:20,
    paddingVertical: 12,
    borderBottomRightRadius:20
  },
  Verify:{
    color:'#19AF00',
    fontSize:16,
    fontWeight:'500'
  },
  Referral:{
    fontSize:18,
    fontWeight:'500',
    color:'#000',
    paddingBottom:15
  }
})