import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';

// import auth from '@react-native-firebase/auth';
import {StackActions} from "@react-navigation/native"

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout( async () => {
      navigation.dispatch( StackActions.replace("AppStack") );
    },3000)
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent={true} backgroundColor={'#fff'} />
      <Image
        resizeMode='contain'
        source={require('../assets/mart.jpg')}
        style={{width: 400, height: 400}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
