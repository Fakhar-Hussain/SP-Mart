import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FAQ({navigation}) {
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
          name="cloud-question"
          size={20}
          style={{right: 10, top: 1, color: '#fff'}}
        />
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Ubuntu-Medium',
            color: '#fff',
          }}>
          FAQ's
        </Text>
      </View>

      <View style={{flex: 9, alignItems: 'center'}}>
        
        <View style={{marginTop: 14, width: '86%'}}>
          {/* question */}
          <Text
            style={{
              fontFamily: 'Ubuntu-Medium',
              fontSize: 14,
              color: '#000',
            }}>
            Do I have to create an account to place an Order?
          </Text>
          {/* answare */}
          <Text
            style={{
              fontFamily: 'Ubuntu-Regular',
              fontSize: 14,
              color: '#000',
              marginTop: 7,
            }}>
            Creating an account is mandatory. We make sure that ordering grocery
            online at Metro Mart delivery is quick and fuss-free. .
          </Text>
        </View>
        <View
          style={{
            width: '80%',
            borderBottomWidth: 0.6,
            borderColor: '#000',
            alignSelf: 'center',
            top: 10,
          }}
        />

        <View style={{marginTop: 14, width: '86%'}}>
          {/* question */}
          <Text
            style={{
              fontFamily: 'Ubuntu-Medium',
              fontSize: 14,
              color: '#000',
            }}>
            What are your delivery hours?
          </Text>
          {/* answare */}
          <Text
            style={{
              fontFamily: 'Ubuntu-Regular',
              fontSize: 14,
              color: '#000',
              marginTop: 7,
            }}>
            Our delivery hour is from 10:00 AM to 08:00 PM.
          </Text>
        </View>
        <View
          style={{
            width: '80%',
            borderBottomWidth: 0.6,
            borderColor: '#000',
            alignSelf: 'center',
            top: 10,
          }}
        />

        <View style={{marginTop: 14, width: '86%'}}>
          {/* question */}
          <Text
            style={{
              fontFamily: 'Ubuntu-Medium',
              fontSize: 14,
              color: '#000',
            }}>
            I need to cancel or change my order! How can I do this?
          </Text>
          {/* answare */}
          <Text
            style={{
              fontFamily: 'Ubuntu-Regular',
              fontSize: 14,
              color: '#000',
              marginTop: 7,
            }}>
            Please contact helpline Number as soon as possible, we can let the mart know before it starts preparing your order. Once the order goes in the process, it can not be changed. With regard to any refund of a payment you have made online, please contact Metro Mart delivery service.
          </Text>
        </View>
        <View
          style={{
            width: '80%',
            borderBottomWidth: 0.6,
            borderColor: '#000',
            alignSelf: 'center',
            top: 10,
          }}
        />

        <View style={{marginTop: 14, width: '86%'}}>
          {/* question */}
          <Text
            style={{
              fontFamily: 'Ubuntu-Medium',
              fontSize: 14,
              color: '#000',
            }}>
            Can I edit my Order?
          </Text>
          {/* answare */}
          <Text
            style={{
              fontFamily: 'Ubuntu-Regular',
              fontSize: 14,
              color: '#000',
              marginTop: 7,
            }}>
            Your order can be edited before it reaches the mart. You could contact the customer support team via a call to do so. Once an order is placed and the mart starts preparing your grocery, you may not edit its contents.
          </Text>
        </View>
        <View
          style={{
            width: '80%',
            borderBottomWidth: 0.6,
            borderColor: '#000',
            alignSelf: 'center',
            top: 10,
          }}
        />

        <View style={{marginTop: 14, width: '86%'}}>
          {/* question */}
          <Text
            style={{
              fontFamily: 'Ubuntu-Medium',
              fontSize: 14,
              color: '#000',
            }}>
            How much time it takes to deliver the Order?
          </Text>
          {/* answare */}
          <Text
            style={{
              fontFamily: 'Ubuntu-Regular',
              fontSize: 14,
              color: '#000',
              marginTop: 7,
            }}>
            Generally it takes between 45 minutes to 1 hour time to deliver the order. Due to long distance or heavy traffic, delivery might take few extra minutes.          </Text>
        </View>
        <View
          style={{
            width: '80%',
            borderBottomWidth: 0.6,
            borderColor: '#000',
            alignSelf: 'center',
            top: 10,
          }}
        />

      </View>
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
