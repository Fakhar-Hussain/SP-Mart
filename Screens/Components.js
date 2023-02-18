import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export function DeliveryPopup(props) {
    const DeliveryProps = props.DeliveryProps
    const UpdateProps = props.UpdateProps 
    const CancelProps = props.CancelProps
    // const UpdateAddress = () => {
    //     let uid = auth().currentUser.uid;
    //     firestore().collection('MartUser').doc(uid).update({
    //       Address: DeliveryProps
    //     }).then( () => {
    //       setEditPopup(false)
    //       setEdit(false)
    //     })
    // }

    return (
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
          onPress={() => CancelProps }
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
           {DeliveryProps}
          {/* {EditText} */}
        </Text>
        {/* Delivery Address btn */}
        <TouchableOpacity 
        onPress={() => UpdateProps}
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
}
