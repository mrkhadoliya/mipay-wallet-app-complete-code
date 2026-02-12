import {StyleSheet, View, Image, Pressable, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    wlcm: 'Welcome to',
    title: 'Crypto Payment',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. it to make a type specimen book.',
    image: require('../../assets/images/cryptocurrency-exchange.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    wlcm: 'Welcome to',
    title: 'Crypto Payment',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. it to make a type specimen book.',
    image: require('../../assets/images/men-trading-in-bitcoin.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 3,
    wlcm: 'Welcome to',
    title: 'Crypto Payment',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. it to make a type specimen book.',
    image: require('../../assets/images/man-looking-at-cryptocurrency-trading-desk.png'),
    backgroundColor: '#59b2ab',
  },
];

const MainSplash = ({navigation}) => {
  this.state = {
    showRealApp: false,
  };
  _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.bgcolor} >
          <Image source={item.image} style={styles.cryptoimage} />
        </View>
        <View style={styles.viewrow}>
          <View>
            <Text style={styles.welcome}>{item.wlcm}</Text>
            <Text style={styles.cryptoname}>{item.title}</Text>
          </View>
          <View>
            <Text style={styles.discaptext}>{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({showRealApp: true});
  };

  _renderPrevButton = () => {
    return ( 
        <Pressable style={styles.preButton}>
          <Text style={styles.preText}>PRE</Text>
        </Pressable> 
    );
  };

  _renderNextButton = () => {
    return ( 
        <Pressable style={styles.nextButton}>
          <Text style={styles.preText}>Next</Text>
        </Pressable> 
    );
  };

  _renderDoneButton = () => {
    return ( 
      <Pressable style={styles.nextButton} onPress={() => navigation.navigate("login screen")}>
        <Text style={styles.preText}>GET STARTED</Text>
      </Pressable> 
    );
  };

  return (
    <AppIntroSlider
      renderItem={this._renderItem}
      data={slides}
      onDone={this._onDone}
      renderDoneButton={this._renderDoneButton}
      renderNextButton={this._renderNextButton}
      renderPrevButton={this._renderPrevButton}
      showPrevButton
      showNextButton
      showSkipButton
      showDoneButton
      dotStyle={{position: 'relative', top: '-20%', backgroundColor: '#fff'}}
      activeDotStyle={{
        position: 'relative',
        top: '-20%',
        backgroundColor: '#E4082D',
        width: 30,
        height: 12,
        borderRadius: 100,
      }}
    />
  );
};

export default MainSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1532',
    alignItems: 'center',
    padding: 15,
  },
  cryptoimage: {
    width: 300,
    height: 250,
    resizeMode: 'cover',
  },
  viewrow:{
    padding:15
  },
  welcome:{
    textAlign:'center',
    fontSize:20,
    color:'#fff',
    fontWeight:'500',
    letterSpacing:0.8, 
  },
  cryptoname:{
    textAlign:'center',
    fontSize:30,
    color:'#fff',
    fontWeight:'600',
    letterSpacing:0.5,
    paddingVertical:25
  },
  discaptext:{
    textAlign:'center',
    fontSize:15,
    color:'#fff',
    fontWeight:'400', 
    lineHeight:25
  },
  preButton: {
    backgroundColor: '#E4082D',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopStartRadius: 100,
    borderBottomStartRadius: 100,
    width: 160,
  },
  nextButton: {
    backgroundColor: '#E4082D',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopEndRadius: 100,
    borderBottomEndRadius: 100,
    width: 160,
  },
  preText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },
});
