import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import suportimg from '../../assets/images/tech-support.png';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Services = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text>Support</Text> */}
      <View>
        <View>
          <Image source={suportimg} style={styles.imgsupport} />
        </View>
        <View style={styles.rowvariations}>
          <Text style={styles.variations}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Text>
        </View>
        <View>
            {/* <Pressable style={styles.callButton}>
                <Ionicons name='call-outline' size={25} color='#fff' />
                <Text style={{color:'#fff', fontSize:18}}>+0123456789</Text>
            </Pressable> */}
            <Pressable style={styles.callButton} onPress={() => navigation.navigate("send money")}>
                <Ionicons name='call-outline' size={25} color='#fff' />
                <Text style={{color:'#fff', fontSize:18}}>+0123456789</Text>
            </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  imgsupport: {
    resizeMode: 'contain',
    width: '100%',
    height: 280,
  },
  rowvariations:{
    paddingVertical:15
  },
  variations:{
    fontSize:14,
    lineHeight:22,
    textAlign:'center',
    fontWeight:'500'
  },
  callButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:10,
    backgroundColor:'#E4082D',
    padding:12,
    borderRadius:100,
  }
});
