import {StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Notifications = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
  return (
    <View style={styles.container}>
      <View style={styles.kycrow}>
        <View style={{paddingTop: 15}}>
          <Pressable
            style={styles.buttonsMenu}
            onPress={() => navigation.navigate('')}>
            <View>
              <Text style={styles.menuText}>Allow Notifications</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={22} color="#000" />
            </View>
          </Pressable>
          <Pressable
            style={styles.buttonsMenu} >
            <View>
              <Text style={styles.menuText}>Exchange Status</Text>
            </View>
            <View>
            <Switch
                trackColor={{false: '#1A1532', true: '#2D991B'}}
                thumbColor={isEnabled ? '#2D991B' : '#f4f3f4'}
                ios_backgroundColor="#1A1532"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            </View>
          </Pressable>
          <Pressable
            style={styles.buttonsMenu}
            onPress={() => navigation.navigate('transaction')}>
            <View>
              <Text style={styles.menuText}>Transactions</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={22} color="#000" />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1532',
  },
  mainheading: {
    color: '#000',
    fontSize: 22,
    fontWeight: '500',
  },
  kycrow: {
    padding: 15,
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
  Dflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  menuText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});
