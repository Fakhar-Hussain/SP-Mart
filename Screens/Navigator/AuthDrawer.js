import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

export default function AuthDrawer({navigation}) {
  const [UserData, setUserData] = useState('');

  const SignOut = () => {
    auth().signOut();
  };

  const LoggedUser = async () => {
    let uid = auth().currentUser.uid;
    let data = firestore().collection('MartUser').doc(uid);
    data.onSnapshot(item => {
      setUserData(item.data());
      // navigation.addListener("focus" , () => {
      // })
    });
  };

  useEffect(() => {
    LoggedUser();
  }, []);

  return (
    <View style={styles.Container}>
      {/* Portion # 1 */}
      <View style={{flex: 0.3}}>
        <ImageBackground
          style={[styles.ImageView]}
          source={require('../../assets/metro3.jpg')}
          resizeMode={'cover'}>
          <TouchableOpacity
            style={styles.IconView}
            onPress={() => navigation.closeDrawer()}>
            <Icon name="close" size={24} style={{color: '#333'}} />
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <Image
              resizeMode="contain"
              style={{width: 42, height: 42, borderRadius: 22, margin: 8,borderWidth:1,borderColor: "#333"}}
              source={{
                uri: UserData.UserPicture,
              }}
            />
            <View style={{alignSelf: 'center', top: -2}}>
              <Text style={{fontFamily: 'Ubuntu-Regular',fontSize:16, color: '#000'}}>
                {UserData.Username}
              </Text>
              <Text
                style={{
                  fontFamily: 'Ubuntu-Regular',
                  color: '#000',
                  fontSize: 12,
                  top: 2,
                }}>
                {UserData.Email}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Portion # 2 */}
      <View style={{flex: 0.6, top: 15}}>
        <TouchableOpacity
          style={styles.ProfileView}
          onPress={() => navigation.navigate('Profile')}>
          <Icon name="account" size={28} style={{color: '#fff'}} />
          <Text style={styles.ProfileTxt}>My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ProfileView}
          onPress={() => navigation.navigate('Address')}>
          <Icon name="map-marker" size={28} style={{color: '#fff'}} />
          <Text style={styles.ProfileTxt}>Delivery Address</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.ProfileView}>
          <Icon name="cart" size={28} style={{color: '#fff'}} />
          <Text style={styles.ProfileTxt}>Active Order</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.ProfileView}
          onPress={() => navigation.navigate('OrderHistory')}>
          <Icon name="clipboard-text-clock" size={28} style={{color: '#fff'}} />
          <Text style={styles.ProfileTxt}>Order History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ProfileView}
          onPress={() => navigation.navigate('FAQ')}>
          <Icon name="cloud-question" size={28} style={{color: '#fff'}} />
          <Text style={styles.ProfileTxt}>FAQ</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.ProfileView}>
          <Icon name="notebook" size={28} style={{color: '#fff'}} />
          <Text style={styles.ProfileTxt}>My Shopping List</Text>
        </TouchableOpacity> */}
      </View>

      {/* Portion # 3 */}
      <View style={{flex: 0.1}}>
        <TouchableOpacity style={styles.SignOutView} onPress={() => SignOut()}>
          <Icon name="power" size={22} style={{color: '#333', right: 5}} />
          <Text style={styles.SignOutTxt}>SignOut</Text>
        </TouchableOpacity>
      </View>
      {/* // </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#161a25',
    // opacity: 0.6,
  },

  // PORTION # 1
  ImageView: {
    width: '100%',
    height: '100%',
  },
  MenuTxt: {
    position: 'absolute',
    color: '#333',
    fontSize: 22,
    fontFamily: 'Ubuntu-Regular',
    bottom: 8,
    right: 10,
  },
  IconView: {
    position: 'absolute',
    right: 7,
    top: 3,
  },

  // PORTION # 2
  ProfileView: {
    left: 18,
    flexDirection: 'row',
    width: '80%',
    height: 36,
    marginTop: 14,
    borderColor: '#fff',
    borderBottomWidth: 0.4,
  },
  ProfileTxt: {
    left: 10,
    top: 4,
    fontSize: 18,
    fontFamily: 'Ubuntu-Regular',
    color: '#fff',
  },

  // PORTION # 3
  SignOutView: {
    backgroundColor: '#fff',
    left: 20,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 30,
  },
  SignOutTxt: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Ubuntu-Bold',
  },
});
