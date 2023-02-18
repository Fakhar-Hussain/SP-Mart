import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

export default function Profile({navigation}) {
  const [ProfileData, setProfileData] = useState('');
  const [ProfilePicture, setProfilePicture] = useState('');


  // const DeleteAccount = () => {
  //   let user = auth().currentUser;
  //   let uid = auth().currentUser.uid;

  //   if (user) {
  //     Alert.alert(
  //       "Profile",
  //       "Are you sure you want to delete your account permanently?",
  //       [
  //         {
  //           text: 'Cancel',
  //           style: 'cancel',

  //         },
  //         {
  //           text: 'Yes',
  //           onPress: () => {
  //             auth().currentUser.delete().then( () => {
  //               console.log("User Deleted");
  //               firestore().collection('MartUser').doc(uid).delete()
  //             })
  //           }
  //         },
  //       ]
  //     )
  //   }
  //   // auth().currentUser.delete();
  // }


  // const ChooseProfile = () => {
  //   ImagePicker.openPicker({
  //     cropping: true,
  //     freeStyleCropEnabled: true
  //   })
  //     .then(image => {
  //       console.log(image.path);
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
  //             console.log('Image Send Successfuly');
  //           }
  //         },
  //         error => {
  //           console.log('Sorry no image send');
  //         },
  //         () => {
  //           Path.snapshot.ref.getDownloadURL().then(downloadURL => {
  //             // setProfilePicture(downloadURL);
  //             console.log(downloadURL);
  //             let uid = auth().currentUser.uid;
  //             let data = firestore().collection('MartUser').doc(uid);
  //             data.update({
  //               UserPicture: downloadURL
  //             })
  //           });
  //         },
  //       );
  //     })
  //     .catch((error) => {
  //        console.log('Cancel Gallery',error.message)
  //     });
  // };


  // useEffect(() => {
  //   let uid = auth().currentUser.uid;
  //   let data = firestore().collection('MartUser').doc(uid);
  //   data.onSnapshot(item => {
  //     setProfileData(item.data());
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View
        style={{
          flex: 0.8,
          flexDirection: 'row',
          backgroundColor: '#161a25',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          elevation: 5,
        }}>
        {/* BackBtn */}
        <TouchableOpacity
          style={{position: 'absolute', left: 10}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} style={{top: 1, color: '#fff'}} />
        </TouchableOpacity>

        {/* Title */}
        <Icon
          name="account"
          size={22}
          style={{right: 5, top: 1, color: '#fff'}}
        />
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Ubuntu-Medium',
            color: '#fff',
          }}>
          My Profile
        </Text>
      </View>

      <View style={{flex: 9}}>
        {/* TOP */}
        <ImageBackground
            style={{flex: 1,}}
            resizeMode="stretch"
            source={require("../../../assets/bgProfile.jpg")}
        >

        <View style={{flex: 0.3}}>
            <Image
              resizeMode="contain"
              // source={{uri: ProfileData.UserPicture}}
              source={require('../../../assets/userLogo.png')}
              style={{
                width: 140,
                height: 140,
                borderRadius: 75,
                // left: 30,
                alignSelf: 'center',
                marginVertical: 11,
                borderColor: "#fff",
                borderWidth:1
              }}
            />
            <TouchableOpacity
              // onPress={() => ChooseProfile()}
              style={{
                backgroundColor: 'green',
                position: 'absolute',
                padding: 6,
                borderRadius: 20,
                bottom: 6,
                left: 220,
              }}>
              <Icon name="image-edit" size={18} style={{color: '#fff'}} />
            </TouchableOpacity>
        </View>
        {/* Bottom */}
        <View style={{flex: 0.7,backgroundColor: "",}}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Ubuntu-Medium',
              fontSize: 13,
              left: 40,
              marginTop: 30,
            }}>
            Name
          </Text>
          <TextInput
            editable={false}
            value={"Fakhar Hussain"}
            style={{
              width: '75%',
              height: 40,
              borderRadius: 5,
              alignSelf: 'center',
              top: 10,
              color: '#fff',
              borderColor: "#fff",
              borderWidth: 1,
              textAlign: "center",
              fontFamily: "Ubuntu-Medium"
            }}
          />

          <Text
            style={{
              color: '#fff',
              fontFamily: 'Ubuntu-Medium',
              fontSize: 13,
              marginTop: 20,
              left: 40,
            }}>
            Email
          </Text>
          <TextInput
            editable={false}
            value={"fakharhussain.123@gmail"}
            style={{
              width: '75%',
              height: 40,
              borderRadius: 5,
              alignSelf: 'center',
              top: 10,
              color: '#fff',
              borderColor: "#fff",
              borderWidth: 1,
              textAlign: "center",
              fontFamily: "Ubuntu-Medium"
            }}
          />

          <Text
            style={{
              color: '#fff',
              fontFamily: 'Ubuntu-Medium',
              fontSize: 13,
              marginTop: 20,
              left: 40,
            }}
          >
            Address
          </Text>
          <TextInput
            editable={false}
            value={"House # L31, Street-52, Washington DC America "}
            multiline={true}
            style={{
              width: '75%',
              height: 60,
              borderRadius: 5,
              alignSelf: 'center',
              top: 10,
              color: '#fff',
              borderColor: "#fff",
              borderWidth: 1,
              textAlign: "center",
              fontFamily: "Ubuntu-Medium"
            }}
          />


          <View style={{position: "absolute",bottom: 30,alignSelf:"center"}}>
            <TouchableOpacity 
            onPress={() => navigation.replace("Login")}
            style={{
              backgroundColor: "#ff2400",
              width: 170,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              // position: "absolute",
              borderRadius: 6,
              
            }}
            >
              <Text
                style={{
                  fontFamily: "Ubuntu-Medium",
                  color: "#fff"
                }}
              >Delete Account</Text>
            </TouchableOpacity>
          </View>

        </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161a25',
  },
  Text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
