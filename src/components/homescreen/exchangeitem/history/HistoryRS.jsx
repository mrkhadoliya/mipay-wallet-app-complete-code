import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import ReceiveHistory from './ReceiveHistory';

const Tab = createMaterialTopTabNavigator();

const HistoryRS = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: '500',
            textTransform: 'capitalize',
          },
          tabBarStyle: {backgroundColor: '#1A1532'},
          tabBarIndicatorStyle: {
            borderBottomColor: '#fff',
            borderBottomWidth: 2,
            borderRadius: 50,
          },
        }}>
        <Tab.Screen
          name="Receive"
          component={ReceiveHistory}
          options={{tabBarLabel: 'Receive History',
        }}
        />
        <Tab.Screen
          name="Send"
          component={ReceiveHistory}
          options={{tabBarLabel: 'Send History'}}
        />
      </Tab.Navigator>
    </>
  );
};

export default HistoryRS;

const styles = StyleSheet.create({
  TabMainContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#181A20',
  },
});
