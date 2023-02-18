import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import firebase from '@react-native-firebase/firestore';

export default function AddToCart({navigation}) {
  const [Qty, setQty] = useState(0);
  const [Popup, setPopup] = useState(true);
  const [cartItem, setCartItem] = useState('');
  const [cartTotalPrice, setCartTotalPrice] = useState('');

  const getCart = async () => {
    const allCarts = await firebase()
      .collection('Carts')
      .onSnapshot(querySnap => {
        let carts = querySnap.docs.map(item => item.data());
        setCartItem(carts);

        let total = querySnap.docs.map(item => item.data().ProductPrice);
        setCartTotalPrice(total);

        // let fullTotal = 0;
        // fullTotal = fullTotal + item.qty * item.price
        // console.log(fullTotal);
        // total.map( (item) => {
        // })
        // const Total = () => {
        //   return fullTotal;
        // }
        // carts.map( (item) => {
        //   console.log(item.ProductPrice);
        // })
        // let sum = total.reduce((a, b) => {
        //   return +a + +b;
        // });

        // if (cartTotalPrice == '') {

        // } else {
        //   let sum = total.reduce((a, b) => {
        //     return +a + +b;
        //   });
        // }
      });
  };

  const deleteCart = item => {
    firebase()
      .collection('Carts')
      .doc(item.CartId)
      .delete()
      .then(() => {
        getCart();
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <View style={{flex: 1}}>
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
        <Icon name="cart" size={20} style={{right: 5, top: 1, color: '#fff'}} />
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Ubuntu-Medium',
            color: '#fff',
          }}>
          Cart
        </Text>
      </View>

      {/* Cart Items */}
      <View style={{flex: 9}}>
        {cartItem == '' ? (
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/emptycart.png')}
              style={{top: -30, width: '70%', height: '70%'}}
              resizeMode={'contain'}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
            }}>
            <FlatList
              style={{maxHeight: '92%'}}
              showsVerticalScrollIndicator={false}
              data={cartItem}
              keyExtractor={item => item.CartId}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      backgroundColor: '#fff',
                      margin: 10,
                      borderRadius: 12,
                      flexDirection: 'row',
                      elevation: 8,
                      paddingVertical: 10,
                    }}>
                    {/* Product Image */}
                    <Image
                      source={{
                        uri: item.ProductImage,
                      }}
                      style={{
                        top: 6,
                        left: 14,
                        width: 80,
                        height: 80,
                      }}
                      resizeMode={'contain'}
                    />
                    {/* Close Btn */}
                    <TouchableOpacity
                      onPress={() => deleteCart(item)}
                      style={{
                        position: 'absolute',
                        right: 7,
                        top: 5,
                        borderRadius: 20,
                        padding: 2,
                      }}>
                      <Icon
                        name="close"
                        size={20}
                        style={{top: 0.5, color: '#333'}}
                      />
                    </TouchableOpacity>

                    {/* Product Text */}
                    <View
                      style={{
                        flex: 0.8,
                        left: 14,
                        paddingLeft: 14,
                      }}>
                      {/* Name */}
                      <View style={{flexDirection: 'row', marginTop: 4}}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontFamily: 'Ubuntu-Medium',
                            top: 5,
                            color: '#161a25',
                          }}>
                          Name:
                        </Text>

                        <Text
                          style={{
                            fontSize: 18,
                            fontFamily: 'Ubuntu-Medium',
                            color: '#161a25',
                            paddingLeft: 8,
                            width: 175,
                            height: 22,
                          }}>
                          {item.ProductName}
                        </Text>
                      </View>
                      {/* Price */}
                      <View style={{flexDirection: 'row', marginTop: 8}}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontFamily: 'Ubuntu-Medium',
                            top: 5,
                            color: '#161a25',
                          }}>
                          Price:
                        </Text>

                        <Text
                          style={{
                            fontSize: 16,
                            fontFamily: 'Ubuntu-Medium',
                            color: '#fff',
                            paddingVertical: 4,
                            paddingHorizontal: 8,
                            left: 10,
                            backgroundColor: '#f53e31',
                            borderRadius: 5,
                            elevation: 4,
                          }}>
                          {`$ ${item.ProductPrice}.0`}
                        </Text>
                      </View>
                      {/* Qty */}
                      <View style={{flexDirection: 'row', marginTop: 6}}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontFamily: 'Ubuntu-Medium',
                            top: 5,
                            color: '#161a25',
                            left: 2,
                          }}>
                          Qty:
                        </Text>
                        {/* <Text
                          style={{
                            paddingHorizontal: 8,
                            paddingLeft: 16,
                            top: -2,
                            fontSize: 18,
                            fontFamily: 'Ubuntu-Medium',
                            color: '#333',
                          }}>
                          {item.ProductQty}
                        </Text> */}

                        <TouchableOpacity
                          onPress={() => {
                            Qty >= 1 ? setQty(Qty - 1) : Qty;
                          }}
                          style={{
                            height: 16,
                            width: 16,
                            backgroundColor: '#ddd',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 3,
                            marginLeft: 18,
                            top: 3,
                          }}>
                          <Text
                            style={{
                              top: -7,
                              // fontSize: 20,
                              fontFamily: 'Ubuntu-Regular',
                            }}>
                            _
                          </Text>
                        </TouchableOpacity>

                        <Text
                          style={{
                            paddingHorizontal: 5,
                            top: -2,
                            fontSize: 18,
                            fontFamily: 'Ubuntu-Medium',
                          }}>
                          {item.ProductQty + Qty}
                        </Text>

                        <TouchableOpacity
                          onPress={() => setQty(Qty + 1)}
                          style={{
                            height: 16,
                            width: 16,
                            backgroundColor: '#ddd',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 3,
                            // marginLeft: 18,
                            top: 3,
                          }}>
                          <Text
                            style={{
                              top: -2,
                              // fontSize: 16,
                              // fontFamily: 'Ubuntu-Bold',
                            }}>
                            +
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />

            <View
              style={{
                backgroundColor: '#fff',
                position: 'absolute',
                zIndex: 2,
                width: '100%',
                height: '10%',
                alignSelf: 'center',
                bottom: 0,
                elevation: 10,
              }}>
              <Text
                style={{
                  left: 15,
                  top: 6,
                  width: 235,
                  color: '#333',
                  fontFamily: 'Ubuntu-Medium',
                  fontSize: 15,
                }}>
                Cart Items: {cartItem.length}
              </Text>
              <Text
                style={{
                  left: 10,
                  top: 8,
                  width: 235,
                  color: '#333',
                  fontFamily: 'Ubuntu-Medium',
                  fontSize: 15,
                }}>
                Payable Amount: $.
              </Text>

              <TouchableOpacity
                onPress={() => setPopup(!Popup)}
                style={{
                  backgroundColor: 'green',
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 130,
                  height: 40,
                  borderRadius: 8,
                  right: 10,
                  marginVertical: 6,
                }}>
                <Text style={{color: '#fff', fontFamily: 'Ubuntu-Bold'}}>
                  Order Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {Popup == true ? (
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
              // backgroundColor: "red"
            }}>
            <View
              style={{
                width: '65%',
                height: '50%',
                borderRadius: 15,
                backgroundColor: 'lightgreen',
                alignItems: 'center',
                elevation: 10,
                // justifyContent: "center"
              }}>
              <View
                style={{
                  position: 'absolute',
                  left: 24,
                }}>
                {/* Total Carts */}
                <Text
                  style={{
                    fontFamily: 'Ubuntu-Regular',
                    fontSize: 18,
                    color: 'green',
                    top: 25,
                  }}>
                  Total Cart's : 02
                </Text>
                {/* Total Amount */}
                <Text
                  style={{
                    fontFamily: 'Ubuntu-Regular',
                    fontSize: 18,
                    color: 'green',
                    top: 35,
                  }}>
                  Total Amount : $2000.0
                </Text>
                {/* Delivery Address */}
                {/* <Text
                  style={{
                    fontFamily: 'Ubuntu-Regular',
                    fontSize: 18,
                    color: 'green',
                    marginTop: 40,
                  }}>
                  Delivery Address
                </Text> */}
                {/* COD */}
                <View
                  style={{
                    top: 105,
                    flexDirection: 'row',
                    position: 'absolute',
                  }}>
                  <Icon
                    name="check"
                    size={18}
                    style={{
                      padding: 2,
                      color: 'green',
                      borderWidth: 0.8,
                      borderColor: 'green',
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'Ubuntu-Regular',
                      fontSize: 16,
                      color: 'green',
                      left: 10,
                    }}>
                    Cash on Delivery
                  </Text>
                </View>
              </View>

              {/* Close Btn */}
              <TouchableOpacity
                onPress={() => setPopup(!Popup)}
                style={{
                  position: 'absolute',
                  right: 7,
                  top: 5,
                  borderRadius: 20,
                  padding: 2,
                }}>
                <Icon
                  name="close"
                  size={20}
                  style={{top: 0.5, color: 'green'}}
                />
              </TouchableOpacity>

              {/* Confirm Order buton */}
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 15,
                  width: 180,
                  height: 40,
                  borderRadius: 6,
                  backgroundColor: 'green',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Ubuntu-Medium',
                    fontSize: 16,
                    color: '#fff',
                  }}>
                  Confirm Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
