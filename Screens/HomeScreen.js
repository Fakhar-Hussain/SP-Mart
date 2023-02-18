import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
  LogBox,
  Dimensions,
  Animated,
  FlatList,
  ScrollView,
} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

// import AboutScreen from './AboutScreen';

// import firestore from '@react-native-firebase/firestore';

LogBox.ignoreAllLogs();
const {width, height} = Dimensions.get('screen');

const SliderImages = [
  {
    key: 1,
    title: 'Welcome to the Metro Mart',
    image: require('../assets/market.png'),
  },
  {
    key: 2,
    title: 'All Grocaries are available at Best Prices',
    image: require('../assets/grocery.png'),
  },
  {
    key: 3,
    title: 'Free Delivery all over the City',
    image: require('../assets/Shipping.jpg'),
  },
];

export default function HomeScreen({navigation}) {
  // const [Catagory, setCategory] = useState('')
  const [Dairy, setDairy] = useState('');
  const [Grocery, setGrocery] = useState('');
  const [Kids, setKids] = useState('');

  const [cartItemLength, setCartItemLength] = useState('');

  // const allStore = () => {
  //   try {
  //     const snapshots = firestore().collection('Products');
  //     snapshots.onSnapshot(querySnap => {
  //       const allProducts = querySnap?.docs.map(item => item.data());
  //       let DairyItem = allProducts.filter(
  //         item => item.ProductCategory == 'Dairy Products',
  //       );
  //       let GroceryItem = allProducts.filter(
  //         item => item.ProductCategory == 'Grocery Products',
  //       );
  //       let KidsItem = allProducts.filter(
  //         item => item.ProductCategory == 'Kids Products',
  //       );
  //       setDairy(DairyItem);
  //       setGrocery(GroceryItem);
  //       setKids(KidsItem);
  //       // console.log( data )

  //       const allCarts = firestore()
  //         .collection('Carts')
  //         .onSnapshot(querySnap => {
  //           let cartlength = querySnap.docs.map(item => item.data());
  //           setCartItemLength(cartlength.length);
  //         });
  //     });
  //   } catch (error) {}
  // };
  
  const DairyItems = Dairy.slice(0, 6);
  const GroceryItems = Grocery.slice(0, 6);
  const KidsItems = Kids.slice(0, 6);


  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      {/* Top Header 0.7 */}
      <View
        style={{
          flex: 0.7,
          flexDirection: 'row',
          backgroundColor: '#161a25',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          elevation: 5,
        }}>
        {/* openDrawerBtn */}
        <TouchableOpacity
          style={{position: 'absolute', left: 10}}
          onPress={() => navigation.openDrawer()}>
          <Icon
            name="table-of-contents"
            size={31}
            style={{top: 1, color: '#fff'}}
          />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'SpaceGrotesk-Medium',
            color: '#fff',
          }}>
          Metro Mart
        </Text>

        {/* cart Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('AddToCart')}
          style={{position: 'absolute', right: 15}}>
          <Ionicon name="cart" size={25} style={{top: 1, color: '#fff'}} />
          {cartItemLength == 0 ? null : (
            <Text
              style={{
                backgroundColor: 'red',
                position: 'absolute',
                borderRadius: 7.5,
                paddingTop: 1,
                width: 16,
                height: 16,
                left: 14,
                top: -4,
                textAlign: 'center',
                fontSize: 11,
                fontFamily: 'Ubuntu-Bold',
                color: '#fff',
              }}>
              {cartItemLength}
            </Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Slider Images 2.6  */}
      <View style={{flex: 2.6, alignItems: 'center'}}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={SliderImages}
          pagingEnabled={true}
          scrollAnimationDuration={4000}
          // onSnapToItem={ (index) => console.log('current index:', index)}
          renderItem={({item, index}) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                // backgroundColor: '#fff',
              }}>
              <Image
                style={{
                  width: '94%',
                  height: '94%',
                  borderRadius: 18,
                  backgroundColor: '#e6e4e5',
                }}
                source={item.image}
                resizeMode={'contain'}
              />
            </View>
          )}
        />
      </View>

      {/* Products */}
      <View style={{flex: 5}}>
        <ScrollView
          style={{paddingTop: 0}}
          showsVerticalScrollIndicator={false}>
          {/* Dairy Title & Icon 0.4  */}
          <View
            style={{
              height: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                position: 'absolute',
                alignSelf: 'center',
                fontSize: 16,
                fontFamily: 'Ubuntu-Medium',
                color: '#161a25',
                left: 20,
              }}>
              Dairy Products
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 14}}
              onPress={() => navigation.navigate('DairyItem', {Data: Dairy})}>
              <Icon name="arrow-right-circle" size={24} color={'#161a25'} />
            </TouchableOpacity>

            {/* Straight Line */}
            <View
              style={{
                position: 'absolute',
                width: '84%',
                bottom: -4,
                left: '8%',
                borderColor: '#333',
                borderWidth: 0.8,
              }}
            />
          </View>

          {/* Dairy Items 2.1 */}
          <View
            style={{
              flex: 2.1,
              paddingTop: 5,
              alignItems: 'center',
              marginHorizontal: 8,
            }}>
            <FlatList
              data={DairyItems}
              keyExtractor={item => item.ProductId}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) => {
                let size = item.ProductPrice.length;

                return (
                  <View
                    key={index}
                    style={{
                      marginHorizontal: 8,
                      height: 140,
                      alignItems: 'center',
                      paddingTop: 8,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Product', {ProductItem: item})
                      }
                      style={{
                        width: 100,
                        height: 110,
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        elevation: 6,
                      }}>
                      <Image
                        style={{width: 100, height: 86, borderRadius: 0}}
                        source={{uri: item.ProductImage}}
                        resizeMode={'contain'}
                      />
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          backgroundColor: '#fa4332',
                          width: 55,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: 'Ubuntu-Medium',
                            color: '#fff',
                          }}>
                          {size > 3
                            ? `$ ${item.ProductPrice}`
                            : `$ ${item.ProductPrice}.0`}
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <View style={{}}>
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: 'Ubuntu-Medium',
                          color: '#444',
                          top: 2,
                          width: 100,
                          textAlign: 'center',
                        }}>
                        {`${item.ProductName}`}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          {/* Grocaries Title & Icon 0.4  */}
          <View
            style={{
              height: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                position: 'absolute',
                alignSelf: 'center',
                fontSize: 16,
                fontFamily: 'Ubuntu-Medium',
                color: '#161a25',
                left: 20,
              }}>
              Grocery Products
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 14}}
              onPress={() =>
                navigation.navigate('GroceryItem', {Data: Grocery})
              }>
              <Icon name="arrow-right-circle" size={24} color={'#161a25'} />
            </TouchableOpacity>

            {/* Straight Line */}
            <View
              style={{
                position: 'absolute',
                width: '84%',
                bottom: -4,
                left: '8%',
                borderColor: '#333',
                borderWidth: 0.8,
              }}
            />
          </View>

          {/* Groceries Items 2.1 */}
          <View
            style={{
              flex: 2.1,
              paddingTop: 5,
              alignItems: 'center',
              marginHorizontal: 8,
            }}>
            <FlatList
              data={GroceryItems}
              keyExtractor={item => item.ProductId}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) => {
                let size = item.ProductPrice.length;

                return (
                  <View
                    key={index}
                    style={{
                      marginHorizontal: 8,
                      height: 140,
                      alignItems: 'center',
                      paddingTop: 8,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Product', {ProductItem: item})
                      }
                      style={{
                        width: 100,
                        height: 110,
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        elevation: 6,
                      }}>
                      <Image
                        style={{width: 100, height: 90, borderRadius: 14}}
                        source={{uri: item.ProductImage}}
                        resizeMode={'contain'}
                      />
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          backgroundColor: '#fa4332',
                          width: 55,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: 'Ubuntu-Medium',
                            color: '#fff',
                          }}>
                          {size > 3
                            ? `$ ${item.ProductPrice}`
                            : `$ ${item.ProductPrice}.0`}
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <View style={{}}>
                      <Text
                        style={{
                          top: 2,
                          fontSize: 13,
                          fontFamily: 'Ubuntu-Medium',
                          color: '#444',
                        }}>
                        {`${item.ProductName}`}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          {/* Kids Title & Icon 0.4  */}
          <View
            style={{
              height: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                position: 'absolute',
                alignSelf: 'center',
                fontSize: 16,
                fontFamily: 'Ubuntu-Medium',
                color: '#161a25',
                left: 20,
              }}>
              Kids Products
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 14}}
              onPress={() => navigation.navigate('KidsItem', {Data: Kids})}>
              <Icon name="arrow-right-circle" size={24} color={'#161a25'} />
            </TouchableOpacity>

            {/* Straight Line */}
            <View
              style={{
                position: 'absolute',
                width: '84%',
                bottom: -4,
                left: '8%',
                borderColor: '#333',
                borderWidth: 0.8,
              }}
            />
          </View>

          {/* Kids Items 2.1 */}
          <View
            style={{
              flex: 2.1,
              paddingTop: 5,
              alignItems: 'center',
              marginHorizontal: 8,
            }}>
            <FlatList
              data={KidsItems}
              keyExtractor={item => item.ProductId}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item, index}) => {
                let size = item.ProductPrice.length;

                return (
                  <View
                    key={index}
                    style={{
                      marginHorizontal: 8,
                      height: 140,
                      alignItems: 'center',
                      paddingTop: 8,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Product', {ProductItem: item})
                      }
                      style={{
                        width: 100,
                        height: 110,
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        elevation: 6,
                      }}>
                      <Image
                        style={{width: 100, height: 90, borderRadius: 14}}
                        source={{uri: item.ProductImage}}
                        resizeMode={'contain'}
                      />
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          backgroundColor: '#fa4332',
                          width: 55,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: 'Ubuntu-Medium',
                            color: '#fff',
                          }}>
                          {size > 3
                            ? `$ ${item.ProductPrice}`
                            : `$ ${item.ProductPrice}.0`}
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <View style={{}}>
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: 'Ubuntu-Medium',
                          color: '#444',
                          top: 2,
                        }}>
                        {`${item.ProductName}`}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <View style={{marginBottom: 6}}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

{
  /* search Button */
  /* <TouchableOpacity style={{position: "absolute", right: 50}}>
          <Ionicon
            name="search-outline"
            size={25}
            style={{top: 1, color: '#fff'}}
          />
        </TouchableOpacity> */
}

{
  /* <ImageBackground
          source={require('../assets/table.jpg')}
          style={{
            flex: 0.1,
            flexDirection: 'row',
            backgroundColor: '#45b39c',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            elevation: 5,
          }}
          resizeMode={'cover'}
        > */
}
{
  /* </ImageBackground> */
}

{
  /* Search Catagries  */
}
{
  /* <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          // backgroundColor: "pink"
        }}>
        <View
          style={{
            width: '80%',
            height: 40,
            justifyContent: 'center',
            borderColor: '#000',
            borderWidth: 0.7,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 34, 
          }}>
          <Ionicon name="search" size={24} style={{color: '#777'}} />
          <TextInput
            placeholder="Search Product"
            style={{
              top: 2,
              width: '75%',
              paddingLeft: 12,
              fontSize: 16,
              fontFamily: 'Ubuntu-Regular',
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            backgroundColor: '#161a25',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            elevation: 8,
          }}>
          <Ionicon name="search" size={24} style={{color: '#fff'}} />
        </TouchableOpacity>
      </View> */
}

{
  /* Dairy Items
            <View style={{flex: 0.3, top: 24,backgroundColor: '#e6e4e5'}}>
        <Text
          style={{
            position: 'absolute',
            fontSize: 16,
            fontFamily: 'Ubuntu-Bold',
            color: '#161a25',
            marginLeft: 10,
            // backgroundColor: "red",
          }}>
          DairyItems
        </Text>
        <TouchableOpacity>
          <Icon
            name="arrow-right-circle"
            size={24}
            color={'#161a25'}
            style={{position: 'absolute', right: 14}}
          />
        </TouchableOpacity>

        <View
          style={{
            top: 30,
            alignItems: 'center',
            // backgroundColor: "pink"
          }}>
          <FlatList
            data={DairyItems}
            keyExtractor={index => index}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: 120,
                    height: 120,
                    left: 12,
                    // backgroundColor: "pink",
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 110,
                      justifyContent: "center",
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      borderRadius: 17,
                      elevation: 8
                      // borderColor: "#000",
                      // borderWidth: 1
                    }}>
                    <Image
                      style={{width: 65, height: 65, borderRadius: 14}}
                      source={item.image}
                      resizeMode={'contain'}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: 'SpaceGrotesk-SemiBold',
                        color: '#000',
                        paddingTop: 5,
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        {/* <View
          style={{
            top: 22,
            marginHorizontal: '8%',
            width: '84%',
            borderColor: '#000',
            borderBottomWidth: 0.6,
          }}
        /> */
}
// </View>
