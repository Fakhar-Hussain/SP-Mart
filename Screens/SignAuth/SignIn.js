import React, {useState} from 'react';
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import auth from '@react-native-firebase/auth';
// import {StackActions} from "@react-navigation/native"


export default function SignIn({navigation}) {
  // For PasswordIcon
  const [Hide, setHide] = useState(true);
  // For Indicator
  const [Indicator, setIndicator] = useState(false);

  // For Email
  const [Email, setEmail] = useState('');
  // For Password
  const [Password, setPassword] = useState('');

  // const Login = async () => {
  //   setIndicator(true);
  //   if (Email == '' || Password == '') {
  //     setIndicator(false);
  //     Alert.alert('Login', 'Please Complete all Fields Frst');
  //   } else {
  //     try {
  //       let LoginUser = await auth().signInWithEmailAndPassword(Email, Password)
  //       LoginUser.user.reload();
        
  //       if (LoginUser.user.emailVerified == true) {
  //         LoginUser.user.reload();
  //         // Alert.alert("Login", "Account Login successfuly.")
  //       } else {
  //         Alert.alert("Login", "Please verified your account?")
  //         if (auth().currentUser) {
  //           auth().signOut();
  //           LoginUser.user.reload();
  //         }
  //       }
        
  //       setIndicator(false);
  //       // console.log(LoginUser);
        
  //       // setEmail('');
  //       // setPassword('');
  //     } 
  //     catch (error) {
  //       setIndicator(false);
  //       let err = error.message.split(']');
  //       let Error = err[1].trim();
  //       Alert.alert('Error', Error);
  //     }
  //   }
  // };

  return (
    <View style={{flex: 1}}>
      <View
        style={[
          styles.container,
          Indicator == true ? {opacity: 0.7, backgroundColor: "#000"} : {opacity: 1},
        ]}>
        <StatusBar hidden={true} />

        {/* First Half Start*/}
        <View style={{flex: 4.5}}>
          <View
            style={{
              flex: 0.62,
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/cartLogin.png')}
              // source={{ uri : "https://o.remove.bg/downloads/b3d7366d-40f1-4b5f-8e8f-b03a8f7b7f26/istockphoto-1138644570-612x612-removebg-preview.png"}}
              style={{width: 200, height: 200}}
              resizeMode={'contain'}
            />
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Ubuntu-Bold',
                color: '#fff',
                top: -50,
              }}>
              Metro Mart
            </Text>
          </View>

          <View
            style={{
              top: 50,
              flex: 0.2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Sono_Monospace-Bold',
                color: '#fff',
              }}>
              Login
            </Text>
          </View>
        </View>
        {/* First Half End*/}

        {/* Second Half Start */}
        <View style={{flex: 5.5}}>
          {/* Email Field */}
          <View
            style={{
              width: '90%',
              top: 20,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Ubuntu-Bold',
                color: '#fff',
                padding: 7,
                width: 150,
              }}>
              Email
            </Text>
            <TextInput
              autoCorrect={false}
              cursorColor={'#000'}
              numberOfLines={1}
              value={Email}
              onChangeText={text => setEmail(text)}
              style={{
                alignSelf: 'center',
                backgroundColor: '#fff',
                width: '86%',
                height: 40,
                paddingHorizontal: 16,
                borderRadius: 4,
                elevation: 4,
                fontFamily: 'Ubuntu-Regular',
                fontSize: 16,
              }}
            />
          </View>

          {/* Password Field */}
          <View
            style={{
              width: '90%',
              marginTop: 30,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Ubuntu-Bold',
                color: '#fff',
                padding: 7,
                width: 150,
              }}>
              Password
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TextInput
                autoCorrect={false}
                cursorColor={'#000'}
                numberOfLines={1}
                keyboardType={'decimal-pad'}
                value={Password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={Hide == true ? true : false}
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#fff',
                  width: '86%',
                  height: 40,
                  paddingHorizontal: 16,
                  paddingRight: 34,
                  borderRadius: 4,
                  elevation: 4,
                  fontFamily: 'Ubuntu-Regular',
                  fontSize: 16,
                }}
              />
              <TouchableOpacity onPress={() => setHide(!Hide)}>
                {Hide == true ? (
                  <Icon
                    name="eye-off"
                    size={22}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: 8,
                      color: '#666',
                    }}
                  />
                ) : (
                  <Icon
                    name="eye"
                    size={22}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: 8,
                      color: '#666',
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Buttons */}
          <View
            style={{
              flex: 0.5,
              width: '100%',
              top: 30,
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => Login()}
              style={{
                backgroundColor: '#fa7308',
                alignSelf: 'center',
                width: '40%',
                height: 40,
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontFamily: 'Ubuntu-Bold',
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={{
                top: 10,
                alignSelf: 'center',
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontFamily: 'Ubuntu-Bold',
                }}>
                I don't have an account!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Second Half End */}
      </View>

      {Indicator == true ? (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            // flexDirection: "row"
          }}>
          <ActivityIndicator size={45} color={'#fa7308'} />
          <Text style={{color: '#fa7308', fontFamily: 'Ubuntu-Medium', top: 7}}>
            Please wait
          </Text>
        </View>
      ) : null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161a25',
  },
});
