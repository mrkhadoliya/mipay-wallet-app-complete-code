import {StyleSheet, Text, View, Image, Pressable, ScrollView} from 'react-native';
import React from 'react'; 
import mga from '../../../assets/icons/MGA.png';

const TokenBalance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tokenheading}>Token Balance</Text>
      <ScrollView style={styles.menuListRow}>
        <Pressable
          style={styles.buttonsMenu}
          onPress={() => navigation.navigate('')}>
          <View style={styles.dFlex}>
            <Image source={mga} style={styles.image} />
            <Text style={styles.menuText}>MGA</Text>
          </View>
          <View>
            <Text>+0.94853</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.buttonsMenu}
          onPress={() => navigation.navigate('')}>
          <View style={styles.dFlex}>
            <Image source={mga} style={styles.image} />
            <Text style={styles.menuText}>USDT</Text>
          </View>
          <View>
            <Text>+0.94853</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.buttonsMenu}
          onPress={() => navigation.navigate('')}>
          <View style={styles.dFlex}>
            <Image source={mga} style={styles.image} />
            <Text style={styles.menuText}>Binance-pre BUSD</Text>
          </View>
          <View>
            <Text>+0.94853</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.buttonsMenu}
          onPress={() => navigation.navigate('')}>
          <View style={styles.dFlex}>
            <Image source={mga} style={styles.image} />
            <Text style={styles.menuText}>TRX</Text>
          </View>
          <View>
            <Text>+0.94853</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.buttonsMenu}
          onPress={() => navigation.navigate('')}>
          <View style={styles.dFlex}>
            <Image source={mga} style={styles.image} />
            <Text style={styles.menuText}>TRC20</Text>
          </View>
          <View>
            <Text>+0.94853</Text>
          </View>
        </Pressable> 
      </ScrollView>
    </View>
  );
};

export default TokenBalance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1532',
  },
  tokenheading: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    paddingBottom: 20,
    paddingHorizontal:15
  },
  menuListRow: {
    padding: 10,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom: 75,
    flex: 1,
  },
  buttonsMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  dFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  menuText: {
    fontSize: 16,
    color: '#000',
    fontWeight:'500'
  },
});
