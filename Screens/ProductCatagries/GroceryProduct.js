import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import firestore from '@react-native-firebase/firestore';

const GroceryProduct = ({navigation, route}) => {
  const [item, setItem] = useState([]);

  let data = route.params.Data;
  // let data = category.filter(item => item.ProductCategory == 'Dairy Products');

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
          <Icon name="arrow-left" size={24} style={{top: 1, color: '#fff'}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'SpaceGrotesk-Medium',
            color: '#fff',
          }}>
          Grocery Products
        </Text>
      </View>

      {/* Grocery Items */}
      <View
        style={{
          flex: 9,          
          paddingTop: 5,
          alignItems: 'center',
          backgroundColor: '#eee',
        }}>
        <FlatList
          data={data}
          keyExtractor={item => item.ProductId}
          numColumns={3}
          renderItem={({item, index}) => {
            let size = item.ProductPrice.length;
            return (
              <View
                key={index}
                style={{
                  marginHorizontal: 7,
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

                <View 
                  style={{
                    alignItems: 'center', 
                    top: 4,
                    width: 104,
                    justifyContent: 'center',
                    padding: 2,
                  }}>
                  <Text
                    style={{
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default GroceryProduct;
