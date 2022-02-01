import React from 'react';
import {ScrollView, Text, View, TouchableHighlight, Image} from 'react-native';

export const MenuItem = ({navigation}: any) => {
  return (
    <TouchableHighlight>
      <View>
        <Image source={require('../assets/images/drug.png')}></Image>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}></Image>
        <Text>Dava22</Text>
      </View>
    </TouchableHighlight>
  );
};
