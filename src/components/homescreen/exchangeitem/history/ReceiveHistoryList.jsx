import {
    View,
    Text,
    ScrollView, 
    Image,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
  import React from 'react';
  import Ionicons from 'react-native-vector-icons/Ionicons';  

const ReceiveHistoryList = ({navigation, marketCoin}) => {
    const {
      name,
      image,
      current_price,
      market_cap_rank,
      price_change_percentage_24h,
      symbol,
      market_cap,
    } = marketCoin;
  
    const percentageColor = price_change_percentage_24h < 0 ? 'red' : '#19C59C';
  
    const normalizeMarketCap = marketCap => {
      if (marketCap > 1_000_000_000_000) {
        return `${Math.floor(marketCap / 1_000_000_000_000)} T`;
      }
      if (marketCap > 1_000_000_000) {
        return `${Math.floor(marketCap / 1_000_000_000)} B`;
      }
      if (marketCap > 1_000_000) {
        return `${Math.floor(marketCap / 1_000_000)} M`;
      }
      if (marketCap > 1_000) {
        return `${Math.floor(marketCap / 1_000)} K`;
      }
      return marketCap;
    };
  
  return (
    <ScrollView style={styles.ScrollContainerCharts}>
      <View>
        <TouchableOpacity
          style={styles.BtnContainerTokenPrice}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('transactionhistory')}
          >
          <View style={styles.flexDisplay}>
            <View style={styles.borderCoinIMage}>
              <Image source={{uri: image}} style={styles.coinImage} />
            </View>
            <View>
              <Text style={styles.nameCoinText}>{name}</Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <Text style={styles.ranking}>{market_cap_rank}</Text>
                <Text style={styles.subCoinPoint}>{symbol.toUpperCase()}</Text>
                <Text style={{color: percentageColor}}>
                  <Ionicons
                    name={
                      price_change_percentage_24h < 0
                        ? 'caret-down-outline'
                        : 'caret-up-outline'
                    }
                    color={percentageColor}
                  />
                  {price_change_percentage_24h.toFixed(2)}%
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.currentPriceToken}>${current_price}</Text>
            <Text style={styles.subCoinPoint}>
              MCap {normalizeMarketCap(market_cap)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ReceiveHistoryList


const styles = StyleSheet.create({
    ScrollContainerCharts: {},
    BtnContainerTokenPrice: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: '#F2F3F7',
      paddingVertical: 13,
      backgroundColor:'#F5F5F5',
      marginBottom:5
    },
    flexDisplay: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
    },
    borderCoinIMage: {
      padding: 5,
      borderWidth: 1,
      borderColor: '#68788E',
      borderRadius: 100,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    coinImage: {
      width: 32,
      height: 32,
      resizeMode: 'contain',
      borderRadius: 100,
    },
    nameCoinText: {
      fontWeight: '500',
      color: '#232637',
      fontSize: 16,
    },
    ranking: {
      backgroundColor: '#B5C0D0',
      paddingHorizontal: 2,
      borderRadius: 5,
      color: '#fff',
      fontSize: 12,
    },
    subCoinPoint: {
      color: '#646980',
      textAlign: 'right',
    },
    currentPriceToken: {
      fontWeight: '400',
      color: '#232637',
      fontSize: 17,
      textAlign: 'right',
    },
  
    prasentCoinPricDwon: {
      color: 'red',
    },
  });
  