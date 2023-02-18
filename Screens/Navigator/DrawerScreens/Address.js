import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';

export default function Address({navigation}) {
  const [Delivery, setDelivery] = useState('House # L31, Street-52, Washington DC America');
  const [EditText, setEditText] = useState("");
  const [Edit, setEdit] = useState(false);
  const [EditPopup, setEditPopup] = useState(false);


  // const UpdateAddress = () => {
  //   let uid = auth().currentUser.uid;
  //   firestore().collection('MartUser').doc(uid).update({
  //     Address: EditText
  //   }).then( () => {
  //     setEditPopup(false)
  //     setEdit(false)
  //   })
  // }

  
  // useEffect(() => {
  //   let uid = auth().currentUser.uid;
  //   let data = firestore().collection('MartUser').doc(uid)
  //   data.onSnapshot(item => {
  //     setDelivery(item.data().Address);
  //   })
  //   navigation.addListener('focus', () => {
  //     setEdit(false)
  //   })
  // }, []);
  

  return (
    <View style={styles.container}>
      <View style={[styles.container, EditPopup == true ? {opacity: 0.7} : {opacity: 1} ]}>
        
      <StatusBar hidden={true} />
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
          name="map-marker"
          size={20}
          style={{right: 10, top: 1, color: '#fff'}}
        />
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Ubuntu-Medium',
            color: '#fff',
          }}>
          Delivery Address
        </Text>
      </View>

      {/* justifyContent: 'center', alignItems: 'center' */}
      <View style={{flex: 9, backgroundColor: '#fff'}}>
        <View style={{flex: 0.4, margin: 16}}>
          <TouchableOpacity>
            <Image
              resizeMode="cover"
              source={{
                uri: 'https://karachiairport.com.pk/images/Locate-us.png',
              }}
              style={{width: '100%', height: '100%', borderRadius: 16}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{borderBottomWidth: 0.7, width: '90%', alignSelf: 'center'}}
        />

        <View style={{flex: 0.47, margin: 16, left: 10}}>
          <Text
            style={{fontFamily: 'Ubuntu-Bold', color: '#000', fontSize: 13}}>
            Delivery Address:
          </Text>
          {/* edit TextInput */}
          {
            Edit !== true ?
            (
              <TextInput
                editable={false}
                multiline={true}
                cursorColor={'#000'}
                value={Delivery}
                autoCorrect={false}
                style={{
                  fontFamily: 'Ubuntu-Regular',
                  top: 5,
                  color: '#000',
                  paddingLeft: 14,
                  fontSize: 17,
                  width: '90%',
                  borderWidth: 0.5,
                  borderRadius: 5,
                  borderColor: '#000',
                }}
              />
            )
            :
            (
              <TextInput
                editable={true}
                multiline={true}
                cursorColor={'#000'}
                autoCorrect={false}
                value={EditText}
                onChangeText={(text) => setEditText(text)}
                style={{
                  fontFamily: 'Ubuntu-Regular',
                  top: 5,
                  color: '#000',
                  paddingLeft: 14,
                  fontSize: 17,
                  width: '90%',
                  borderWidth: 0.5,
                  borderRadius: 5,
                  borderColor: '#000',
                }}
              />
            )
          }

          {/* edit Btn */}
          {
            Edit !== true 
            ?
            (
              <TouchableOpacity
                onPress={() => setEdit(true)}
                style={{
                  backgroundColor: 'green',
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  top: -5,
                  left: 290,
                }}>
                <Icon name="file-document-edit" size={16} style={{color: '#fff'}} />
              </TouchableOpacity>
            )
            :
            (
              <TouchableOpacity
                onPress={() => setEdit(false)}
                style={{
                  backgroundColor: 'red',
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  top: -5,
                  left: 290,
                }}>
                <Icon name="close" size={16} style={{color: '#fff'}} />
              </TouchableOpacity>
            )
          }

        </View>

        {/* Update Btn */}
        <TouchableOpacity
            onPress={() => {
              EditText == ""
              ?
              setEditPopup(false)
              :
              setEditPopup(true)
            }}
            style={{
              backgroundColor: 'green',
              width: 110,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6,
              position: "absolute",
              bottom: 10,
              alignSelf: "center"
            }}>
              <Text
                style={{
                  fontFamily: 'Ubuntu-Regular',
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Update
              </Text>
        </TouchableOpacity>

      </View>

      </View>

      {
          EditPopup == true
          ?
          (
            <View style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
            }}>
              <View
                style={{
                  width: 260,
                  backgroundColor: "lightgreen",
                  borderRadius: 12,
                  alignSelf: "center",
                }}
              >
              {/* Delivery Address title */}
              <Text style={{
                fontSize: 16,
                fontFamily: "Ubuntu-Medium",
                color: "#303030",
                alignSelf: "center",
                marginTop: 10
              }}>
                Update Address:
              </Text>
              {/* close btn */}
              <TouchableOpacity
                onPress={() => {
                  setEditPopup(false)
                  setEdit(false)
                  setEditText("")
                }}
                style={{
                  backgroundColor: 'green',
                  width: 20,
                  height: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  right: 7,
                  top: 7,
                  position: "absolute",
                }}>
                <Icon name="close" size={16} style={{color: '#fff'}} />
              </TouchableOpacity>
              {/* Delivery Address text */}
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Ubuntu-Regular",
                  color: "#303030",
                  alignSelf: "center",
                  padding: 10,
                  bottom: 4,
                }}
              >
                {EditText}
              </Text>
              {/* Delivery Address btn */}
              <TouchableOpacity 
              onPress={() => UpdateAddress()}
              style={{
                backgroundColor: "green",
                width: 60,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                alignSelf: "center",
                bottom: 5
              }}>
                <Text style={{
                  fontFamily: "Ubuntu-Medium",
                  color: "#fff"
                }}>
                  Update
                </Text>
              </TouchableOpacity>
              </View>
            </View>
          )
          :
          null
        }
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: "center",
    // alignItems: 'center',
  },
  Text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
