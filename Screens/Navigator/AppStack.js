import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../HomeScreen';
import Profile from './DrawerScreens/Profile';
import Address from '../Navigator/DrawerScreens/Address';
import AuthDrawer from './AuthDrawer';
import OrderHistory from './DrawerScreens/OrderHistory';
import FAQ from './DrawerScreens/FAQ';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
      <Drawer.Navigator drawerContent={props => <AuthDrawer {...props} />} screenOptions={{headerShown: false}} >
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Profile' component={Profile} />
        <Drawer.Screen name='Address' component={Address} />
        <Drawer.Screen name='OrderHistory' component={OrderHistory} />
        <Drawer.Screen name='FAQ' component={FAQ} />
      </Drawer.Navigator>
  )
}

export default AppStack;