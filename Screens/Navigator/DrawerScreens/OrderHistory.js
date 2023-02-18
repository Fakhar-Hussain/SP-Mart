import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function OrderHistory({navigation}) {
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
        <Icon name="clipboard-text-clock" size={20} style={{right: 10, top: 1, color: '#fff'}} />
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Ubuntu-Medium',
            color: '#fff',
          }}>
          Order History
        </Text>
      </View>

      <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[styles.Text]}>History</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
      },
      Text: {
        fontSize: 22,
        fontWeight: "bold"
      }
})