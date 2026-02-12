import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import keyicon from '../../assets/icons/pass-key.png'
import notiicon from '../../assets/icons/Notifications.png'
import langicon from '../../assets/icons/Language.png'
import accicon from '../../assets/icons/Account.png'
import brpicon from '../../assets/icons/backup-data.png'
import privetkey from '../../assets/icons/privet-key.png'
import bcicon from '../../assets/icons/base-c.png'
import logout from '../../assets/icons/logout.png'
 
const Settings = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.seetingRows}>
          <Text style={styles.appsetingtext}>App settings</Text>
      </View>
      <View style={styles.menuListRow}>
          <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("")}>
            <View style={styles.dFlex}> 
                <Image source={keyicon} style={styles.image} />
                <Text style={styles.menuText}>Passcode</Text>
            </View>
            <View>
              <Ionicons name='chevron-forward-outline' size={22} color='#000' />
            </View>
          </Pressable>
          <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("notifications")}>
            <View style={styles.dFlex}> 
                <Image source={notiicon} style={styles.image} />
                <Text style={styles.menuText}>Notifications</Text>
            </View>
            <View>
              <Ionicons name='chevron-forward-outline' size={22} color='#000' />
            </View> 

          </Pressable>
          <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("language")}>
            <View style={styles.dFlex}> 
                <Image source={langicon} style={styles.image} />
                <Text style={styles.menuText}>Language</Text>
            </View>
            <View style={styles.dFlex}>
                <Text style={styles.menuText}>English</Text>
              <Ionicons name='chevron-forward-outline' size={22} color='#000' />
            </View>
          </Pressable>
          <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("service")}>
            <View style={styles.dFlex}> 
                <Image source={accicon} style={styles.image} />
                <Text style={styles.menuText}>Services</Text>
            </View>
            <View> 
              <Ionicons name='chevron-forward-outline' size={22} color='#000' />
            </View>
          </Pressable> 
          <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("accouunt")}>
            <View style={styles.dFlex}> 
                <Image source={accicon} style={styles.image} />
                <Text style={styles.menuText}>Account Details</Text>
            </View>
            <View> 
              <Ionicons name='chevron-forward-outline' size={22} color='#000' />
            </View>
          </Pressable> 
          <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("")}>
            <View style={styles.dFlex}> 
                <Image source={brpicon} style={styles.image} />
                <Text style={styles.menuText}>Backup Recovery Phrase</Text>
            </View>
            <View> 
              <Ionicons name='chevron-forward-outline' size={22} color='#000' />
            </View>
          </Pressable> 
          <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("")}>
            <View style={styles.dFlex}> 
                <Image source={privetkey} style={styles.image} />
                <Text style={styles.menuText}>Private key</Text>
            </View>
            <View> 
              <Ionicons name='chevron-forward-outline' size={22} color='#000' />
            </View>
          </Pressable> 
          <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("quieres")}>
            <View style={styles.dFlex}> 
                <Image source={privetkey} style={styles.image} />
                <Text style={styles.menuText}>Quieres</Text>
            </View>
            <View> 
              <Ionicons name='chevron-forward-outline' size={22} color='#000' />
            </View>
          </Pressable> 
          <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("")}>
            <View style={styles.dFlex}> 
                <Image source={bcicon} style={styles.image} />
                <Text style={styles.menuText}>Base Currency</Text>
            </View>
            <View style={styles.dFlex}>
                <Text style={styles.menuText}>MGA</Text>
                <Ionicons name='chevron-forward-outline' size={22} color='#000' />
            </View>
          </Pressable> 
          <Pressable style={styles.buttonsMenu} onPress={() => navigation.navigate("")}>
            <View style={styles.dFlex}> 
                <Image source={logout} style={styles.image} />
                <Text style={styles.menuText}>Log out</Text>
            </View> 
          </Pressable> 
      </View>
    </ScrollView>
  )
}

export default Settings

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    padding:15
  },
  seetingRows:{
    paddingBottom:10
  },
  appsetingtext:{
    fontSize:22,
    fontWeight:'500',
    color:'#000'
  },
  menuListRow:{
    paddingBottom:50
  },
  buttonsMenu:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 12,
    backgroundColor:'#F5F5F5',
    marginBottom:10,
    paddingHorizontal:10,
    borderRadius:8
  },
  dFlex:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  image:{
    width:30,
    height:30,
    resizeMode:'contain'
  },
  menuText:{
    fontSize:16,
    color:'#000'
  }
})