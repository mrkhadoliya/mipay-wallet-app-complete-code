import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import cryptocurrencies from '../../../../assets/data/cryptocurrencies.json';
import ReceiveHistoryList from './ReceiveHistoryList';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReceiveHistory = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.ScrollContainerHome}>
      <SafeAreaView style={styles.totalPricesContainers}>
        <View style={{paddingVertical: 10}}>
          <View style={{position: 'relative'}}>
            <TextInput placeholder="Search...." style={styles.input} />
            <View style={styles.searchicon}>
              <Ionicons name="search" size={22} />
            </View>
          </View>
        </View>

        {/* cyrpto assets View Start */}

        <FlatList
          data={cryptocurrencies}
          renderItem={({item}) => (
            <ReceiveHistoryList {...props} marketCoin={item} />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default ReceiveHistory;

const styles = StyleSheet.create({
  ScrollContainerHome: {
    backgroundColor: '#1A1532',
    height: '100%',
    paddingTop: 8,
    paddingHorizontal: 2,
  },
  totalPricesContainers: {
    padding: 10,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom:75
  },
  input: {
    backgroundColor: '#ECEBEB',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  searchicon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
