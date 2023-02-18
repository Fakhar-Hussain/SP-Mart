import React, {useEffect , useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import firebase from '@react-native-firebase/firestore';

export default function Product({navigation, route}) {
  const [Qty, setQty] = useState(1);

  const [CartItems, setCartItems] = useState('');

  let data = route.params.ProductItem;
  // console.log(data);

  // const StockChange = () => {
  //   if ((data.ProductStock).length > 9) {
  //     firebase().collection("Products").doc(data.ProductId).update({
  //       ProductStock: "Available"
  //     })
  //   }
  //   else {
  //     firebase().collection("Products").doc(data.ProductId).update({
  //       ProductStock: "Not Available"
  //     })
  //   }
  //   navigation.navigate("Home")
  // }
  const AllCartItems = () => {
    firebase().collection("Carts").onSnapshot((querySnap) => {
    let carts = querySnap.docs.map((item) => item.data().ProductName) 
    let cartCheck = carts.includes(data.ProductName) 
    console.log(cartCheck);
    setCartItems(cartCheck)
  })
  } 
  
  const AddToCart = () => {
    
    // console.log(Qty);
    if (data.ProductStock == "Not Available") {
      Alert.alert("Cart","Sorry! This Product is not Available");
    }
    else{
      if (CartItems == true) {
        Alert.alert("Cart","Sorry!");
      }
      else {
        firebase().collection("Carts").add({
          ProductName: data.ProductName, 
          ProductPrice: data.ProductPrice,
          ProductImage: data.ProductImage,
          ProductQty: Qty,
          CartId: '',
        }).then((docRef) => {
          firebase().collection("Carts").doc(docRef.id).update({
            CartId: docRef.id
          })
          Alert.alert("Cart","Cart Add Successfully");
          navigation.goBack();
        })
      }
    }
    
  };

  useEffect(() => {
    // AllCartItems()
  }, [])
  

  return (
    <View style={styles.container}>
      {/* Top Header */}
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
        <TouchableOpacity
          style={{position: 'absolute', left: 10}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} style={{top: 0, color: '#fff'}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Ubuntu-Medium',
            color: '#fff',
          }}>
          Product
        </Text>
      </View>

      {/* Head Cart */}
      <View style={{flex: 9}}>
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            padding: 15,
            backgroundColor: '#fff',
          }}>
          <Image
            resizeMode="contain"
            source={{
              uri: data.ProductImage,
              // uri: 'https://i.ytimg.com/vi/OOl8ykqhHkw/maxresdefault.jpg',
            }}
            style={{
              width: 100,
              height: 120,
              top: 12,
            }}
          />
          <View
            style={{
              top: 10,
              paddingLeft: 14,
            }}>
            <View style={{flexDirection: 'row'}}>
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
                }}>
                {data.ProductName} {data.ProductWeight}
              </Text>
            </View>

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
                {`$ ${data.ProductPrice}.0`}
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Ubuntu-Medium',
                  top: 5,
                  color: '#161a25',
                }}>
                Stock:
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Ubuntu-Medium',
                  color: data.ProductStock.length > 9 ? '#f53e31' : 'green',
                  paddingLeft: 8,
                }}>
                {data.ProductStock}
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 12}}>
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

              <TouchableOpacity
                onPress={() => {
                  Qty >= 2 ? setQty(Qty - 1) : Qty;
                }}
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: '#ddd',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                  marginLeft: 18,
                }}>
                <Text
                  style={{
                    top: -2,
                    fontSize: 20,
                    fontFamily: 'Ubuntu-Bold',
                  }}>
                  -
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  paddingHorizontal: 5,
                  top: -2,
                  fontSize: 18,
                  fontFamily: 'Ubuntu-Medium',
                }}>
                {Qty}
              </Text>

              <TouchableOpacity
                onPress={() => setQty(Qty + 1)}
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: '#ddd',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    // top: -2,
                    fontSize: 16,
                    fontFamily: 'Ubuntu-Bold',
                  }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.4,
            borderColor: '#000',
            flexDirection: 'row',
            top: 26,
            alignSelf: 'center',
            width: '88%',
            elevation: 3.6,
          }}
        />
        {/* Add to cart Button */}
        <View
          style={{
            flex: 0.1,
            position: 'absolute',
            bottom: 20,
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => AddToCart()}
            style={{
              backgroundColor: 'green',
              height: 45,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 6,
              flexDirection: 'row',
              elevation: 6,
            }}>
            <Icon name="cart" size={22} style={{left: -5, color: '#fff'}} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Ubuntu-Medium',
                color: '#fff',
              }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
