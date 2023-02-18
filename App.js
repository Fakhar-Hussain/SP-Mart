import 'react-native-gesture-handler';

import React, { useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, View, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import SplashScreen from './Screens/SplashScreen';
import AppStack from './Screens/Navigator/AppStack';

import DairyProducts from './Screens/ProductCatagries/DairyProduct';
import GroceryProducts from './Screens/ProductCatagries/GroceryProduct';
import KidProducts from './Screens/ProductCatagries/KidsProduct';
import Product from './Screens/ProductCatagries/Product';
import AddToCart from './Screens/ProductCatagries/AddToCart';
import SignIn from './Screens/SignAuth/SignIn';
import SignUp from './Screens/SignAuth/SignUp';

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <>
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="AppStack" component={AppStack} />
            
            <Stack.Screen name="DairyItem" component={DairyProducts} />
            <Stack.Screen name="GroceryItem" component={GroceryProducts} />
            <Stack.Screen name="KidsItem" component={KidProducts} />
            <Stack.Screen name="Product" component={Product} />

            <Stack.Screen name="AddToCart" component={AddToCart} />
          </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

