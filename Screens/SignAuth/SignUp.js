import React, {useEffect, useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
// import auth from '@react-native-firebase/auth';
// import storage from '@react-native-firebase/storage';
// import firestore from '@react-native-firebase/firestore';

export default function SignUp({navigation}) {
  const [Hide, setHide] = useState(true);
  const [Next, setNext] = useState(true);
  const [Indicator, setIndicator] = useState(false);
  const [SubmitPopup, setSubmitPopup] = useState(false);

  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [UserPicture, setUserPicture] = useState('');
  const [Address, setAddress] = useState('');

  // const ChooseProfile = () => {
  //   setIndicator(true);
  //   ImagePicker.openPicker({
  //     cropping: true,
  //     freeStyleCropEnabled: true
  //   })
  //     .then(image => {
  //       let Path = storage()
  //         .ref()
  //         .child(`/Profile/DCIM-${Date.now()}`)
  //         .putFile(image.path);
  //       Path.on(
  //         'state_changed',
  //         snapshot => {
  //           let Progress =
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           if (Progress == 100) {
  //             setIndicator(false);
  //             // alert('Image Send Successfuly');
  //           }
  //         },
  //         error => {
  //           setIndicator(false);
  //           // alert('Sorry no image send');
  //         },
  //         () => {
  //           Path.snapshot.ref.getDownloadURL().then(downloadURL => {
  //             setUserPicture(downloadURL);
  //             // console.log(downloadURL);
  //           });
  //         },
  //       );
  //     })
  //     .catch(() => {
  //       setIndicator(false);
  //       //  alert('Cancel Gallery')
  //     });
  // };

  // const SubmitSignUp = async () => {
  //   setIndicator(true);
  //   if (
  //     Username == '' ||
  //     UserPicture == '' ||
  //     Email == '' ||
  //     Password == '' ||
  //     Address == ''
  //   ) {
  //     // if (Email == '' || Password == '') {
  //     setIndicator(false);
  //     Alert.alert('SignUp', 'Please Complete all Fields First');
  //   } else {
  //     try {
  //       let signup = await auth().createUserWithEmailAndPassword(
  //         Email,
  //         Password,
  //       );
  //       await signup.user.updateProfile({
  //         displayName: Username,
  //       });
  //       await signup.user.sendEmailVerification().then(() => {
  //         auth().signOut()
  //         setIndicator(false);
  //         setSubmitPopup(true);
  //       });


  //       firestore()
  //         .collection('MartUser').doc(signup.user.uid)
  //         .set({
  //           Username: Username,
  //           Email: Email,
  //           Password: Password,
  //           Address: Address,
  //           UserPicture: UserPicture,
  //           uid: signup.user.uid,
  //         })

  //       setUsername('');
  //       setEmail('');
  //       setPassword('');
  //       setAddress('');
  //       setUserPicture('');
  //     } catch (error) {
  //       let err = error.message.split(']');
  //       let Error = err[1].trim();
  //       Alert.alert('Error', Error);
  //       setIndicator(false);
  //     }
  //   }
  // };

  const NavNext = () => {
    setNext(!Next);
  };

  const Popup = () => {
    return (
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 10,
          zIndex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '70%',
            flexDirection: 'row',
            paddingVertical: 8,
            borderRadius: 7,
          }}>
          <Text
            style={{
              color: '#fa7308',
              width: '80%',
              fontFamily: 'Ubuntu-Regular',
              fontSize: 14,
            }}>
            Please verify your email address & login your account.
          </Text>
          <TouchableOpacity
            onPress={() => setSubmitPopup(false)}
            style={{right: 5, top: 7, position: 'absolute', zIndex: 3}}>
            <Icon name="close" size={16} style={{top: 0, color: 'red'}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      if (SubmitPopup == true) {
        setSubmitPopup(false);
      }
    }, 5000);
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={[
          styles.container,
          Indicator == true
            ? {opacity: 0.7, backgroundColor: '#000'}
            : {opacity: 1},
        ]}>
        <StatusBar hidden={true} />

        {/* First Half */}
        <View style={{flex: 3.4}}>
          <View
            style={{
              flex: 0.62,
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/cartLogin.png')}
              // uri: 'https://o.remove.bg/downloads/b3d7366d-40f1-4b5f-8e8f-b03a8f7b7f26/istockphoto-1138644570-612x612-removebg-preview.png',
              style={{width: 140, height: 140}}
              resizeMode={'contain'}
            />
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Ubuntu-Bold',
                color: '#fff',
                top: -40,
              }}>
              Metro Mart
            </Text>
          </View>

          <View
            style={{
              top: 34,
              flex: 0.2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 21,
                fontFamily: 'Sono_Monospace-Bold',
                color: '#fff',
              }}>
              Create Account
            </Text>
          </View>
        </View>

        {/* Second Half */}
        <View style={{flex: 6.6}}>
          {Next == true ? (
            <>
              {/* // Name Field */}
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
                  Name
                </Text>
                <TextInput
                  autoCorrect={false}
                  cursorColor={'#000'}
                  numberOfLines={1}
                  value={Username}
                  onChangeText={text => setUsername(text)}
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

              {/* // Email Field */}
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
                  marginTop: 10,
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
                    keyboardType="decimal-pad"
                    secureTextEntry={Hide == true ? true : false}
                    value={Password}
                    onChangeText={text => setPassword(text)}
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
            </>
          ) : (
            <>
              {/* Picture Field */}
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
                  Profile Picture
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '85%',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => ChooseProfile()}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#8d4004',
                      width: '76%',
                      height: 40,
                      paddingHorizontal: 16,
                      borderRadius: 4,
                      elevation: 4,
                      fontFamily: 'Ubuntu-Regular',
                      fontSize: 16,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 15,
                        fontFamily: 'Ubuntu-Bold',
                      }}>
                      Choose Profile
                    </Text>
                  </TouchableOpacity>

                  <View
                    style={{
                      backgroundColor: '#fff',
                      width: 55,
                      height: 40,
                      borderRadius: 4,
                    }}>
                    <Image
                      resizeMode="contain"
                      source={
                        UserPicture == ''
                          ? require('../../assets/NoPic.png')
                          : {uri: UserPicture}
                      }
                      style={{
                        width: 55,
                        height: 40,
                        borderRadius: 4,
                      }}
                    />
                  </View>
                </View>
              </View>

              {/* // Address Field */}
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
                  Home Address
                </Text>
                <TextInput
                  autoCorrect={false}
                  cursorColor={'#000'}
                  textContentType={'fullStreetAddress'}
                  // placeholder={'Home Address...'}
                  textAlignVertical={'top'}
                  multiline={true}
                  value={Address}
                  onChangeText={text => setAddress(text)}
                  style={{
                    alignSelf: 'center',
                    backgroundColor: '#fff',
                    width: '86%',
                    height: 120,
                    paddingHorizontal: 16,
                    borderRadius: 4,
                    elevation: 4,
                    fontFamily: 'Ubuntu-Regular',
                    fontSize: 16,
                  }}
                />
              </View>
            </>
          )}

          {/* Buttons */}
          <View
            style={{
              flex: 0.5,
              width: '100%',
              top: 30,
              alignSelf: 'center',
            }}>
            {Next == true ? (
              <TouchableOpacity
                onPress={() => NavNext()}
                style={{
                  backgroundColor: '#fa7308',
                  alignSelf: 'center',
                  width: '40%',
                  height: 40,
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* <Icon
                name="arrow-right"
                size={24}
                style={{right: 0, top: 0,fontWeight: "bold", color: '#fff'}}
              /> */}
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 15,
                    fontFamily: 'Ubuntu-Bold',
                  }}>
                  Next
                </Text>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => setNext(!Next)}
                  style={{left: 42, position: 'absolute', zIndex: 3}}>
                  <Icon
                    name="arrow-left"
                    size={24}
                    style={{top: 0, color: '#fff'}}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.replace("AppStack")}
                  style={{
                    backgroundColor: '#fa7308',
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
                    SignUp
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
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
                I have an account!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
            // flexDirection: "row"fa7308
          }}>
          <ActivityIndicator size={45} color={'#fa7308'} />
          <Text style={{color: '#fa7308', fontFamily: 'Ubuntu-Medium', top: 7}}>
            Please wait
          </Text>
        </View>
      ) : null}

      {SubmitPopup == true ? Popup() : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161a25',
  },
});
