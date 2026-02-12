import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ratingimg from '../../../assets/images/rating.png'
import Textarea from 'react-native-textarea'


const Ratings = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.ratingcontainer}>
        <Image source={ratingimg} style={styles.imgrating} />
          <Text style={styles.headingrait}>Rate the care provided</Text>
          <Text style={styles.headingrait}>Thursday, July 20</Text>
            <View style={styles.flexList}>
              <Ionicons name='star' size={25} color='#ffc107' />
              <Ionicons name='star' size={25} color='#ffc107' />
              <Ionicons name='star' size={25} color='#ffc107' />
              <Ionicons name='star' size={25} color='#ffc107' />
              <Ionicons name='star' size={25} color='#141113' />
            </View>
            <View>
                <Textarea
                  containerStyle={styles.textareaContainer}
                  style={styles.textarea}
                  onChangeText={this.onChange}
                  defaultValue={this.state.text}
                  maxLength={80}
                  placeholder={'Comments...'}
                  placeholderTextColor={'#000'}
                  underlineColorAndroid={'transparent'}
                />
            </View>
            <View style={styles.reviewRow}>
              <Pressable style={styles.notnowBtn}>
                <Text style={{textAlign:'center', fontSize:18, fontWeight:'500' ,color:'#E4082D'}}>Not Now</Text>
              </Pressable> 
              <Pressable style={styles.reviewBtn}>
                <Text style={{textAlign:'center', fontSize:18, fontWeight:'500' ,color:'#fff'}}>Submit Review</Text>
              </Pressable>
            </View>
      </View>
    </ScrollView>
  )
}

export default Ratings;

const styles = StyleSheet.create({
  container:{
    padding:10,
    flex:1,
    backgroundColor:'#fff'
  },
  ratingcontainer:{
    paddingVertical:15
  },
  imgrating:{
    width:'100%',
    height:220,
    resizeMode:'contain',
    marginBottom:20
  },
  headingrait:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'500',
    color:'#000'
  },
  flexList:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:5,
    paddingVertical:15
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
  reviewRow:{
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'center',
    gap:10 ,
    paddingVertical:15
  },
  notnowBtn:{
    borderWidth:2,
    borderColor:'#E4082D',
    width:'48%',
    padding:12,
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
  },
  reviewBtn:{
    backgroundColor:'#E4082D',
    width:'48%',
    padding:12, 
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
  }
})